// import React from 'react'
import img1 from "../assets/images/decoration/1.svg";
import img2 from "../assets/images/decoration/2.svg";
import img3 from "../assets/images/decoration/3.svg";
import img4 from "../assets/images/decoration/4.svg";




const Team = () => {
  const teamImages = [img1, img2, img3, img4];
  return (
    <>
    
    <div className=" relative  text-white pt-10 " id="team">
    <div className="absolute bg-[#8749B4] w-72 h-96 right-10 rounded-full blur-3xl bg-opacity-15 top-0 "></div>
        <div className="absolute bg-[#8749B4] w-72 h-72 left-0  rounded-full blur-3xl bg-opacity-20 top-0 "></div>
        <div className="absolute bg-[#8749B4] w-52 h-96 opacity-25 left-[30%] top-[40%] rounded-full blur-3xl bg-opacity-40  "></div>
      


      
      <div className="  p-4   font-bold text-3xl ">

        <h1 className="upercase text-center">meet our Team</h1>
      </div >
      <div className="flex justify-center py-10">
      <div className=" flex justify-center items-center flex-col  md:flex-row ">
        {teamImages.map((img, i) => (
          <img className="md:ml-4 h-[50%] md:mb-0 mb-6" key={i} src={img} alt={i+1} />
        ))}
      </div></div></div>
   </>
  );
};
 
export default Team;
