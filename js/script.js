const header = document.getElementById("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 40){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});
// =========================
// MENÚ MOBILE
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileOverlay = document.querySelector(".mobile-overlay");
const mobileClose = document.querySelector(".mobile-close");
const mobileLinks = document.querySelectorAll(".mobile-menu nav a");

function openMobileMenu() {
    mobileMenu.classList.add("active");
    mobileOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

menuToggle.addEventListener("click", openMobileMenu);

mobileClose.addEventListener("click", closeMobileMenu);

mobileOverlay.addEventListener("click", closeMobileMenu);

mobileLinks.forEach(link => {
    link.addEventListener("click", closeMobileMenu);
});
// =========================
// VOLVER ARRIBA
// =========================

const backTop = document.querySelector(".sd-backtop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backTop.classList.add("visible");
    } else {
        backTop.classList.remove("visible");
    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
/* =========================================================
   GALERÍA AUTOMÁTICA DE PROYECTOS
========================================================= */

const projects = [

    {
        image: "/assets/img/floreria.webp",
        name: "Florería",
        category: "BRANDING",
        alt: "Identidad visual para florería"
    },

    {
        image: "/assets/img/arco.webp",
        name: "Grupo Arcoíris",
        category: "BRANDING",
        alt: "Identidad visual de Grupo Arcoíris"
    },

    {
        image: "/assets/img/filim.webp",
        name: "Grupo Filimarie",
        category: "BRANDING",
        alt: "Identidad visual de Grupo Filimarie"
    },

    {
        image: "/assets/img/abo.webp",
        name: "Despacho jurídico",
        category: "PÁGINA WEB",
        alt: "Página web para despacho jurídico"
    },

    {
        image: "/assets/img/cafeteria.webp",
        name: "Cafetería",
        category: "PÁGINA WEB",
        alt: "Página web para cafetería"
    },

    {
        image: "/assets/img/miniweb.webp",
        name: "Web de reservación para barberia",
        category: "PÁGINA WEB",
        alt: "Mini Web para barberia"
    },

    {
        image: "/assets/img/pv.webp",
        name: "Punto de venta",
        category: "SISTEMAS",
        alt: "Sistema de punto de venta"
    }

];


const projectImage = document.getElementById("projectImage");
const projectName = document.getElementById("projectName");
const projectCategory = document.getElementById("projectCategory");
const projectCounter = document.getElementById("projectCounter");
const projectImageContainer = document.querySelector(".sd-project-image");

let currentProject = 0;


function showProject(index){

    projectImageContainer.classList.add("fade-out");


    setTimeout(() => {

        const project = projects[index];

        projectImage.src = project.image;
        projectImage.alt = project.alt;

        projectName.textContent = project.name;
        projectCategory.textContent = project.category;

        projectCounter.textContent =
            `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;


        projectImageContainer.classList.remove("fade-out");

    }, 500);
}


setInterval(() => {

    currentProject++;

    if(currentProject >= projects.length){
        currentProject = 0;
    }

    showProject(currentProject);

}, 4500);
/* =========================================
   INSTAGRAM EMBED
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const instagramEmbed = document.querySelector(".instagram-media");

    if (!instagramEmbed) return;


    if (window.instgrm) {

        window.instgrm.Embeds.process();

        return;

    }


    const existingScript = document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]'
    );


    if (existingScript) return;


    const script = document.createElement("script");

    script.src = "https://www.instagram.com/embed.js";
    script.async = true;


    script.onload = () => {

        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }

    };


    document.body.appendChild(script);

});
