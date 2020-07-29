
import {useState,useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category)=>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });
    //De está manera se ejecuta el componente la primera vez que se renderiza el componente
    useEffect(()=>{
        getGifs(category)
           .then(img=>{
               setTimeout(() => {
                setState({
                    data:img,
                    loading:false
                });       
               }, 3000);
            
           });
    },[]);

    
    return state;
};