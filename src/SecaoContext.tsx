
import React, { createContext, ReactNode, useState } from 'react';

interface SecaoContextType {
  numSecao: number;
  setNumeroSecao: (novoNumSecao: number) => void;
}

const SecaoContext = createContext<SecaoContextType>({
  numSecao: 0, // Valor inicial definido como 1
  setNumeroSecao: () => {} // Função vazia para evitar erros
});
interface SecaoProviderProps {
    children: ReactNode; // Define o tipo do children
  }
  
  const SecaoProvider: React.FC<SecaoProviderProps> = ({ children }) => {
    const [numSecao, setNumeroSecao] = useState(0);

  return (
    <SecaoContext.Provider value={{ numSecao, setNumeroSecao }}>
      {children}
    </SecaoContext.Provider>
  );
};

export { SecaoContext, SecaoProvider };