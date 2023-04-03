import React from "react";
import {
  TiSocialGithubCircular,
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <div className=" w-full bg-gray">
      <div className="flex flex-col justify-center items-center py-2 ">
        <p className="text-turc font-title text-base nowrap">
          d-password generator
        </p>
        <p className="text-turc font-main text-base nowrap">
          No rights reserved
        </p>
        <div className="w-[80%] text-center">
          <p className="text-alt-white font-main text-base">
            We don't track you, collect your data, or use any other snoopy
            gadgets. <br />
            Your passwords are totally random, and we do not store them!
          </p>
          <div className="flex flex-row justify-center items-center gap-5 py-2">
            <a
              href="https://github.com/VicThorMetaNode"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialGithubCircular className="h-[2rem] w-[2rem] text-turc" />
            </a>
            <a
              href="https://www.instagram.com/metanodeslabs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiSocialInstagramCircular className="h-[2rem] w-[2rem] text-turc" />
            </a>
            <a
              href="http://linkedin.com/in/vic-thor-6aa023100"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <TiSocialLinkedinCircular className="h-[2rem] w-[2rem] text-turc" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
