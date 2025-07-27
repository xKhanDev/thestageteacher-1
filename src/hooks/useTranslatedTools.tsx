import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { tools } from '@/lib/toolsData';

export const useTranslatedTools = () => {
  const { t } = useTranslation();

  const translatedTools = useMemo(() => {
    return tools.map(tool => ({
      ...tool,
      name: t(tool.nameKey),
      description: t(tool.descriptionKey),
      category: t(tool.categoryKey),
      fields: tool.fields.map(field => ({
        ...field,
        label: t(field.labelKey),
        placeholder: field.placeholderKey ? t(field.placeholderKey) : undefined,
        options: field.optionsKey ? Object.values(t(field.optionsKey, { returnObjects: true }) as Record<string, string>) : field.options
      }))
    }));
  }, [t]);

  return translatedTools;
};

export const useTranslatedCategories = () => {
  const { t } = useTranslation();

  const categories = useMemo(() => {
    return [
      { name: t('categories.all'), gradient: 'from-slate-500 to-slate-600', icon: 'Grid' },
      { name: t('categories.lessonPlanning'), gradient: 'from-blue-500 to-indigo-600', icon: 'BookOpen' },
      { name: t('categories.contentHub'), gradient: 'from-green-500 to-emerald-600', icon: 'FileText' },
      { name: t('categories.assessment'), gradient: 'from-purple-500 to-violet-600', icon: 'CheckCircle' },
      { name: t('categories.communication'), gradient: 'from-orange-500 to-red-600', icon: 'MessageCircle' },
      { name: t('categories.classroomManagement'), gradient: 'from-yellow-500 to-orange-600', icon: 'Users' },
      { name: t('categories.languageArts'), gradient: 'from-pink-500 to-rose-600', icon: 'Target' },
      { name: t('categories.math'), gradient: 'from-teal-500 to-cyan-600', icon: 'Target' },
      { name: t('categories.science'), gradient: 'from-indigo-500 to-purple-600', icon: 'Target' },
      { name: t('categories.socialStudies'), gradient: 'from-amber-500 to-yellow-600', icon: 'Target' }
    ];
  }, [t]);

  return categories;
};