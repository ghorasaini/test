import { Children, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";





export  const AppContext = createContext(null);
const AppContextProvider = ({Children})=> {
    const navigate = useNavigate();
    const [user, setUser]= useState(null);
    const [isSeller, setIsSeller]= useState(null);
    const [showUserLogin, setShowUserLogin]= useState(false);

    const value = {
         navigate,
         user,
          setUser,
           setIsSeller,
            showUserLogin,
             setShowUserLogin
            };
    return
        <AppContext.Provider value ={value}> {Children} </AppContext.Provider>;
    
};


export default AppContextProvider;