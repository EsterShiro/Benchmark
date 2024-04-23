import React from "react";
import Img from "../Img/health_hero_icon.png";

const Benchdisplay = () => {
  return (
    <>
      <div className="Display">
        <div className="Testbench">
          Humen Benchmark
          <br />
          <div className="Measure">
            Measure your abilities with brain games and cognitive tests
          </div>
        </div>

        <a href="#">
          <div className="GetStarted">Get Started</div>
        </a>
      </div>

      <div className="WindowGame">
        <div className="image">
          <img height="226" width="1008" src={Img} />
        </div>

        <div className="Grid-Container">
          <a href="#">
            <div className="Reaction">
              Reaction Time Test <br />
              <div className="TextReaction">Test your visual reflexes</div>
            </div>
          </a>
          <div className="NumberMem">
            Number Memory <br />
            <div className="Text-NumberMem">Remember the longest your can</div>
          </div>

          <div className="VerbalMem">
            Verbal Memory <br />
            <div className="TextVerbal">
              Keep as many word in short <br /> term memory as possible
            </div>
          </div>

          <a href="#">
            <div className="ColorBlind">
              Color blind Test <br />
              <div className="TextColor">
                Look at the pictures below, and enter the numbers <br />
                that you see in the corresponding boxes.
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Benchdisplay;
