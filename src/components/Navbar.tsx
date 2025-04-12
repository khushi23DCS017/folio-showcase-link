
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Toggle } from '@/components/ui/toggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-navy/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-navy dark:text-white flex items-center">
          <span className="bg-gradient-to-r from-navy to-aqua dark:from-aqua dark:to-lightSlate bg-clip-text text-transparent">Portfolio</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-navy dark:text-lightSlate hover:text-aqua dark:hover:text-aqua transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          
          <Toggle 
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
            aria-label="Toggle dark mode"
            className="mr-2"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Toggle>
          
          <a href="#contact">
            <Button className="bg-navy hover:bg-lightNavy dark:bg-aqua dark:text-navy dark:hover:bg-aqua/90 text-white transition-all duration-300 hover-glow">
              Get In Touch
            </Button>
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Toggle 
            pressed={theme === 'dark'}
            onPressedChange={toggleTheme}
            aria-label="Toggle dark mode"
            className="mr-4"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Toggle>
          
          <button 
            className="text-navy dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-navy shadow-lg">
          <div className="container mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-navy dark:text-lightSlate hover:text-aqua dark:hover:text-aqua transition-colors px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  className="bg-navy hover:bg-lightNavy dark:bg-aqua dark:text-navy dark:hover:bg-aqua/90 text-white w-full transition-all duration-300 hover-glow" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get In Touch
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
