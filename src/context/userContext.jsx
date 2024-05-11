import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../lib/topic";

  
  export const UserContext = createContext(null)

  export function UserProvider({children}) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const navigate = useNavigate();

    function userLogin(newUser) {
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
        navigate(paths.MAIN);
      }

      function userExit() {
        setUser(null);
        localStorage.removeItem("user");
        navigate(paths.LOGIN);
      }

      return (
        <UserContext.Provider value={{user, userLogin, userExit}}>
            {children}
        </UserContext.Provider>
      )
  }

