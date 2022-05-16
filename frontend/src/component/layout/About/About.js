import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitGithub = () => {
    window.location = "https://github.com/Akshat143";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/e-martproject/image/upload/v1652650470/avatars/c1hmhj1b0w8mhmyflwqk.jpg"
              alt="Founder"
            />
            <Typography>Akshat Patel</Typography>
            <Button onClick={visitGithub} color="primary">
              Visit Github
            </Button>
            <span>
              This is a E-commerce made by @ipatelakshat and team. E-Mart is a Software Engineering Project.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Social Media</Typography>

            <a href="https://www.instagram.com/ipatelakshat/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
