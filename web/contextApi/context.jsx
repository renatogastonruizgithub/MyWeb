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

  useEffect(() => {
    axios.get("http://localhost:5000/portafolio").then((res) => {
      setList(res.data.body);
      setLoading(false);
    });
  }, [setList]);

  return <contextApi.Provider value={{ list, loading }}>{loading && <Loading />}{children}</contextApi.Provider>
}
