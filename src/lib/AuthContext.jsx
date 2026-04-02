import React, { createContext, useContext } from 'react';

// Minimal AuthContext stub for future extension
const AuthContext = createContext({
  user: null,
  isAuthenticated: false
});

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={{ user: null, isAuthenticated: false }}>
    {children}
  </AuthContext.Provider>
);

export const useAuth = () => useContext(AuthContext);
