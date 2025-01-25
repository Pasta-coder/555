import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
