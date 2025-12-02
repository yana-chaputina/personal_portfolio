const RESUME = "resume";
const ABOUTME = "aboutme";
const PROJECTS = "projects";

const RESUME_LINK = "resume-link";
const ABOUTME_LINK = "aboutme-link";
const PROJECTS_LINK = "projects-link";


const hideAllSections = () => {
    const aboutmeSection = document.getElementById(ABOUTME);
    if (aboutmeSection.style.display !== "none") {
        aboutmeSection.style.display = "none";
    }
    const resumeSection = document.getElementById(RESUME);
    if (resumeSection.style.display !== "none") {
        resumeSection.style.display = "none";
    }
    const projectsSection = document.getElementById(PROJECTS);
    if (projectsSection.style.display !== "none") {
        projectsSection.style.display = "none";
    }
}

const resumeLink = document.getElementById(RESUME_LINK);
resumeLink.onclick = (event) => {
    event.preventDefault();
    hideAllSections();
    const resumeSection = document.getElementById(RESUME);
    if (resumeSection.style.display === "none") {
        resumeSection.style.display = "";
    }
    return false;
}

const aboutmeLink = document.getElementById(ABOUTME_LINK);
aboutmeLink.onclick = (event) => {
    event.preventDefault();
    hideAllSections();
    const aboutmeSection = document.getElementById(ABOUTME);
    if (aboutmeSection.style.display === "none") {
        aboutmeSection.style.display = "";
    }
    return false;
}

const projectsLink = document.getElementById(PROJECTS_LINK);
projectsLink.onclick = (event) => {
    event.preventDefault();
    hideAllSections();
    const projectsSection = document.getElementById(PROJECTS);
    if (projectsSection.style.display === "none") {
        projectsSection.style.display = "";
    }
    return false;
}