import  { useEffect, useState } from "react";
import useStorage from "./useStorage";
import { fetchData } from "../utils/fetchData";

const useGetItems = () => {
  const [state, setState] = useState([]);
  const {addStore,getStore}= useStorage();
  useEffect(  () => {
      getStore().then((data) => {
        if(data!==null){
          setState(data)
        }else{
          fetchData().then((data)=>{
            setState(data);
            addStore(data);
          }).catch(()=>{
            console.error("There was an error!")
          })
        }
      }).catch(()=>{
        console.error("There was an error!")
      });
  }, []);
  return { state, setState };
};
export default useGetItems;
