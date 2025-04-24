
import { useTranslation } from 'react-i18next';

const Certifications = () => {
  const { t } = useTranslation();
  const certifications = t('certifications.items', { returnObjects: true }) as string[];

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-navy dark:to-lightNavy transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-navy dark:text-white">
          {t('certifications.title')}
        </h2>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {certifications.map((certification, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-navy/30 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-white/5"
            >
              <p className="text-slate-700 dark:text-lightSlate">{certification}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
