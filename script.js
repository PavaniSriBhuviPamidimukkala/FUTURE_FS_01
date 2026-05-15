// NAVIGATION

const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const navButtons = document.querySelectorAll(".nav-btn");

// PAGE SWITCH FUNCTION

function showPage(pageId){

  pages.forEach(page => {
    page.classList.remove("active-page");
  });

  document.getElementById(pageId).classList.add("active-page");

  navLinks.forEach(link => {
    link.classList.remove("active");
  });

  document
    .querySelector(`[data-page="${pageId}"]`)
    .classList.add("active");

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

// NAVBAR LINKS

navLinks.forEach(link => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const page = link.dataset.page;

    showPage(page);
  });
});

// BUTTON NAVIGATION

navButtons.forEach(button => {

  button.addEventListener("click", () => {

    const page = button.dataset.page;

    showPage(page);
  });
});

// MOBILE MENU

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// PROJECT DATA

const projects = [

  {
    title:"Krishimitra",
    role:"Team Leader • Smart India Hackathon",
    description:
      "AI-powered agricultural assistant designed to help farmers with intelligent recommendations and real-time agricultural insights.",
    tech:["AI","JavaScript","Agritech","Leadership"]
  },

  {
    title:"AccessLearn AI",
    role:"Frontend & Accessibility Developer",
    description:
      "Accessibility-focused LMS designed for visual and hearing assistance using Vanilla JavaScript.",
    tech:["Vanilla JS","Accessibility","UI/UX","Inclusive Design"]
  },

  {
    title:"Foodmates",
    role:"Backend & Integration Developer",
    description:
      "Food redistribution platform using Python and Google Sheets API to reduce food waste efficiently.",
    tech:["Python","Google Sheets API","Automation","Social Impact"]
  }
];

// LOAD PROJECTS

const projectsGrid = document.getElementById("projectsGrid");

projects.forEach(project => {

  const card = document.createElement("div");

  card.classList.add("project-card");

  card.innerHTML = `

    <h3>${project.title}</h3>

    <p class="project-role">
      ${project.role}
    </p>

    <p class="project-description">
      ${project.description}
    </p>

    <div class="tags">
      ${project.tech.map(tag =>
        `<span class="tag">${tag}</span>`
      ).join("")}
    </div>
  `;

  projectsGrid.appendChild(card);
});

// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const message = document.getElementById("message").value.trim();

  if(!name || !email || !message){

    formMessage.textContent =
      "Please fill all fields.";

    return;
  }

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailPattern.test(email)){

    formMessage.textContent =
      "Please enter a valid email.";

    return;
  }

  formMessage.textContent =
    "Message submitted successfully.";

  contactForm.reset();
});