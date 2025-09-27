import NavLinks from "./NavLinks";
import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => (
  <>
    {isOpen && (
      <div className="grid gap-5 justify-center md:hidden py-6 mobile-menu">
        <NavLinks isMobile={true} />
      </div>
    )}
  </>
);

export default MobileMenu;