import React from "react";
import "./Experience.css";

const highlights = (props) => (
   <div className="my-auto mobile">
      <h2 className={"" + (props.isgreek ? "greekcathdr" : null)}>
         {props.isgreek ? "Εμπειρία" : "Experience"}
      </h2>
      <div className={"mt-4 mb-2 " + (props.isgreek ? "langsgreek" : "langs")}>
         {props.isgreek ? "Εργασιακή Εμπειρία" : "Industry Experience"}
      </div>
      <ul className="highli">
         <li>
            {props.isgreek
               ? "Δουλεύω σαν Full-Stack developer από τον Οκτώβριο του 2020 στην "
               : "Been working as a Full-Stack developer from the October of 2020 in "}
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="http://niovity.com/"
            >
               Niovity
            </a>
            .
         </li>
      </ul>
      <div className={"mt-4 mb-2 " + (props.isgreek ? "langsgreek" : "langs")}>
         {props.isgreek ? "Παρουσιάσεις & ´Αρθρα" : "Presentations & Articles"}
      </div>
      <ul className="highli">
         <li>
            {props.isgreek
               ? "Μία μικρή παρουσίαση για την εμπειρία χρήσης "
               : "A short presentation about user experience "}
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://github.com/VangelisGara/ys09-2018-project2/blob/master/ux.pdf"
            >
               UX Design: Why, What and How
            </a>
            .
         </li>
         <li>
            {props.isgreek
               ? "Αξιολόγηση προσβασιμότητας στο λειτουργικό σύστημα Zorin. "
               : "An extensive accessibility evaluation on Zorin OS. "}
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://www.slideshare.net/VangelisGaraganis/accessibility-on-zorinos"
            >
               Accessibility on ZorinOS
            </a>
            .
         </li>
      </ul>
      <div className={"mb-2 mt-4 " + (props.isgreek ? "langsgreek" : "langs")}>
         {props.isgreek
            ? "Διαγωνισμοί Πληροφορικής"
            : "Hackathons & Competitions"}
      </div>
      <ul className="highli">
         <li>
            {props.isgreek
               ? "Η συμμετοχή μου στον Ευρωπαϊκό διαγωνισμό πληροφορικής "
               : "My submission to the European Hackathon "}{" "}
            <span style={{ color: "#59d2ff", fontWeight: "bold" }}>
               {" "}
               #EUvsVirus
            </span>{" "}
            {props.isgreek ? "με την ιδέα " : "with the idea "}
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://devpost.com/software/napao"
            >
               napao
            </a>
            .
         </li>
         <li>
            {props.isgreek
               ? "Πήγαμε πολύ καλά στον διαγωνισμό πληροφορικής, crowdpolicy #hackathon. Η ιδέα μας "
               : "Had a really good run in Crowdpolicy Hackathon (April 2019), with our agricultural idea called "}
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://github.com/crowdhackathon-agrifood/agreektourism"
            >
               Agreektourism
            </a>
            .
         </li>
         <li>
            {props.isgreek ? "Πήραμε μέρος στο " : "Took part on "}
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://github.com/VangelisGara/GoogleHashCode2020"
            >
               Google Hash Code 2020
            </a>
            {props.isgreek
               ? " με μια ομάδα προγραμματιστών. "
               : " with a group of programmers. "}
         </li>
         <li>
            {props.isgreek
               ? "Συμμετείχα στην κινητοποίηση του Science Community της Αθήνας, στο διαγωνισμό "
               : "Participated in Athens science community mobilization,"}{" "}
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://scico.gr/en/fireathon-2018-an-innovative-marathon-brings-hope-to-the-fight-with-flames/"
            >
               {" "}
               fireathon{" "}
            </a>
            .
         </li>
      </ul>
      <div className={"mb-2 mt-4 " + (props.isgreek ? "langsgreek" : "langs")}>
         {props.isgreek
            ? "Καινοτομία και Επιχειρηματικότητα"
            : "Entrepreneurship"}
      </div>
      <ul className="highli">
         <li>
            {props.isgreek
               ? "Συμμετείχαμε στον επιταγχυτή του πανεπιστημίου "
               : "Participated in university's accelerator "}
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://www.linkedin.com/company/archimedes-accelerator/"
            >
               {" "}
               Archimedes{" "}
            </a>{" "}
            {props.isgreek ? " με την ιδεά " : " with our idea "}
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://github.com/crowdhackathon-agrifood/agreektourism"
            >
               Agreektourism
            </a>
         </li>
      </ul>
   </div>
);

export default highlights;
