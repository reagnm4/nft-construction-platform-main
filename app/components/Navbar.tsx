import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">The Construction Network</h1>
      <ul className="flex gap-4">
        <li>
          <Link href="/" className="hover:text-blue-600">Home</Link>
        </li>
        <li>
          <Link href="/overview" className="hover:text-blue-600">Overview</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
        </li>
        <li>
          <Link href="/builders" className="hover:text-blue-600">Network</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
