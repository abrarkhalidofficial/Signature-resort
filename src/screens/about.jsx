import { Head, Link, NavLink } from "router";

import React from "react";

export default function About() {
  return (
    <div>
      <Head title="About | Demo Template" description="About | Demo Template" />
      about
      <Link to="/">Home</Link>
      <NavLink to="/settings">Settings</NavLink>
    </div>
  );
}
