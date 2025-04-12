
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gradient-to-r from-navy to-lightNavy dark:from-lightNavy/80 dark:to-navy text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-lightSlate flex items-center">
              &copy; {currentYear} John Doe. {t('footer.madeWith')} 
              <Heart size={16} className="mx-1 text-accent animate-pulse" /> 
              {t('footer.rights')}
            </p>
          </div>
          
          <div className="flex space-x-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-accent transition-colors transform hover:scale-125 duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="hover:animate-spin-slow" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightSlate hover:text-accent transition-colors transform hover:scale-125 duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="hover:animate-spin-slow" />
            </a>
            <a 
              href="mailto:johndoe@example.com" 
              className="text-lightSlate hover:text-accent transition-colors transform hover:scale-125 duration-300"
              aria-label="Email"
            >
              <Mail size={20} className="hover:animate-spin-slow" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
