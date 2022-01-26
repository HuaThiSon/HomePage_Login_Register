import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Section } from "./styles";

const Footer = () => {
  return (
    <div className="footer">
      <Fade left>
        <Section>
          <div className="brand container">
            <Flip bottom>
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_509437.png"
                alt="icon"
              />
            </Flip>
            <p>
              We want to make it easier for travelers to find the perfect place
              to stay, compare prices across websites, and help create a lasting
              travel memory.
            </p>
            <ul>
              <li>
                <InstagramOutlined />
              </li>
              <li>
                <FacebookOutlined />
              </li>
              <li>
                <YoutubeOutlined />
              </li>
              <li>
                <TwitterOutlined />
              </li>
            </ul>
          </div>
          <div className="about container">
            <div className="title">
              <h3>About Us</h3>
            </div>
            <p>
              Rent By Owner lists properties provided by our partners (or direct
              from owners) and we refer traffic to their website. At this time,
              we do not provide direct booking capabilities on our website, but
              rather elect to refer the traveler back to our partner to complete
              the trusted transaction.
            </p>
          </div>
          <div className="contact container">
            <div className="title">
              <h3>Contact Us</h3>
            </div>
            <p>0329991024</p>
            <p>son.hua@gmail.com</p>
            <p>@HS HOUSE</p>
            <p>HO CHI MINH CITY</p>
          </div>
        </Section>
      </Fade>
    </div>
  );
};

export default Footer;
