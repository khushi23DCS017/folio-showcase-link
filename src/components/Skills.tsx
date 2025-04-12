
import { Card, CardContent } from '@/components/ui/card';
import { 
  Code, Database, FileCode, Layout, BookOpen,
  Palette, Server, Terminal, Users, Award
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}

const SkillCategory = ({ title, skills, icon, index }: SkillCategoryProps) => {
  return (
    <Card className="border-0 shadow-md h-full animate-fade-in" 
      style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-aqua">{icon}</div>
        <h3 className="text-lg font-semibold mb-3 text-navy">{title}</h3>
        <ul className="space-y-2 text-slate flex-1">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center">
              <span className="w-2 h-2 bg-aqua rounded-full mr-2"></span>
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.programming.title'),
      skills: t('skills.programming.skills', { returnObjects: true }) as string[],
      icon: <Code size={28} />
    },
    {
      title: t('skills.tools.title'),
      skills: t('skills.tools.skills', { returnObjects: true }) as string[],
      icon: <Terminal size={28} />
    },
    {
      title: t('skills.webDev.title'),
      skills: t('skills.webDev.skills', { returnObjects: true }) as string[],
      icon: <Layout size={28} />
    },
    {
      title: t('skills.softwareDev.title'),
      skills: t('skills.softwareDev.skills', { returnObjects: true }) as string[],
      icon: <FileCode size={28} />
    },
    {
      title: t('skills.softSkills.title'),
      skills: t('skills.softSkills.skills', { returnObjects: true }) as string[],
      icon: <Users size={28} />
    },
  ];
  
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
