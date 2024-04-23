import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="FooterMain">
        <div className="Grid-Contact">
          <div className="Objective">
            This website is a project prepared to be a part of <br /> <br />
            the SoftwareEngineering subject <br /> <br />
            ( CPE302 ) at Sripratum University. <br /> <br />
            We decided to make this website about health <br /> <br />
            assistants. The components on the website are <br /> <br />
            humannbenchmark,Tdee, News, Locations.
          </div>
          <div className="Contact">
            <div className="Contact-0">Contact</div>
            <div className="Contact-1">
              If you have any questions or need help, <br /> <br />
              feel free to contact us for information assistance.
            </div>
            <div className="Contact-2">123-456-7890</div>
            <div className="Contact-3">
              2410 2 Phahonyothin Rd, Khwaeng Sena Nikhom, <br /> <br />
              Khet Chatuchak, Krung Thep Maha Nakhon 10900
            </div>
          </div>
        </div>
        <div className="Bottom-Footer">
          <div className="Copy-Right">
            ©2020 HealthHero, All Rights Reserved. With Love by Arm
          </div>
          <div className="Terms-Conditions">Terms & Conditions</div>
          <div className="Privacy">Privacy</div>
          <div className="Cookies">Cookies</div>
          <div className="code"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
