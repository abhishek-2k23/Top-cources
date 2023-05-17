import { useState } from 'react';
import Card from './Card';
const Cards = ({cources,category}) => {
    const [likedCources,setLikedCources] = useState([]);

    function getCources()
    {
        if(category === "All"){
        let allCources = [];
        Object.values(cources).forEach((Element) => {
            Element.forEach((courseData) => {
                allCources.push(courseData);
            })
        })
        return allCources;
    }
    else{
        return cources[category];
    }
    }
    return(
        <div className='flex justify-center items-center flex-wrap gap-5 md:w-8/12 w-11/12'>
            {
                getCources().map((allCources) => {
                    return <Card key={allCources.id} allCources={allCources} setLikedCources={setLikedCources} likedCources={likedCources}></Card>
                })
            }
        </div>
    )
}
export default Cards;