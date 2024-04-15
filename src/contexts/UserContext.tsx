import { useState, createContext, ReactNode } from "react";

interface UserContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  login: (newName: string) => void;
}

export const UserContext = createContext<UserContextType>({
  name: "",
  setName: () => {},
  login: () => {},
});

interface UserProviderProps {
  children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [name, setName] = useState("");

  const login = (newName: string) => {
    setName(newName);
  };

  return (
    <UserContext.Provider value={{ name, setName, login }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
