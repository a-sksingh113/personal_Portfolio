import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 relative overflow-hidden"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute inset-0 -z-10">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 object-cover"
        />
        
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] Viga">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 Viga md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="https://drive.google.com/file/d/19TA21KInWXoao6-5s1NO13mTUyo4iG1x/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="My Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal Viga font-light">
          Copyright © 2025 Satish Kumar Singh <br />
          Email: i.sksingh113@gmail.com
          <br />
          Phone: +91 8112590073
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icon" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
