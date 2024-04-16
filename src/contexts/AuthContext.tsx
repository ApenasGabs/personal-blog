import { createContext, ReactNode, useState } from "react";

import { UserProfile } from "../models/UserProfile";
import { login } from "../services/api";

interface AuthContextProps {
  user: UserProfile;
  handleLogout(): void;
  handleLogin(UserProfile: UserProfile): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProfile>({
    id: 0,
    name: "",
    email: "",
    password: "",
    photo: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(credentials: UserProfile) {
    const userLoginData = {
      url: "/user/login",
      data: credentials,
      setData: setUser,
    };
    setIsLoading(true);
    try {
      await login(userLoginData);
      alert("Logged in!");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(`${error}`);
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUser({
      id: 0,
      name: "",
      email: "",
      password: "",
      photo: "",
      token: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
