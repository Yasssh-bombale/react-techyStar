import React from "react";
import vg from "../assets/2.webp";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems </p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day.We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex debitis
            aliquid cum dolorem provident, architecto, similique rem iure magnam
            dignissimos eius quasi praesentium! Nemo quam nesciunt suscipit ips
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            eum soluta quae deserunt dignissimos quisquam neque quasi dolorem
            vero beatae.
          </p>
        </div>
      </div>

      <div className="home4">
        <div id="brands">
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.2s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.8s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1.1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
