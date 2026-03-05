import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E4E6EB] mt-8 sm:mt-12">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 text-center text-[16px] text-[#65676B]">
        <p className="mb-2 sm:mb-3 text-[16px]">
          © {new Date().getFullYear()} Raphaël Randrianantoanina - Praxis
          Portfolio
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-[16px]">
          <Link
            href="/about"
            className="text-[#1877F2] hover:text-[#050505] transition"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-[#1877F2] hover:text-[#050505] transition"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-[#1877F2] hover:text-[#050505] transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
