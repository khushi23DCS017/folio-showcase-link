
import { useTranslation } from 'react-i18next';
import { Award, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Certifications = () => {
  const { t } = useTranslation();
  
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading flex items-center justify-center">
          <Award className="mr-3 text-accent" size={32} />
          {t('certifications.title')}
        </h2>
        
        <Card className="mt-10 shadow-lg border-0 dark:bg-lightNavy/60">
          <CardContent className="p-6">
            <ul className="space-y-6">
              {t('certifications.items', { returnObjects: true }).map((item: string, index: number) => (
                <li 
                  key={index} 
                  className="flex items-start animate-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CheckCircle className="text-accent mr-3 shrink-0 mt-1" size={20} />
                  <p className="text-slate dark:text-lightSlate">{item}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        {/* Extracurricular Activities */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4 text-navy dark:text-white">{t('extracurricular.title')}</h3>
          <Card className="shadow-lg border-0 dark:bg-lightNavy/60 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="p-6">
              <p className="text-slate dark:text-lightSlate flex items-center">
                <CheckCircle className="text-accent mr-3 shrink-0" size={20} />
                {t('extracurricular.role')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
