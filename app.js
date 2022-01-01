import { addLogos } from "./functions/addLogos.js";
import { specialtiesLogos, projectsLogos, connectLogos } from "./data/imageData.js";

const specialties = document.querySelector("#specialties");
const projects = document.querySelector("#projects");
const connect = document.querySelector("#connect");

addLogos(specialtiesLogos, specialties);
addLogos(projectsLogos, projects);
addLogos(connectLogos, connect);