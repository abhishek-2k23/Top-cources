import React from 'react';
const Filter = ({filterData,category,setCategory}) => {
    function clickHandler(title)
    {
        setCategory(title);
    }
    return (
        <div className='flex flex-wrap justify-evenly items-center sm:gap-5 gap-2 my-4'> 
            {
                filterData.map((data) => {
                   return <button key={data.id} onClick={()=>clickHandler(data.title)} className={`bg-slate-800 px-2 font-semibold py-1 rounded-md text-white text-xl ${category === data.title ? ("border-2") : ("border-0")}`}>{data.title}</button>
                })
            }
        </div>
    )
}
export default Filter;