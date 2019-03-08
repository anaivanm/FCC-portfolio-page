function init() {
  smoothScroll();
  getProjects();
}

function getProjects() {
  const projects = [
  {
    name: "Flare",
    desc: "Ruby on Rails, ActionCable, PostgreSQL, MapBox API",
    url: "https://github.com/anaivanm/flare",
    image: "./img/project-flare.png"
  },
  {
    name: "Portfolio website",
    desc: "HTML, CSS, JS, GSAP, Bootstrap 4",
    url: "https://github.com/anaivanm/flare",
    image: "./img/project-portfolio.jpg"
  },
  {
    name: "Score Keeper",
    desc: "Meteor, React, Semantic Ui",
    url: "https://github.com/anaivanm/score-keeper-meteor",
    image: "./img/project-score.png"
  }
  ];

  const ul = document.querySelector(".grid");
  const fragment = document.createDocumentFragment();

  projects.forEach(function(project) {
    const li = document.createElement("li");
    li.className = "grid-project";

    li.innerHTML = `<a href=${project.url} class="project-url" target="_blank" rel="noopener">
    <img src=${project.image} class="project-img" alt="Screenshot of ${project.name}">
    <div class="project-overlay">
    <h3 class="project-name">${project.name}</h3>
    <p class="project-desc">${project.desc}</p>
    </div>
    </a>`;

    fragment.appendChild(li);

  });

  ul.appendChild(fragment);

}

function smoothScroll() {
  const navBar = document.querySelector(".navbar");

  navBar.addEventListener("click", function(event) {
    if (event.target.target) return;

    event.preventDefault();
    const link = event.target.getAttribute("href");

    document.querySelector(link).scrollIntoView({ behavior: "smooth" });
  });
}

init();

TweenMax.staggerFrom(".stagger", 0.8, {
  opacity: 0,
  y: 20,
  delay: 0.2
}, 0.4);
