import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-12">
      <div className="max-w-4xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
        <p className="mb-2">
          © {new Date().getFullYear()} Raphaël Randrianantoanina - Praxis
          Portfolio
        </p>

        <div className="flex flex-wrap justify-center gap-4">
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
