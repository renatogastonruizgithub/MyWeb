import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const contextApi = createContext();

export const usePortfolio = () => {
  return useContext(contextApi);
};

export const ProviderComponent = ({ children }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/portafolio").then((res) => {
      setList(res.data.body);
    });
  }, [setList]);

  return <contextApi.Provider value={{ list }}>{children}</contextApi.Provider>;
};
