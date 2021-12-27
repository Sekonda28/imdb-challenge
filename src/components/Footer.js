import appStore from "../assets/store/app-store.svg";
import playStore from "../assets/store/play-store.svg";
import windowsStore from "../assets/store/windows-store.svg";
import facebookWhite from "../assets/social/facebook-white.svg";
import instaWhite from "../assets/social/instagram-white.svg";
import twitterWhite from "../assets/social/twitter-white.svg";

const Footer = () => {
  return (
    <div className=" w-screen h-56 text-xs lg:text-base text-white bg-gray-900">
      <div className="flex flex-col max-w-screen-xl h-full w-full justify-between mx-auto">
        <div className="h-1/2 flex flex-col justify-center space-y-2 mx-6 md:mx-12">
          <ul className="font-bold flex space-x-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Terms and Conditions</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Collection Statement</li>
            <li className="cursor-pointer">Help</li>
            <li className="cursor-pointer">Manage Account</li>
          </ul>
          <p
            className="font-light text-center lg:text-left
          "
          >
            Copyright &#169; 2016 DEMO Streaming. All Rights Reserved.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-around h-1/2 mx-6 lg:mx-12">
          <div
            id="social-buttons"
            className="flex h-1/2 items-center justify-center lg:justify-start w-full lg:h-full lg:w-1/2 space-x-6"
          >
            <img
              src={facebookWhite}
              alt="Facebook link"
              className="h-3/5 lg:h-1/3 cursor-pointer"
            />
            <img
              src={twitterWhite}
              alt="Twitter link"
              className="h-3/5 lg:h-1/3 cursor-pointer"
            />
            <img
              src={instaWhite}
              alt="Instagram link"
              className="h-3/5 lg:h-1/3 cursor-pointer"
            />
          </div>
          <div
            id="app-buttons"
            className="flex flex-shrink-1 max-w-full h-1/2 lg:h-full lg:w-1/2 space-x-6 justify-center lg:justify-end items-center"
          >
            <img
              src={appStore}
              alt="App store"
              className="h-3/5  lg:h-2/5 cursor-pointer"
            />
            <img
              src={playStore}
              alt="Play store"
              className="h-3/5 lg:h-2/5 cursor-pointer"
            />
            <img
              src={windowsStore}
              alt="Windows store"
              className="h-3/5  lg:h-2/5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
