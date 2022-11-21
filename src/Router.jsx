import {
  Fragment,
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Route,
  Link as RouterLink,
  NavLink as RouterNavLink,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Helmet } from "react-helmet";
import { withStyles } from "react-critical-css";

const PRESERVED = import.meta.globEager(
  "/src/layouts/(app|notFound|loading|error).jsx"
);
const EAGER_ROUTES = import.meta.globEager("/src/screens/**/[a-z[]*.jsx");
const LAZY_ROUTES = import.meta.glob("/src/screens/**/[a-z[]*.lazy.jsx");
const ROUTES = import.meta.glob("/src/screens/**/[a-z[]*.jsx");
const STYLES = import.meta.globEager("/src/styles/*.(scss|css)");

const preserved = Object.keys(PRESERVED).reduce((preserved, file) => {
  const key = file.replace(/\/src\/layouts\/|\.jsx$/g, "");
  return { ...preserved, [key]: PRESERVED[file].default };
}, {});

const eagerRoutes = Object.keys(EAGER_ROUTES)
  .filter((route) => !route.includes(".lazy"))
  .map((route) => {
    const routes = ROUTES[route];
    const path = route
      .replace(/\/src\/screens|index|\.jsx$/g, "")
      .replace(/\[\.{3}.+\]/, "*")
      .replace(/\[(.+)\]/, ":$1");

    return {
      path,
      component: EAGER_ROUTES[route].default,
      loader: async (...args) => routes().then((mod) => mod?.loader?.(...args)),
      action: async (...args) => routes().then((mod) => mod?.action?.(...args)),
      preload: ROUTES[route],
    };
  });

const lazyRoutes = Object.keys(LAZY_ROUTES).map((route) => {
  const routes = ROUTES[route];
  const path = route
    .replace(/\/src\/screens|index|\.jsx$/g, "")
    .replace(/\[\.{3}.+\]/, "*")
    .replace(/\[(.+)\]/, ":$1")
    .replace(/\.lazy/, "");

  return {
    path,
    component: lazy(LAZY_ROUTES[route]),
    loader: async (...args) => routes().then((mod) => mod?.loader?.(...args)),
    action: async (...args) => routes().then((mod) => mod?.action?.(...args)),
    preload: ROUTES[route],
  };
});

const routes = [...eagerRoutes, ...lazyRoutes];

const getMatchingRoute = (path) => {
  return routes.find(
    (route) =>
      path.match(new RegExp(route.path.replace(/:\w+|\*/g, ".*")))?.[0] === path
  );
};

export function Head({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description ? description : title} />
    </Helmet>
  );
}

export function Link({ children, to, prefetch = true, ...props }) {
  const ref = useRef(null);
  const [prefetched, setPrefetched] = useState(false);

  const route = useMemo(() => getMatchingRoute(to), [to]);
  const preload = useCallback(
    () => route?.preload() && setPrefetched(true),
    [route]
  );
  const prefetchable = Boolean(route && !prefetched);

  useEffect(() => {
    if (prefetchable && prefetch && ref?.current) {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => entry.isIntersecting && preload()),
        { rootMargin: "200px" }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [prefetch, prefetchable, preload]);

  const handleMouseEnter = () => prefetchable && preload();

  return (
    <RouterLink ref={ref} to={to} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </RouterLink>
  );
}

export function NavLink({ children, to, prefetch = true, ...props }) {
  const ref = useRef(null);
  const [prefetched, setPrefetched] = useState(false);

  const route = useMemo(() => getMatchingRoute(to), [to]);
  const preload = useCallback(
    () => route?.preload() && setPrefetched(true),
    [route]
  );
  const prefetchable = Boolean(route && !prefetched);

  useEffect(() => {
    if (prefetchable && prefetch && ref?.current) {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => entry.isIntersecting && preload()),
        { rootMargin: "200px" }
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [prefetch, prefetchable, preload]);

  const handleMouseEnter = () => prefetchable && preload();

  return (
    <RouterNavLink ref={ref} to={to} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </RouterNavLink>
  );
}

export function SuspenseAfterInitialRender({ fallback, children }) {
  let [isInitialRender, setIsInitialRender] = useState(true);

  return isInitialRender ? (
    <>
      <Lifecycle afterRender={() => setIsInitialRender(false)} />
      {children}
    </>
  ) : (
    <Suspense fallback={fallback}>{children}</Suspense>
  );
}

function Lifecycle({ afterRender }) {
  useEffect(() => {
    afterRender();
  }, [afterRender]);

  return null;
}

const Router = () => {
  if (Object.keys(STYLES).length === 0) {
    console.error("No styles found");
  }
  if (Object.keys(ROUTES).length === 0) {
    console.error("No routes found");
  }
  if (!Object.keys(PRESERVED).includes("/src/layouts/notFound.jsx")) {
    console.error("No 404 element found");
  }
  if (!Object.keys(PRESERVED).includes("/src/layouts/loading.jsx")) {
    console.error("No loader function found");
  }
  if (!Object.keys(PRESERVED).includes("/src/layouts/error.jsx")) {
    console.error("No error element found");
  }

  const App = preserved?.["app"] || Fragment;
  const NotFound = preserved?.["notFound"] || Fragment;
  const Loading = preserved?.["loading"] || Fragment;
  const Error = preserved?.["error"] || Fragment;

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route
              path="/"
              element={
                <App
                  not404={routes
                    .map((route) => route.path)
                    .includes(
                      window.location.pathname || window.location.pathname + "/"
                    )}
                />
              }
            >
              {routes?.map(
                ({ path, component: Component = Fragment, loader, action }) => {
                  return (
                    <Route
                      key={path}
                      path={path}
                      element={<Component />}
                      loader={loader}
                      action={action}
                      errorElement={<Error />}
                    />
                  );
                }
              )}
              <Route path="*" element={<NotFound />} />
            </Route>
          )
        )}
      />
    </Suspense>
  );
};

export default withStyles(STYLES)(Router);
