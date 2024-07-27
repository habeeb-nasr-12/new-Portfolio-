import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/habeeb-nasr-12-/">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/habeeb-nasr-12">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
