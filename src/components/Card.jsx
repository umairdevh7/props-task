import React from 'react'


const Card = (props) => {

    
    return (
        <div className='w-[300px] h-[390px] p-3 rounded-3xl bg-amber-50 shrink-[0] flex flex-col items-center text-center '>
            <div className='w-[100%] h-[130px]  bg-center bg-cover rounded-3xl relative'  style={{ backgroundImage: `url(${props.user.coverImage})` }}>
                <img className='w-[95px] h-[95px] rounded-full border-[3px] border-white border-solid absolute bottom-[-27px] left-[35%] ' src={props.user.profile} alt="" />
                <button className='text-black text-[14px] px-2.5 py-0.5 rounded-full flex justify-center items-center bg-[#ffffffd0] absolute right-2.5 top-3'> Follow +</button>
            </div>
            <h1 className='mt-[30px] text-3xl font-semibold mb-2 '>{props.user.fullName}</h1>
            <p className='text=[14px] text-[#424242] font-semibold'>{props.user.title}</p>
            <div className='w-[100%] h-[80px] mt-4 bg-[#ddd2d2e8] rounded-2xl leading-5  p-2.5 flex flex-row items-center justify-evenly'>
                <div>
                    <h1 className='font-semibold '>{props.user.likesCount}</h1>
                    <small >Likes</small>
                </div>
                <div>
                    <h1 className='font-semibold'>{props.user.postCount}</h1>
                    <small>Posts</small>
                </div>
                <div>
                    <h1 className='font-semibold'>{props.user.viewsCount}</h1>
                    <small>Views</small>
                </div>
            </div>
            <div className='mt-1.5 flex gap-4.5'>
                <i className='ri-instagram-line text-2xl'></i>
                <i className="ri-twitter-x-line text-2xl "></i>
                <i className="ri-mail-line text-2xl "></i>
            </div>



        </div>
    )
}

export default Card