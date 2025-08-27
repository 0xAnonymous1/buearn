// import React from 'react'
import card from "../assets/images/buttons/earthGif 1.jpg";
import About from "./About";
import Faqs from "./Faqs";
import Roadmap from "./Roadmap";
import Team from "./Team";
import img5 from "../assets/images/decoration/decore1.svg";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-black text-white font-brofont" id="Home">
      <Navbar />
      <div className=" grid grid-cols-1  md:flex justify-around  gap-6 md:p-20 p-8 pb-10  text-white relative  ">
        <img
          src={img5}
          alt="docree1"
          className=" absolute  bottom-0 left-0 w-64   "
        />
        <div className="absolute bg-[#8749B4] w-72 h-96 right-10 rounded-full blur-3xl bg-opacity-20 top-0 "></div>
        <div className="absolute bg-[#8749B4] w-72 h-72 left-0  rounded-full blur-3xl bg-opacity-20 top-0 "></div>
        <div className="absolute bg-[#8749B4] w-52 h-96 opacity-25 left-[30%] top-[40%] rounded-full blur-3xl bg-opacity-40  "></div>

        <div className=" md:w-[50%] space-y-10 relative">
          <h1 className="uppercase text-3xl">
            WELCOME TO THE <br /> <span className="text-[#8749B4]">buearn</span>
          </h1>
          <p className="md:text-wrap md:text-start  leading-5 w-[80%]  ">
            Blast yield comes from ETH staking and RWA protocols. The yield from
            these decentralized protocols is passed back to Blast users
            automatically. The default interest rate on other L2s is 0%. Blast
            is an EVM-compatible, optimistic rollup that raises the baseline
            yield for users and developers without changing the experience
            cryptonatives expect. Our goal as members is to grow the Blast L2
            ecosystem. Our activities are aimed at promoting users who are
            interested in our topic to join the Blast mission in order to have
            the opportunity to earn Blast Airdrop.
          </p>
          <div className=" flex gap-4 ">
            {" "}
            <button className="buy it on opensea flex gap-1 items-center uppercase border border-white rounded-md p-2 py-1 md:mr-4 hover:border-black hover:bg-[#8749B4] md:font-semibold ">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0C8.061 0 0 8.061 0 18C0 27.939 8.061 36 18 36C27.939 36 36 27.939 36 18C36 8.061 27.9435 0 18 0ZM8.88 18.6045L8.9565 18.483L13.641 11.157C13.6567 11.1329 13.6786 11.1135 13.7043 11.1007C13.7301 11.088 13.7588 11.0824 13.7875 11.0846C13.8161 11.0867 13.8437 11.0965 13.8673 11.1129C13.8908 11.1294 13.9096 11.1519 13.9215 11.178C14.7015 12.9315 15.3795 15.1125 15.0615 16.47C14.9295 17.028 14.559 17.784 14.1405 18.483C14.0878 18.5858 14.0292 18.6855 13.965 18.7815C13.9505 18.8037 13.9303 18.8216 13.9066 18.8335C13.8829 18.8453 13.8565 18.8507 13.83 18.849H9.0195C8.99079 18.8494 8.96249 18.8421 8.93761 18.8278C8.91274 18.8134 8.89221 18.7926 8.87821 18.7675C8.86421 18.7425 8.85727 18.7141 8.85811 18.6854C8.85895 18.6566 8.86755 18.6287 8.883 18.6045H8.88ZM29.751 21.1245C29.7512 21.1565 29.7421 21.1878 29.7248 21.2147C29.7074 21.2416 29.6827 21.2629 29.6535 21.276C29.289 21.4305 28.0485 22.0035 27.5325 22.719C26.2155 24.552 25.2105 27.174 22.9605 27.174H13.5795C12.7875 27.1726 12.0035 27.0152 11.2724 26.7108C10.5412 26.4064 9.87717 25.961 9.31819 25.3999C8.75921 24.8388 8.31623 24.1731 8.01455 23.4408C7.71288 22.7085 7.55842 21.924 7.56 21.132V21.024C7.56 20.937 7.632 20.865 7.722 20.865H12.9495C13.0545 20.865 13.1295 20.9595 13.122 21.063C13.083 21.402 13.1475 21.7515 13.3095 22.068C13.6185 22.698 14.2635 23.091 14.958 23.091H17.547V21.0705H14.985C14.955 21.0702 14.9256 21.0617 14.9001 21.0459C14.8745 21.0301 14.8538 21.0077 14.84 20.981C14.8263 20.9543 14.8201 20.9244 14.8221 20.8944C14.8241 20.8644 14.8343 20.8356 14.8515 20.811L14.946 20.676C15.186 20.3295 15.5325 19.797 15.8775 19.188C16.1115 18.777 16.3395 18.339 16.5225 17.898C16.5565 17.818 16.589 17.738 16.62 17.658C16.6695 17.517 16.7205 17.385 16.7565 17.2545C16.7916 17.1438 16.8241 17.0322 16.854 16.92C16.9395 16.545 16.9755 16.149 16.9755 15.7395C16.9755 15.5775 16.9695 15.408 16.9545 15.249C16.947 15.0735 16.9245 14.8965 16.9035 14.721C16.8877 14.5638 16.8637 14.4076 16.8315 14.253C16.7905 14.0174 16.7415 13.7833 16.6845 13.551L16.6635 13.461C16.6185 13.299 16.5795 13.146 16.5285 12.9855C16.3854 12.4927 16.2212 12.0063 16.0365 11.5275C15.9723 11.3473 15.9013 11.1697 15.8235 10.995C15.7155 10.728 15.6045 10.4865 15.504 10.26C15.4543 10.1628 15.4073 10.0643 15.363 9.9645C15.314 9.8568 15.2625 9.75027 15.2085 9.645C15.1725 9.5655 15.129 9.489 15.1005 9.417L14.784 8.835C14.7405 8.7555 14.8125 8.658 14.8995 8.6835L16.8795 9.219H16.8945L17.154 9.294L17.442 9.375L17.547 9.4035V8.229C17.547 7.6605 18 7.2 18.5655 7.2C18.699 7.19964 18.8313 7.2263 18.9542 7.27837C19.0772 7.33044 19.1883 7.40685 19.281 7.503C19.4712 7.69707 19.5787 7.9573 19.581 8.229V9.975L19.7925 10.0335C19.8085 10.0405 19.824 10.049 19.839 10.059C19.891 10.096 19.9645 10.151 20.0595 10.224C20.1335 10.283 20.216 10.3515 20.307 10.4295C20.6035 10.6704 20.8907 10.9226 21.168 11.1855C21.489 11.484 21.849 11.8335 22.194 12.222C22.2915 12.333 22.3845 12.441 22.482 12.561C22.575 12.6795 22.68 12.795 22.767 12.909C22.8855 13.065 23.007 13.227 23.1195 13.395C23.169 13.4745 23.2305 13.557 23.277 13.6365C23.421 13.8495 23.544 14.0685 23.6625 14.289C23.7135 14.3895 23.763 14.5005 23.8065 14.6085C23.94 14.904 24.045 15.2025 24.1095 15.5055C24.1284 15.5704 24.143 15.6366 24.153 15.7035V15.7185C24.174 15.804 24.1815 15.8985 24.189 15.9945C24.2292 16.4378 24.175 16.8846 24.03 17.3055C23.9835 17.4315 23.94 17.5605 23.883 17.6865C23.7705 17.9415 23.6415 18.201 23.487 18.4395C23.436 18.5295 23.3745 18.6225 23.3175 18.7125C23.253 18.807 23.184 18.897 23.127 18.9825C23.0444 19.096 22.9579 19.2066 22.8675 19.314C22.7895 19.424 22.7065 19.5285 22.6185 19.6275C22.4985 19.7745 22.376 19.9135 22.251 20.0445C22.179 20.1315 22.101 20.2215 22.017 20.2995C21.939 20.3895 21.855 20.469 21.783 20.541C21.657 20.667 21.558 20.7615 21.471 20.844L21.2655 21.027C21.2514 21.0414 21.2346 21.0527 21.2161 21.0605C21.1975 21.0682 21.1776 21.0721 21.1575 21.072H19.581V23.091H21.564C22.0065 23.091 22.428 22.935 22.77 22.644C22.8855 22.5435 23.3925 22.104 23.994 21.441C24.014 21.4189 24.0401 21.4032 24.069 21.396L29.544 19.8105C29.568 19.8035 29.5934 19.8023 29.618 19.8067C29.6426 19.8112 29.6658 19.8213 29.6859 19.8363C29.706 19.8513 29.7223 19.8707 29.7336 19.893C29.7449 19.9153 29.7508 19.94 29.751 19.965V21.1245Z"
                  fill="white"
                />
              </svg>
              buy it on opensea
            </button>
            <button className="whitepaper flex items-center gap-2 uppercase border border-white rounded-md p-2 py-1  hover:border-black hover:bg-[#8749B4] md:font-semibold ">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9H14M6 13H11M1 9C1 5.229 1 3.343 2.172 2.172C3.343 1 5.229 1 9 1H11C14.771 1 16.657 1 17.828 2.172C19 3.343 19 5.229 19 9V13C19 16.771 19 18.657 17.828 19.828C16.657 21 14.771 21 11 21H9C5.229 21 3.343 21 2.172 19.828C1 18.657 1 16.771 1 13V9Z"
                  stroke="white"
                />
              </svg>
              whitepaper
            </button>
          </div>
        </div>
        <div className="flex justify-center px-4  mb-20 md:mb-0 md:mt-0 mt-20">
          <div className="card relative  bg-[#8749B4] bg-opacity-70 shadow-custom-purple rounded-lg p-1 leading-5  font-light max-w-80 md:mb-20  md:max-h-[500px]    ">
            <div className="flex flex-col justify-center  ">
              <img src={card} className="rounded-lg  " alt="#" />
              <h1 className="uppercase flex justify-center font-semibold mt-1">
                Mint the now
              </h1>
              <div className="flex justify-between p-4 pb-0 ">
                <h1>Public</h1>
                <h1>Price : 0.5 SOL</h1>
              </div>
              <div className="flex justify-between p-2 ">
                <h1>Remaining / Max Supply</h1>
                <h1>300/400</h1>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-gradient-to-r from-[#6C49B5] to-[#8749B4] bg-opacity-30 w-36 py-2 rounded-md mt-6">
                  Mint Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:flex ">
        {" "}
        <About />
      </div>
      <Team />
      <Roadmap />
      <Faqs />
    </div>
  );
};

export default Home;
