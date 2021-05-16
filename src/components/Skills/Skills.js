import React from "react";
import { Row, Col } from "reactstrap";
import "./Skills.css";

const skills = (props) => {
   var dev_skills = [
      "fab fa-python",
      "fab fa-java",
      "fab fa-js",
      "fab fa-react",
      "fab fa-vuejs",
      "fab fa-node-js",
      "fab fa-html5",
      "fab fa-css3",
      "fab fa-php",
      "fab fa-docker",
   ];
   var uniq_key = 0;
   var dev_skills_list = dev_skills.map((skill) => {
      uniq_key++;
      return (
         <li className="list-inline-item" key={uniq_key}>
            <i className={skill}></i>
         </li>
      );
   });

   return (
      <div className="my-auto">
         <h2
            className={
               "mb-4 skillshdr " + (props.isgreek ? "greekcathdr" : null)
            }
         >
            {props.isgreek ? "Ικανοτητες" : "Skills"}
         </h2>
         <Row>
            {/* Languages & Frameworks */}
            <Col sm="6" md="5">
               <div
                  className={"mb-1 " + (props.isgreek ? "langsgreek" : "langs")}
               >
                  {props.isgreek
                     ? "Γλώσσες Προγραμματισμού και Εργαλεία"
                     : "Languages and Frameworks"}
               </div>
               <ul className="list-inline dev-icons">
                  {dev_skills_list}
                  <li className="list-inline-item c"> c </li>
                  <li className="list-inline-item cpp"> c++ </li>
                  <li className="list-inline-item mysql"> SQL </li>
               </ul>
               <div
                  className={"mb-1 " + (props.isgreek ? "langsgreek" : "langs")}
               >
                  {props.isgreek ? "Επίσης..." : "Also..."}
               </div>
               <p className="alsoPar">
                  Spring Framwork, Groovy, Spock testing, Apache Kafka,
                  Elasticsearch, NextJS, Expressjs, Firebase, Mapbox, Material
                  and Prolog.
               </p>
            </Col>
            {/* Workflow */}
            <Col sm="6" md="7">
               <div
                  className={
                     "mb-2 " + (props.isgreek ? "workflgreek" : "workfl")
                  }
               >
                  {props.isgreek ? "Ροή Εργασίας" : "Workflow"}
               </div>
               <ul className="fa-ul workflow">
                  <li>
                     <i className="fas fa-users"></i>&nbsp;&nbsp;
                     {props.isgreek
                        ? "Εξοικειωμένος με την μεθοδολογία Agile και Scrum"
                        : "Familiar with Agile & Scrum Methodology"}
                  </li>
                  <li>
                     <i className="fab fa-git"></i>&nbsp;&nbsp;&nbsp;
                     {props.isgreek
                        ? "Για έλεγχο εκδόσεων και διαχείριση λογισμικού"
                        : "For Version Control & Software management"}
                  </li>
                  <li>
                     <i className="fas fa-chart-line"></i>&nbsp;&nbsp;
                     {props.isgreek
                        ? "UML & SSADM για μοντελοποιήση λογισμικού"
                        : "UML & SSADM for Software Design & Modeling"}
                  </li>
                  <li>
                     <i className="fab fa-linux"></i>&nbsp;&nbsp;
                     {props.isgreek
                        ? "Εμπερία σε Linux μηχανήματα τα τελευταία 7 χρόνια"
                        : "Working in Linux machines the past 7 years"}
                  </li>
                  <li>
                     <i className="fas fa-pencil-ruler"></i>&nbsp;&nbsp;
                     {props.isgreek
                        ? "Πρωτοτυποποιήση με εργαλεία Balsamiq και Figma"
                        : "Familiar in Wireframing with Balsamiq and Figma"}
                  </li>
                  <li>
                     &nbsp;<i className="fas fa-i-cursor"></i>&nbsp;&nbsp;&nbsp;
                     {props.isgreek
                        ? " Χρησιμοποιώ LaTeX για επιστημονικές παρουσιάσεις"
                        : "Using LaTeX for scientific documentation"}
                  </li>
                  <li>
                     <i className="fas fa-photo-video"></i>&nbsp;&nbsp;
                     {props.isgreek
                        ? "Επεξεργασία βίντεο/εικόνας με krita και sony vegas"
                        : "Video And Photo Editing (Photoshop & Sony Vegas)"}
                  </li>
                  <li>
                     <i className="fas fa-universal-access" />
                     &nbsp;&nbsp;&nbsp;
                     {props.isgreek
                        ? "Έλεγχος προσβασιμότητας και Σχεδίαση για Όλους βάση WCAG"
                        : "Accessibility testing & Design for all and WCAG"}
                  </li>
               </ul>
            </Col>
         </Row>
      </div>
   );
};

export default skills;
