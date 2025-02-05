"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isAboutPage = pathname === "/About";
  const targetRoute = isAboutPage ? "/" : "/About";
  const linkText = isAboutPage ? "home" : "about";

  return (
    <nav className="fixed top-10 left-0 w-full z-50 font-[family-name:var(--font-ibm-mono)]">
      <div className="container mx-auto px-4 py-2 flex text-white items-center justify-center">
        <Link href={targetRoute} className="group relative">
          {linkText}
          <span className="absolute -left-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
            &gt;
          </span>
        </Link>
      </div>
    </nav>
  );
}
