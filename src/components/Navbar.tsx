import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-black p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a>
            <h1 className="text-2xl font-bold">Soat Soatdigon</h1>
          </a>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/admin">
              <a className="text-lg font-bold">Admin</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}