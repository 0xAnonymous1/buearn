const Roadmap = () => {
  const Roadmap = [
    {
      phase: "Phase 1",
      title: "TESTNET",
      p: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.",
    },
    {
      phase: "Phase 2",
      title: "TESTNET",
      p: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.",
    },
    {
      phase: "Phase 3",
      title: "TESTNET",
      p: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.",
    },
    {
      phase: "Phase 4",
      title: "TESTNET",
      p: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.",
    },
  ];
  return (
    <div className="space-y-6 relative" id="Roadmap">
        <div className="absolute bg-[#8749B4] w-72 h-96 right-10 rounded-full blur-3xl bg-opacity-10 top-0 "></div>
        <div className="absolute bg-[#8749B4] w-72 h-72 left-0  rounded-full blur-3xl bg-opacity-10 top-0 "></div>

      <div className="text-center" id="Roadmap">
        <h1 className="text-3xl mb-10 font-bold ">Roadmap</h1>
        <p className="font-semibold text-xl">
          The largest and unique Super rare NFT marketplace For
          crypto-collectibles
        </p>
      </div>
      <div className="flex flex-col  md:flex-row flex-wrap  justify-center items-center gap-5 max-w-5xl mx-auto">
        {Roadmap.map((Roadmap, index) => (
          <div
            key={index}
            className="  relative "
          >
            <span className="border-[5px] border-r-0 p-9 max-w-20 rounded-l-md border-[#8749B4] absolute top-0 left-0 h-full "></span>
            <div className="border p-2 w-[330px] border-[#8749B4] m-2">
              <h1 className="text-center font-bold">{Roadmap.phase}</h1>
              <h1 className="text-2xl font-bold">{Roadmap.title}</h1>
              <p>{Roadmap.p}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
