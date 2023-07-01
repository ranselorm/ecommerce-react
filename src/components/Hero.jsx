import WomanImg from "../img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[650px] bg-hero bg-cover bg-no-repeat py-24">
      <div className="container mx-auto flex justify-around">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="bg-red-500 w-10 h-[2px] mr-3"></div>New trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <span className="font-semibold">WOMEN</span>
          </h1>
          <h6 className="uppercase border-b-2 border-primary self-start cursor-pointer font-semibold text-sm">
            Discover More
          </h6>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
