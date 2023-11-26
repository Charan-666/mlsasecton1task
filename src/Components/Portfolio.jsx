/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer.jpg";

const imageAltText = "my electronic gadgets at one place";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Ai chatbot for college website",
    description:
      " Developed AI-based chatbot using Python Rasa framework for college website - Implemented conversational AI model training with NLU, Dialogue Management and Action policies - Utilized Git and GitHub for project version control and collaboration - Leveraged Docker for deploying the AI model into production",
    url: "https://github.com/Charan-666/rasa-chatbot",
  },
  {
    title: "Static e-commerce website",
    description:
      " Developed full responsive, static e-commerce website using HTML, CSS, and JavaScript, achieving premium look and feel. - Utilized e-commerce tools to enhance user experience. - Implemented design principles to ensure site was visually appealing and easy to navigate. - Tested site for usability and performance",
       url: "https://github.com/Charan-666/Ecommerce.github.io",
  },
  {
    title: "student accomodation",
    description:
      "- Developed a full stack webpage as a hobby project during trainings - Implemented HTML, CSS, PHP, JavaScript, DBMS, and React to create the webpage  - Demonstrated proficiency in utilizing various technologies to enhance functionality - Successfully designed and implemented a user-friendly interface for the webpage - Incorporated database management to efficiently store and retrieve data - Showcased ability to work independently and take ownership of project deliverables - Achieved desired objectives by effectively utilizing a range of programming languages and frameworks",
       url: "https://github.com/Charan-666/PGlife-accomodation",
  },
  {
    title: "donation portal",
    description:
      " Demonstrated passion for learning and growth through successful completion of a project - Implemented integration of a payment gateway to enhance the functionality of a webpage - Mastered the art of aligning elements on the webpage, ensuring a visually appealing design - Acquired valuable knowledge and skills through project, further enhancing my expertise in web development",
    url: "https://github.com/Charan-666/clemency.github.io",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
