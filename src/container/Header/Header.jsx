import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import { AppWrap } from "../../wrapper/index";
const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>

            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am </p>
              <h1 className="head-text">Habeeb</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">software Engineer / Front end developer </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img" 
      >
        {/* <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.profile2}
          className="profileImg"
          alt=" profile img"
        /> */}

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="profileImg"
          src={images.profile2}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.redux, images.next].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
