import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { scrollToElement } from '../../logic/scrollToElement';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#nosotros' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contactos' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/RakonaDev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/juan-cajas-4a37b2345/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:juancajas1905@gmail.com', label: 'Email' }
  ];

  return (
    <div style={{backgroundColor: '#0B192C'}}>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'shadow-2xl border-b' 
            : ''
        } ${className}`}
        style={{
          backgroundColor: isScrolled ? 'rgba(11, 25, 44, 0.95)' : 'rgba(11, 25, 44, 0.8)',
          backdropFilter: 'blur(12px)',
          borderColor: isScrolled ? '#1E3E62' : 'transparent'
        }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <button 
              onClick={() => scrollToElement('#inicio', 100)}
              className="text-2xl md:text-3xl font-bold hover:scale-105 transition-transform duration-300"
              style={{color: '#FF6500'}}
            >
              Juan Cajas
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToElement(item.href, 100)}
                className="relative font-medium group transition-colors duration-300"
                style={{
                  color: '#9CA3AF',
                  animationDelay: `${index * 100}ms`
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                {item.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{backgroundColor: '#FF6500'}}
                ></span>
              </button>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                target='_blank'
                href={social.href}
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                style={{
                  color: '#9CA3AF',
                  animationDelay: `${(index + navItems.length) * 100}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.backgroundColor = '#1E3E62';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9CA3AF';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToElement('#contactos', 100)}
              className="ml-4 cssbuttons-io px-6 ring-2 ring-primary text-white py-2 font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              /*
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E55A00';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 101, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FF6500';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 101, 0, 0.25)';
              }}
              */
            >
              <span>Contáctame</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-300"
            style={{color: '#9CA3AF'}}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.backgroundColor = '#1E3E62';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9CA3AF';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div style={{backgroundColor: 'rgba(11, 25, 44, 0.95)', backdropFilter: 'blur(12px)', borderTop: `1px solid #1E3E62`}}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => { 
                  setIsMenuOpen(false)
                  scrollToElement(item.href, 100) 
                }}
                
                className="block px-4 py-3 rounded-lg transition-all duration-300 font-medium"
                style={{
                  color: '#9CA3AF',
                  animationDelay: `${index * 50}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.backgroundColor = '#1E3E62';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9CA3AF';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-4" style={{borderTop: `1px solid #1E3E62`}}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-lg transition-all duration-300"
                  style={{color: '#9CA3AF'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.backgroundColor = '#1E3E62';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#9CA3AF';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="pt-4">
              <button
                onClick={() => { 
                  setIsMenuOpen(false)
                  scrollToElement('#contactos', 100) 
                }}
                
                className="block w-full text-center px-6 py-3 font-medium rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: '#FF6500',
                  color: '#FFFFFF'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E55A00'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF6500'}
              >
                Contáctame
              </button>
            </div>
          </div>
        </div>
      </div>
      </header>
    </div>
  );
};

export default Header;