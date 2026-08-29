// Dialogue Array for Rick Speech Bubble
const rickDialogues = [
  "EMAIL ME AT:<br><strong>ashley.irig@gmail.com</strong>",
  "GITHUB REPOSITORY:<br><strong>github.com/yourusername</strong>",
  "LINKEDIN PROFILE:<br><strong>linkedin.com/in/yourusername</strong>",
  "SOCIALS & MEDIA:<br><strong>@yourhandle</strong>"
];

let currentDialogueIndex = 0;

document.addEventListener("DOMContentLoaded", () => {

  // --- 1. REFINED 3D MOUNTAIN & CLOUD PARALLAX MANEUVER ---
  const parallaxScene = document.getElementById("parallax-scene");
  const parallaxLayers = document.querySelectorAll(".parallax-layer");

  if (parallaxScene) {
    parallaxScene.addEventListener("mousemove", (e) => {
      const rect = parallaxScene.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = (y / rect.height) * -12;
      const tiltY = (x / rect.width) * 12;

      parallaxLayers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed")) || 0.05;
        const depthZ = parseFloat(layer.getAttribute("data-z")) || 0;

        const xOffset = x * speed * 1.5;
        const yOffset = y * speed * 0.8;

        layer.style.transform = `translate3d(${xOffset}px, ${yOffset}px, ${depthZ}px) rotateX(${tiltX * speed}deg) rotateY(${tiltY * speed}deg)`;
      });
    });

    parallaxScene.addEventListener("mouseleave", () => {
      parallaxLayers.forEach((layer) => {
        const depthZ = parseFloat(layer.getAttribute("data-z")) || 0;
        layer.style.transform = `translate3d(0px, 0px, ${depthZ}px) rotateX(0deg) rotateY(0deg)`;
      });
    });
  }

  // --- 2. HOMEPAGE NAVIGATION BUTTONS ---
  const mortyHeroBtn = document.getElementById("morty-hero-btn");
  const rickHeroBtn = document.getElementById("rick-hero-btn");

  if (mortyHeroBtn) {
    mortyHeroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (rickHeroBtn) {
    rickHeroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // --- 3. TOP NAV ICON SHORTCUTS ---
  const navBtnHome = document.getElementById("nav-home-btn");
  const navBtnUser = document.getElementById("nav-user-btn");
  const navBtnWork = document.getElementById("nav-work-btn");
  const navBtnMail = document.getElementById("nav-mail-btn");

  if (navBtnHome) navBtnHome.addEventListener("click", () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }));
  if (navBtnUser) navBtnUser.addEventListener("click", () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }));
  if (navBtnWork) navBtnWork.addEventListener("click", () => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }));
  if (navBtnMail) navBtnMail.addEventListener("click", () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }));

  // --- 4. BINDER PROJECT DATA & POPULATE ---
  const projects = [
    {
      contains: "Projects",
      desc: "wine-Festival.",
      link: "https://airig250000000247-source.github.io/winefestival/index.html"
    },
    {
      contains: "Projects",
      desc: "FashionBlog.",
      link: "https://airig250000000247-source.github.io/fashionblog.html"
    },
    {
      contains: "Projects",
      desc: "DaviesBurger.",
      link: "https://airig250000000247-source.github.io/daviesburger/index.html"
    }
  ];

  const containsText1 = document.getElementById("work-contains-text-1");
  const descText1 = document.getElementById("work-description-1");
  const projectLink1 = document.getElementById("work-project-link-1");

  const containsText2 = document.getElementById("work-contains-text-2");
  const descText2 = document.getElementById("work-description-2");
  const projectLink2 = document.getElementById("work-project-link-2");

  const containsText3 = document.getElementById("work-contains-text-3");
  const descText3 = document.getElementById("work-description-3");
  const projectLink3 = document.getElementById("work-project-link-3");

  function updateBinderPage() {
    if (projects[0]) {
      if (containsText1) containsText1.textContent = projects[0].contains;
      if (descText1) descText1.textContent = projects[0].desc;
      if (projectLink1) projectLink1.href = projects[0].link;
    }
    if (projects[1]) {
      if (containsText2) containsText2.textContent = projects[1].contains;
      if (descText2) descText2.textContent = projects[1].desc;
      if (projectLink2) projectLink2.href = projects[1].link;
    }
    if (projects[2]) {
      if (containsText3) containsText3.textContent = projects[2].contains;
      if (descText3) descText3.textContent = projects[2].desc;
      if (projectLink3) projectLink3.href = projects[2].link;
    }
  }

  // Run update on load
  updateBinderPage();

  // --- WORK SECTION BUTTON NAVIGATION ---
  const workMortyBtn = document.getElementById("morty-peek-btn");

  if (workMortyBtn) {
    workMortyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  // --- 5. RICK SPEECH BUBBLE INTERACTION ---
  const rickAvatarBtn = document.getElementById("rick-avatar-btn");
  const rickText = document.getElementById("rick-text");

  if (rickAvatarBtn && rickText) {
    rickAvatarBtn.addEventListener("click", () => {
      currentDialogueIndex = (currentDialogueIndex + 1) % rickDialogues.length;
      
      rickText.style.animation = 'none';
      void rickText.offsetWidth; // Force CSS animation reflow
      rickText.style.animation = 'bubblePop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      
      rickText.innerHTML = rickDialogues[currentDialogueIndex];
    });
  }
});