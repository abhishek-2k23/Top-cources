import {toast} from 'react-toastify';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';

const Card = ({allCources,likedCources,setLikedCources}) => {

    //for like and unliked click
    function clickHandler()
    {
        //check whether liked
        if(likedCources.includes(allCources.id)){ //it means liked
            setLikedCources((previous) => previous.filter((cid) => {return cid !== allCources.id})); //Removed logic
            toast.warning("Like Removed");
            console.log("removed",allCources.id);
        }
        else{
            if(likedCources.length === 0){  
                setLikedCources([allCources.id]);
            }
            else
            {
                setLikedCources((prev) => [...prev, allCources.id]);
            }
            console.log("added",allCources.id);
            toast.success("Course Liked");
        }
        console.log("Liked cources array -> \n",likedCources);
    }
    let text = `${allCources.description.substring(0,100)} ...`;
    return(
        <div className='w-[300px] h-[330px] flex flex-col gap-5 bg-[#2A2B44] text-white rounded-lg '>
            <div className='relative'>
                <img src={allCources.image.url} alt={allCources.image.alt} className='w-[300px] rounded-t-lg rounded-tr-lg'/>
                
                <div className='absolute right-2 p-2 -bottom-3 rounded-full bg-white cursor-pointer' onClick={clickHandler}>
                   { likedCources.includes(allCources.id) ? (<FcLike fontSize="1.25rem"></FcLike>) : (<FcLikePlaceholder fontSize="1.25rem" />) } 
                </div>
            </div>
                
            <div className='px-2'>
                <p className='text-xl font-semibold'>{allCources.title}</p>
                <p className='text-left text-sm'>{text}</p>
            </div>
        </div>
    )
}
export default Card;