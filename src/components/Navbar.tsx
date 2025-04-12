
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Toggle } from '@/components/ui/toggle';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.skills'), href: '#skills' },
    { name: t('navbar.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 dark:bg-navy/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold flex items-center animate-fade-in transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="bg-gradient-to-r from-purple-default to-indigo-default bg-clip-text text-transparent">Portfolio</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-navy dark:text-lightSlate hover:text-accent dark:hover:text-accent transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {link.name}
            </a>
          ))}
          
          <LanguageSelector />
          
          <Toggle 
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
            aria-label="Toggle dark mode"
            className="mr-2 animate-fade-in transition-transform hover:rotate-12 duration-300"
            style={{ animationDelay: '0.5s' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Toggle>
          
          <a 
            href="#contact"
            className="animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <Button className="bg-gradient-to-r from-purple-default to-indigo-default hover:opacity-90 text-white transition-all duration-300 shadow-lg hover:shadow-accent/30">
              {t('navbar.getInTouch')}
            </Button>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageSelector />
          
          <Toggle 
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
            aria-label="Toggle dark mode"
            className="mx-4"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Toggle>
          
          <button 
            className="text-navy dark:text-white transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-navy/95 backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-navy dark:text-lightSlate hover:text-accent dark:hover:text-accent transition-colors px-4 py-2 animate-slide-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                <Button 
                  className="bg-gradient-to-r from-purple-default to-indigo-default hover:opacity-90 text-white w-full transition-all duration-300 shadow-lg" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('navbar.getInTouch')}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
