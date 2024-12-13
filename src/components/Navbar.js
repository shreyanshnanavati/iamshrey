"use client";
import { useState } from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-background/90 dark:bg-background-dark/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-primary dark:text-primary-dark"
          >
            Shreyansh
          </Link>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-2xl text-primary dark:text-primary-dark"
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors">
              About
            </Link>
            <Link href="/projects" className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-background dark:bg-background-dark">
            <div className="flex flex-col h-full p-4">
              {/* Mobile Header */}
              <div className="flex justify-between items-center mb-8">
                <Link 
                  href="/" 
                  className="text-2xl font-bold text-primary dark:text-primary-dark"
                  onClick={() => setIsOpen(false)}
                >
                  Shreyansh
                </Link>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-2xl text-primary dark:text-primary-dark"
                >
                  ✖
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-6 text-center text-xl">
                <Link 
                  href="/" 
                  className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/projects" 
                  className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="/contact" 
                  className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Social Icons */}
              <div className="flex justify-center space-x-8 mt-auto mb-8">
                <a href="#" className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors">
                  <FaTwitter size={24} />
                </a>
                <a href="#" className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="#" className="text-foreground hover:text-primary dark:text-foreground-dark hover:dark:text-primary-dark transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}