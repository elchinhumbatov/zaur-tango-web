'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AlignLeft, X, User } from "lucide-react";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Packages", path: "/packages" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Temporary state for auth

  return (
    <>
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-md bg-[var(--background)]`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="order-2 md:order-1">
          <Image src="/img/logo-zaur.png" alt="Zaur-Tango Logo" width={90} height={50} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 order-4 md:order-2">
          {links.map(link => (
            <Link key={link.path} href={link.path} className="text-gray-700 hover:text-gray-900">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Account & Theme Switcher */}
        <div className="flex items-center space-x-2 order-3 md:order-3">
          {/* <button className="p-2 bg-gray-200 rounded"><Moon /></button> Theme Switcher */}

          {isLoggedIn ? (
            <Dropdown>
              <DropdownTrigger>
                <Button color='default' variant='light' size='sm'>
                  <User />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="profile">
                  <Link href="/profile">Profile</Link>
                </DropdownItem>
                <DropdownItem key="settings">
                  <Link href="/settings">Settings</Link>
                </DropdownItem>
                <DropdownItem key="logout">
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <Button color='default' variant='light' size='sm'>
              <Link href="/login"><User /></Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 order-1 md:order-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <AlignLeft />}
        </button>
      </div>
    </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
            <div 
              className="fixed top-0 left-0 w-screen h-screen bg-transparent z-50"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.3 }}
                className="absolute top-[72px] left-0 w-full bg-white shadow-md md:hidden p-4 z-50"
              >
                {links.map(link => (
                  <Link key={link.path} href={link.path} className="block text-gray-700 hover:text-gray-900 py-2">
                    {link.name}
                  </Link>
                ))}
              </motion.div>
            </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;