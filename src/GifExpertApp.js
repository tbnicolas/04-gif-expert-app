import React,{useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["One Punch"]);
  
 /*  const handleAdd =()=>{
      //categories.push('IronMan');
      //setCategories([...categories,'HunterXHunter']);

      // El setLoqueSea regresa un Callback con el estado anterior
      //En este caso el estado categories tiene ["One Punch", "Samurai X", "Dragon Ball"]
      //Ya que eso fue lo que se definio (Caso para la primera vez que se ejecute)
      setCategories(categories=>[...categories,'IronMan']);

  }; */
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>


      <ol>
        {categories.map((category, id) =>
           <GiftGrid 
            key={category}
            category={category}
           />
        )}
      </ol>
    </>
  );
};
