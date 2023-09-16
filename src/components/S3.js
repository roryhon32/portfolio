import React from "react";

function S3() {
  return (
    <div className="project">
      
      <div className="conteiner">
        <div className="projects" id="projects">
          <div className="center">
            <h3>Projects</h3>
            <p>Projects that i worked</p>
          </div>
          <div className="ProjectsLink container">
            <div className="p1">
              <a
                href="https://manoelf.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Project1"></div>
              </a>
              <p>Landing Page</p>
            </div>

            <div className="p2">
             
              <a
                href="https://reactcalculatorlg.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Project3"></div>
              </a>
              <p>React caculator</p>
            </div>
            <div className="p3">
            
              <a
                href="https://calcjslg.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Project4"></div>
              </a>
              <p>js calculator</p>
            </div>

            <div className="p4">
              {" "}
              <div className="Project2"></div>
              <p>e-learning plataform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default S3;
