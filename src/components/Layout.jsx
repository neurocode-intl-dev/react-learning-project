import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <h1>My App</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/profile/harish">Profile</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
