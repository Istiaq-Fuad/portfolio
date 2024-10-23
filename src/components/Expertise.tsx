import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faHive } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "NextJS",
  "Django",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Postman",
];

const labelsSecond = [
  "Blockchain",
  "Etherium",
  "Hyperledger Fabric",
  "Solidity",
  "Truffle",
  "Ganache",
  "Web3",
  "Docker",
];

const labelsThird = [
  "Pandas",
  "Matplotlib",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "Jupyter",
  "Deep Learning",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built expertise in building web applications from scratch
              using modern technologies such as React and NextJS. For specific
              backend development tasks I have also worked with Django and DRF.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faHive} size="3x" />
            <h3>Blockchain Enthusiast</h3>
            <p>
              Participated in Blockchain Olympiad in Bangladesh and also in
              international stage on 2022 and 2024. Mainly worked with Etherium
              and Hyperledger Fabric. I have also developed smart contracts /
              chaincodes for various use cases.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Machine Learning Practitioner</h3>
            <p>
              Practicing machine learning algorithms and deep learning models to
              solve real-world problems. I have worked with various machine
              learning and deep learning libraries and frameworks. Also have
              some experience in machine learning based research task.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
