/* ==========================================================
   HOME SECTION ONLY - script.js
   Features:
   1. Preloader
   2. Typing Animation
   3. Dark / Light Theme Toggle
   4. Interactive Cursor Background
========================================================== */

/* ================= PRELOADER ================= */
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.transition = "all 0.6s ease";
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        setTimeout(function () {
            preloader.style.display = "none";
        }, 600);
    }
});

/* ================= TYPING ANIMATION ================= */
const roles = [
    "Future Embedded Engineer",
    "Embedded Systems Enthusiast",
    "Python & C Programmer",
    "Web Development Learner"
];

const typedText = document.getElementById("typed-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typedText) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typedText.textContent =
            currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1800); // pause
            return;
        }

        setTimeout(typeEffect, 90);
    } else {
        typedText.textContent =
            currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeEffect, 400);
            return;
        }

        setTimeout(typeEffect, 45);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    typeEffect();
});

/* ================= THEME TOGGLE ================= */
const themeToggle = document.getElementById("theme-toggle");

function updateThemeIcon(isLight) {
    if (!themeToggle) return;

    const icon = themeToggle.querySelector("i");
    if (!icon) return;

    if (isLight) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

if (themeToggle) {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        updateThemeIcon(true);
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");

        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

        updateThemeIcon(isLight);
    });
}

/* ================= CURSOR RESPONSIVE BACKGROUND ================= */
const cursorGlow = document.querySelector(".cursor-glow");
const blobs = document.querySelectorAll(".blob");

document.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    /* Move glow */
    if (cursorGlow) {
        cursorGlow.style.left = x + "px";
        cursorGlow.style.top = y + "px";
    }

    /* Move blobs slightly for parallax effect */
    const offsetX =
        (x / window.innerWidth - 0.5) * 30;
    const offsetY =
        (y / window.innerHeight - 0.5) * 30;

    blobs.forEach(function (blob, index) {
        const factor = (index + 1) * 0.35;

        blob.style.transform =
            `translate(${offsetX * factor}px, ${offsetY * factor}px)`;
    });
});

/* ==========================================================
   SCROLL REACTIVE BACKGROUND
========================================================== */
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const offset = scrollY * 0.25;

    document.body.style.setProperty(
        "--scroll-offset",
        `${offset}px`
    );
});

/* ==========================================================
   ACTIVE NAVIGATION HIGHLIGHT
   Works for all sections including Education
========================================================== */
/* ==========================================================
   ACTIVE NAVIGATION HIGHLIGHT
   Replace your existing ACTIVE NAVIGATION HIGHLIGHT section
   with this corrected version.
========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {
        let currentSection = "hero"; // Default to Home

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        /* Remove active class from all links */
        navLinks.forEach((link) => {
            link.classList.remove("active");

            const target = link
                .getAttribute("href")
                .replace("#", "");

            if (target === currentSection) {
                link.classList.add("active");
            }
        });

        /* Force Home to be active near the top of the page */
        if (window.scrollY < 100) {
            const homeLink = document.querySelector(
                '.nav-link[href="#home"]'
            );

            if (homeLink) {
                navLinks.forEach((link) =>
                    link.classList.remove("active")
                );

                homeLink.classList.add("active");
            }
        }
    }

    /* Update when scrolling */
    window.addEventListener("scroll", updateActiveNav);

    /* Run once when page loads */
    updateActiveNav();
});



/* ==========================================================
   EXACT PLACE TO PASTE THE NEW CODE
========================================================== */

/*
1. Open script.js.

2. Locate the end of this block:
*/

document.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    if (cursorGlow) {
        cursorGlow.style.left = x + "px";
        cursorGlow.style.top = y + "px";
    }

    const offsetX =
        (x / window.innerWidth - 0.5) * 30;
    const offsetY =
        (y / window.innerHeight - 0.5) * 30;

    
});   


/* ==========================================================
   PASTE EVERYTHING BELOW THIS LINE
   (Immediately after the mousemove block)
========================================================== */

/* ==========================================================
   SCROLL REACTIVE BACKGROUND
========================================================== */
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const offset = scrollY * 0.25;

    document.body.style.setProperty(
        "--scroll-offset",
        `${offset}px`
    );
});

/* ==========================================================
   ACTIVE NAVIGATION HIGHLIGHT
   Automatically highlights:
   Home, About, Education, Projects, Experience, Contact
========================================================== */
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");

            const target = link
                .getAttribute("href")
                .replace("#", "");

            if (target === currentSection) {
                link.classList.add("active");
            }
        });

        /* Default to Home when page is at the top */
        if (window.scrollY < 100) {
            const homeLink = document.querySelector(
                '.nav-link[href="#hero"]'
            );

            if (homeLink) {
                homeLink.classList.add("active");
            }
        }
    }

    /* Update on scroll */
    window.addEventListener("scroll", updateActiveNav);

    /* Run once after page loads */
    updateActiveNav();
});
/* ==========================================================
   SAFE COSMIC SECTION THEME SWITCHER
   Add this code at the VERY END of script.js

   IMPORTANT:
   - Changes ONLY background classes on <body>
   - Does NOT affect fonts or text styles
   - Smoothly switches background colors per section
========================================================== */


