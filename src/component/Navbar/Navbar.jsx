import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Hero');

  const links = [
    ['Hero', 'Home'],
    ['About', 'About'],
    ['Services', 'Services'],
    ['Project', 'Projects'],
    ['Contect', 'Contact'],
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const current = links.find(([id]) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActive(current[0]);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a className="nk-logo" href="#Hero" onClick={closeMenu}>
        NK
      </a>

      <button
        className={`menu-icon ${menuOpen ? 'open' : ''}`}
        type="button"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        {links.map(([id, label]) => (
          <li key={id}>
            <a
              className={active === id ? 'active' : ''}
              href={`#${id}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
