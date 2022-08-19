import React from "react";

const github = require("./github.png")
const linkedin = require("./linkedin.png")

export const Footer = (props) => {
  const today = new Date();
    return (

    <div>
        <div className="phantom" />
        <div className={props.fclass}>
            <div className="footerLinks">
                <a href="https://github.com/anclark686" target="_blank" rel="noreferrer">
                    <img
                        alt=""
                        src={github}
                        width="35"
                        height="35"
                        className="d-inline-block align-left"
                    />
                </a>
                <a href="https://www.linkedin.com/in/anclark686/" target="_blank" rel="noreferrer">
                    <img
                        alt=""
                        src={linkedin}
                        width="35"
                        height="35"
                        className="d-inline-block align-left"
                    />
                </a>
               
            </div>
            <a 
                href="https://reyaly-portfolio.herokuapp.com/" 
                className="d-inline-block align-left" 
                style={{paddingTop: "10px", paddingLeft:"10px", paddingRight:"10px"}}>    
                <div id="portfolioFooter">Portfolio </div>
            </a> 

            <p>Copyright &copy; Reyaly Tech {today.getFullYear()}</p>
        </div>
    </div>

  );
};