/* ==========================================================
   SECTION THEME SWITCHER
   Add this code at the VERY END of script.js

   This changes the background colors automatically when the
   corresponding section becomes visible while scrolling.
========================================================== */


/* ==========================================================
   CERTIFICATES SECTION JAVASCRIPT
   OPTIONAL ENTRANCE ANIMATION
   Add this code at the VERY END of script.js
========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const certificateCards = document.querySelectorAll(".certificate-card");

    /* Exit if certificates section is not present */
    if (!certificateCards.length) return;

    /* Observe cards when they enter the viewport */
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("certificate-visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    /* Initial hidden state */
    certificateCards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition =
            `opacity 0.8s ease ${index * 0.1}s, ` +
            `transform 0.8s ease ${index * 0.1}s`;

        observer.observe(card);
    });
});

/* ==========================================================
   ADD THE FOLLOWING CSS AT THE END OF style.css
   (Optional but recommended for smooth entrance effect)

.certificate-card.certificate-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
========================================================== */



/* ==========================================================
   PROJECTS SECTION JAVASCRIPT
   Scroll Entrance Animation
   Add this code at the VERY END of script.js
========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    /* Exit if no project cards are present */
    if (!projectCards.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("project-visible");
                    observer.unobserve(entry.target); /* animate only once */
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    /* Apply staggered transition delays */
    projectCards.forEach((card, index) => {
        card.style.transition =
            `opacity 0.8s ease ${index * 0.15}s, ` +
            `transform 0.8s ease ${index * 0.15}s, ` +
            `box-shadow 0.5s ease, ` +
            `border-color 0.5s ease`;

        observer.observe(card);
    });
});
/* ==========================================================
   FINAL SIMPLIFIED SKILLS SECTION JAVASCRIPT
   Add this code at the VERY END of script.js
========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const skillElements = document.querySelectorAll(
        ".skill-card, .skill-detail-card"
    );

    if (!skillElements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;

                    /* Reveal element */
                    element.classList.add("skill-visible");

                    /* Animate progress bar for small cards */
                    if (element.classList.contains("skill-card")) {
                        const level = element.getAttribute("data-level");
                        const progress =
                            element.querySelector(".skill-progress");

                        setTimeout(() => {
                            if (progress) {
                                progress.style.width = level + "%";
                            }
                        }, 250);
                    }

                    /* Animate only once */
                    observer.unobserve(element);
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    /* Staggered animation delays */
    skillElements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(element);
    });
});
/* ==========================================================
   EXPERIENCE SECTION JAVASCRIPT
   Add this code at the VERY END of script.js
========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const experienceCards = document.querySelectorAll(".experience-card");

    if (!experienceCards.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("experience-visible");
                    observer.unobserve(entry.target); /* animate only once */
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    /* Staggered animation delays */
    experienceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.12}s`;
        observer.observe(card);
    });
});
/* ==========================================================
   CONTACT SECTION JAVASCRIPT
   Add this code at the VERY END of script.js
========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const contactElements = document.querySelectorAll(
        ".contact-info-card, .contact-social-card"
    );

    if (!contactElements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("contact-visible");
                    observer.unobserve(entry.target); /* animate only once */
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    /* Staggered animation delays */
    contactElements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(element);
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
/* ==========================================================
   FINAL SECTION-WISE BACKGROUND THEME SWITCHER
   Supports:
   Home, About, Education, Certificates, Projects,
   Skills, Experience, Contact, Footer
========================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const themedSections = [
        { selector: "#hero",         theme: "theme-home" },
        { selector: "#about",        theme: "theme-about" },
        { selector: "#education",    theme: "theme-education" },
        { selector: "#certificates", theme: "theme-certificates" },
        { selector: "#projects",     theme: "theme-projects" },
        { selector: "#skills",       theme: "theme-skills" },
        { selector: "#experience",   theme: "theme-experience" },
        { selector: "#contact",      theme: "theme-contact" },
        { selector: "footer",        theme: "theme-footer" }
    ];

    /* Find all existing sections */
    const themeTargets = themedSections
        .map(item => ({
            element: document.querySelector(item.selector),
            theme: item.theme
        }))
        .filter(item => item.element);

    /* List of all theme classes */
    const allThemes = themedSections.map(item => item.theme);

    function updateSectionTheme() {
        let activeTheme = "theme-home";

        themeTargets.forEach(item => {
            const section = item.element;
            const sectionTop = section.offsetTop - 220;
            const sectionBottom =
                sectionTop + section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {
                activeTheme = item.theme;
            }
        });

        /* Remove all previous theme classes */
        document.body.classList.remove(...allThemes);

        /* Apply active theme */
        document.body.classList.add(activeTheme);
    }

    /* Update theme while scrolling */
    window.addEventListener("scroll", updateSectionTheme);

    /* Run once on page load */
    updateSectionTheme();
});
// ==========================================
// LOADING SCREEN
// ==========================================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 2000); // Show loader for 2 seconds
});