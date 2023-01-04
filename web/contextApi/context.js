import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/shareds/loading";

export const contextApi = createContext();

export const usePortfolio = () => {
  return useContext(contextApi);
};

export const ProviderComponent = ({ children }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);


  useEffect(() => {
    axios.get("https://mipaginaweb.fly.dev/portafolio").then((res) => {
      setList(res.data.body);
      setLoading(false);
    });
  }, [setList]);


  const idDetails=(id) => {
      axios.get(`https://mipaginaweb.fly.dev/projects/${id}`).then((res) => {
        setDetails(res.data.body);   
       setLoading(false); 
      });     
  }  
 
 

  return <contextApi.Provider value={{ list,details,idDetails ,loading}}>{loading && <Loading />}{children}</contextApi.Provider>;
};

