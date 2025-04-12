
import { useTranslation } from 'react-i18next';
import { GraduationCap, School, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">{t('education.title')}</h2>
        
        <div className="mt-10 space-y-12">
          {/* University Education */}
          <div className="relative animate-fade-in">
            <div className="flex items-start">
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mr-4 shrink-0">
                <GraduationCap className="text-accent" size={24} />
              </div>
              
              <Card className="w-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div className="flex items-center mb-2 md:mb-0">
                      <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 mr-3">
                        <GraduationCap className="text-accent" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-navy dark:text-white">{t('education.university')}</h3>
                    </div>
                    <div className="flex items-center text-slate text-sm">
                      <Calendar size={16} className="mr-1" />
                      <span>{t('education.period')}</span>
                    </div>
                  </div>
                  
                  <p className="font-medium text-navy dark:text-white mb-2">{t('education.degree')}</p>
                  <p className="text-accent mb-2">{t('education.gpa')}</p>
                  <p className="text-slate dark:text-lightSlate">{t('education.courses')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* School Education */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start">
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mr-4 shrink-0">
                <School className="text-accent" size={24} />
              </div>
              
              <Card className="w-full border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div className="flex items-center mb-2 md:mb-0">
                      <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 mr-3">
                        <School className="text-accent" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-navy dark:text-white">{t('education.school.name')}</h3>
                    </div>
                    <div className="flex items-center text-slate text-sm">
                      <Calendar size={16} className="mr-1" />
                      <span>{t('education.school.period')}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start mt-2">
                    <Award className="text-accent mr-2 shrink-0 mt-0.5" size={18} />
                    <p className="text-slate dark:text-lightSlate">{t('education.school.achievements')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
