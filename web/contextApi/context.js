import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import Loading from "../components/shareds/loading";
import { useInView } from 'react-intersection-observer';

export const contextApi = createContext();

export const usePortfolio = () => {
  return useContext(contextApi);
};

export const ProviderComponent = ({ children }) => {
 
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);  
  const [visibleElement, setVisibleElement] = useState(false)
  console.log("visible", visibleElement)
 const myRef = useRef()   
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries.forEach((el) => {       
            
          if (el.isIntersecting) {
            setVisibleElement(true)
            console.log(entries)
          }
          else {
            setVisibleElement(false)
            
          }
        })
      },
      {
        rootMargin: "0px",
        root: null,
        threshold: 0
      }
    )
    observer.observe(myRef.current)
 },[setVisibleElement])

    
  
  useEffect(() => {
    axios.get("https://mipaginaweb.fly.dev/portafolio").then((res) => {
      setList(res.data.body);
      setLoading(false);
    }); 
  
    idDetails()
  }, [setList],[loading],[details]);
 
  const idDetails= async(id) => {
    
    await axios.get(`https://mipaginaweb.fly.dev/projects/${id}`).then((res) => {
        setDetails(res.data.body);   
    setLoading(false);
    });
   return details
 } 


  return <contextApi.Provider value={{myRef,visibleElement,list,details,idDetails ,loading}}>{loading && <Loading />}{children}</contextApi.Provider>;
};

