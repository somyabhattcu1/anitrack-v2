import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('accessToken') || '');
  const [titleClick, setTitleClick] = useState(false);
  const [animeId, setAnimeId] = useState(0);

  const titleClickHandler = (id) => {
    setTitleClick(true);
    setAnimeId(id);
  }

  // values
  const contextValue = {
    token,
    setToken,
    titleClick,
    titleClickHandler,
    animeId
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};


//custom hook
export const useAppContext = () => {
  const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
}