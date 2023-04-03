import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isHome, setIsHome] = useState(true);

  return (
    <AuthContext.Provider value={{ isHome, setIsHome }}>
      {children}
    </AuthContext.Provider>
  );
};
