import Link from "next/link";

interface CTAButtonProps {
  className?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ className = "", onClick }) => (
  <Link
    href="#contact"
    className={`cta-button ${className}`}
    onClick={onClick}
  >
    Contacte-me
  </Link>
);

export default CTAButton;