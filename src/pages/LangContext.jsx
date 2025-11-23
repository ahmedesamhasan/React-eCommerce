import React, { createContext, useState } from 'react';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <LangContext.Provider value={{ language, toggleLanguage }}>
      <div
        dir={language === 'ar' ? 'rtl' : 'ltr'}
        className={language === 'ar' ? 'text-end' : 'text-start'}
      >
        {children}
      </div>
    </LangContext.Provider>
  );
};
