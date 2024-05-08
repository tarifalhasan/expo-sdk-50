import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  email: string;
  password: string;
  userName: string;
  profileUrl: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean | undefined;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (
    email: string,
    password: string,
    userName: string,
    profileUrl: string
  ) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    // Your initialization code here

    // setTimeout(() => {
    setIsAuthenticated(false);
    // }, 3000);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Your login logic here
    } catch (error) {
      // Handle error
    }
  };

  const logout = async () => {
    try {
      // Your logout logic here
    } catch (error) {
      // Handle error
    }
  };

  const register = async (
    email: string,
    password: string,
    userName: string,
    profileUrl: string
  ) => {
    try {
      // Your register logic here
    } catch (error) {
      // Handle error
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be wrapped inside AuthContextProvider");
  }

  return value;
};
