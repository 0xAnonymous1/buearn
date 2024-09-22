
import cards from '../assets/images/cards/A.svg'
import img1 from '../assets/images/decoration/decore2.svg'
const About = () => {
  return (
    <div className='relative' id='About'>  
      <img src={img1} alt="" className='absolute right-0  md:z-30  hidden' />
      
      <div className='   md:flex justify-around  gap-6 md:p-20 p-8 pb-28 text-white relative '>
        <div className='absolute blur-3xl opacity-10 left-0 top-54 bg-[#8749B4] w-96 h-96 rounded-[]' style={{borderRadius:" 20% 70% 30% 60%"}}></div>

        <div className='w-[90%] md:w-[50%] space-y-10'>
        <h1 className='font-bold text-2xl absolute right-[50%]'>AboutUs</h1>
          <h1 className=' text-[#8749B4] font-bold text-2xl pt-10 '>BUEARN</h1>
          <div className=' relative md:text-wrap md:text-start  leading-5 z-20    space-y-10'>
          <p>We created a unique collection of NFTs, which became the first in the BLAST
ecosystem. Each picture was drawn by hand. We also have a multi-level
system of access to purchases during the mint. The mint date entirely
depends on the release of the Blast mainnet.</p>
<p>Blast yield comes from ETH staking and RWA protocols. The yield from these
decentralized protocols is passed back to Blast users automatically. The
default interest rate on other L2s is 0%. Blast is an EVM-compatible,
optimistic rollup that raises the baseline yield for users and developers
without changing the experience cryptonatives expect. Our goal as members
is to grow the Blast L2 ecosystem. Our activities are aimed at promoting users
who are interested in our topic to join the Blast mission in order to have the
opportunity to earn Blast Airdrop.</p></div>
        </div>
        <div className='  relative  w-[50%] hidden md:flex justify-center items-center mt-9 md:z-30 z-20  '><img className=' md:w-96 absolute  ' src={cards} alt="" /></div>
   
      </div>
    </div>
  );
};

export default About;
