import Link from "next/link";

export default function Navigation() {
  return (
    <header className="grid grid-cols-2">
      logo
      <nav>
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li><Link href="/servercomp">Server</Link></li>
          <li><Link href="/clientcomp">Client</Link></li>
          <li><Link href="/customer">Customer Care</Link></li>
        </ul>
      </nav>
    </header>
  );
}
