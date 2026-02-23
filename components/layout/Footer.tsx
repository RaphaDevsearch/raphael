import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-8 sm:mt-12">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-500">
        <p className="mb-2 sm:mb-3 text-xs sm:text-sm">
          © {new Date().getFullYear()} Raphaël Randrianantoanina - Praxis
          Portfolio
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
          <Link href="/about" className="text-blue-600 hover:underline">
            About
          </Link>
          <Link href="/projects" className="text-blue-600 hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="text-blue-600 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
