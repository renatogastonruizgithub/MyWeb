import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const contextApi = createContext();

export const usePortfolio = () => {
  return useContext(contextApi);
};

export const ProviderComponent = ({ children }) => {
  const [list, setList] = useState([]);
  const [details, setDetails] = useState([]);


  useEffect(() => {
    axios.get("https://mipaginaweb.fly.dev/portafolio").then((res) => {
      setList(res.data.body);
    });
  }, [setList]);

  const idDetails=(id) => {
      axios.get(`https://mipaginaweb.fly.dev/projects/${id}`).then((res) => {
       setDetails(res.data.body);          
      });     
  }
  

  return <contextApi.Provider value={{ list,details,idDetails }}>{children}</contextApi.Provider>;
};
