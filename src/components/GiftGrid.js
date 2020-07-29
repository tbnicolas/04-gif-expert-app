import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ({category}) => {


    const {data:images, loading} = useFetchGifs(category);
    //console.log(data);
    console.log(loading);

    return (
        <>
        <h3 className="animate__animated animate__fadeInLeftBig"> {category}</h3>
        {loading && 'cargando..'}
         <div className="card-grid">
                {images.map((dataImage)=>{
                    return <GifGridItem 
                    key={dataImage.id} 
                    {...dataImage}
                    />
                })}
        </div> 
        </>
    )
}
    