// import React from 'react'

const Faqs = () => {
  const collapse = [
    {
      id: "01",
      p: "hey there if you have some question then we are here ",
      content: "Ok sir i have some trickey questions for you",
    },
    {
      id: "02",
      p: "hey there if you have some question then we are here ",
      content: "Ok sir i have some trickey questions for you",
    },
    {
      id: "03",
      p: "hey there if you have some question then we are here ",
      content: "Ok sir i have some trickey questions for you",
    },
    {
      id: "04",
      p: "hey there if you have some question then we are here ",
      content: "Ok sir i have some trickey questions for you",
    },
    {
      id: "05",
      p: "hey there if you have some question then we are here ",
      content: "Ok sir i have some trickey questions for you",
    },
    {
      id: "06",
      p: "hey there if you have some question then we are here ",
      content: "Ok sir i have some trickey questions for you",
    },

  ];
  return (

    <div className="mt-20 relative" id="Faqs" >
        <div className="absolute bg-[#8749B4] w-72 h-96 right-10 rounded-full blur-3xl bg-opacity-10 top-0 "></div>
        <div className="absolute bg-[#8749B4] w-72 h-72 left-0  rounded-full blur-3xl bg-opacity-20 top-0 "></div>
        <div className="absolute bg-[#8749B4] w-52 h-96 opacity-25 left-[30%] top-[40%] rounded-full blur-3xl bg-opacity-40  "></div>
       
      {collapse.map((tittle,id) => (
        <div
          tabIndex={0}
          className="collapse collapse-plus mt-4  mx-auto border w-[55%] border-purple-600  rounded-2xl bg-purple-600 bg-opacity-30"
          key={id}
        >
          <div className="collapse-title  font-medium  flex gap-16 ">
            <h1 className="">{tittle.id}</h1>
            <h1 className="">{tittle.p}</h1>
          </div>
          <div className="collapse-content ">
            <p>{tittle.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
