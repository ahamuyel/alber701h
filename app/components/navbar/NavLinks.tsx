import Link from "next/link";
import CTAButton from "./CTAButton";

interface NavLinksProps {
  isMobile: boolean;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile }) => {
  const links = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre Mim" },
    { href: "#stacks", label: "Stacks" },
    { href: "#carreira", label: "Carreira" },
    { href: "#projects", label: "Projetos" },
    { href: "#contact", label: "Blog" },
  ];

  return (
    <div
      className={`${
        isMobile ? "flex flex-col items-center gap-4" : "hidden md:flex items-center gap-8"
      } text-base font-medium`}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="nav-link"
        >
          {link.label}
        </Link>
      ))}
      <CTAButton />
    </div>
  );
};

export default NavLinks;