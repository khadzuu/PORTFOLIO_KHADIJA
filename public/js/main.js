/* ========================================= */
/* NAVBAR ANIMATION */
/* ========================================= */

const navbar = document.getElementById("navbar");
const hero = document.getElementById("home");

window.addEventListener("scroll", () => {

    if (window.scrollY > hero.offsetHeight - 80) {

        navbar.classList.remove("-translate-y-full", "opacity-0");
        navbar.classList.add("translate-y-0", "opacity-100");

    } else {

        navbar.classList.add("-translate-y-full", "opacity-0");
        navbar.classList.remove("translate-y-0", "opacity-100");

    }

});

/* ========================================= */
/* MOBILE NAVBAR */
/* ========================================= */

const navMenuBtn = document.getElementById("navMenuBtn");
const mobileNavbarMenu = document.getElementById("mobileNavbarMenu");

// Open / Close menu
navMenuBtn.addEventListener("click", () => {
    mobileNavbarMenu.classList.toggle("hidden");
});

// Close menu after clicking any link
document.querySelectorAll("#mobileNavbarMenu a").forEach(link => {

    link.addEventListener("click", () => {

        // Hide the dropdown
        mobileNavbarMenu.classList.add("hidden");

        // Smooth scroll
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});

/* ========================================= */
/* HERO MENU */
/* ========================================= */

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menuOverlay = document.getElementById("menuOverlay");

if (menuBtn && closeBtn && menuOverlay) {

    menuBtn.addEventListener("click", () => {

        menuOverlay.classList.remove("translate-x-full");

    });

    closeBtn.addEventListener("click", () => {

        menuOverlay.classList.add("translate-x-full");

    });

    document.querySelectorAll(".menu-link").forEach(link => {

        link.addEventListener("click", () => {

            menuOverlay.classList.add("translate-x-full");

        });

    });

}

/* ========================================= */
/* TYPING EFFECT */
/* ========================================= */

const typingElement = document.getElementById("typingText");

if (typingElement) {

    const words = ["Hi, I’m Khadija. I make the web prettier ✨"];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(typeEffect, 2100);

                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

            }

        }

        setTimeout(typeEffect, deleting ? 50 : 100);

    }

    typeEffect();

}

/* ========================================= */
/* SKILLS ANIMATION */
/* ========================================= */

const skillCards = document.querySelectorAll(".skill-card");

if (skillCards.length > 0) {

    const skillObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show");

                }, index * 120);

            }

        });

    }, {
        threshold: 0.2
    });

    skillCards.forEach(card => {

        skillObserver.observe(card);

    });

}

/* ========================================= */
/* PROJECT MODAL */
/* ========================================= */

const projectScript = document.getElementById("project-data");

if (projectScript) {

    const projectData = JSON.parse(projectScript.textContent);

    const projectCards = document.querySelectorAll(".project-card");

    const projectOverlay = document.getElementById("projectOverlay");

    const modal = document.getElementById("projectModal");

    const closeProject = document.getElementById("closeProject");

    const modalImage = document.getElementById("modalImage");

    const modalTitle = document.getElementById("modalTitle");

    const modalDescription = document.getElementById("modalDescription");

    const modalGithub = document.getElementById("modalGithub");

    projectCards.forEach(card => {

        card.addEventListener("click", () => {

            const id = Number(card.dataset.id);

            const project = projectData.find(p => p.id === id);

            if (!project) return;

            modalImage.src = project.image;
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalGithub.href = project.github;

            projectOverlay.classList.remove("hidden");
            projectOverlay.classList.add("flex", "animate-fade");

            setTimeout(() => {

                modal.classList.remove(
                    "opacity-0",
                    "translate-y-20"
                );

                modal.classList.add(
                    "opacity-100",
                    "translate-y-0"
                );

            }, 20);

            document.body.classList.add("overflow-hidden");

        });

    });

    function closeModal() {

        modal.classList.remove(
            "opacity-100",
            "translate-y-0"
        );

        modal.classList.add(
            "opacity-0",
            "translate-y-20"
        );

        document.body.classList.remove("overflow-hidden");

        setTimeout(() => {

            projectOverlay.classList.remove(
                "flex",
                "animate-fade"
            );

            projectOverlay.classList.add("hidden");

        }, 400);

    }

    if (closeProject) {

        closeProject.addEventListener("click", closeModal);

    }

    if (projectOverlay) {

        projectOverlay.addEventListener("click", (e) => {

            if (e.target === projectOverlay) {

                closeModal();

            }

        });

    }

}

/* ========================================= */
/* RESUME SECTION */
/* ========================================= */

const loadResumeBtn = document.getElementById("loadResume");
const resumeContainer = document.getElementById("resumeContainer");

if (loadResumeBtn && resumeContainer) {

    loadResumeBtn.addEventListener("click", () => {

        if (resumeContainer.classList.contains("hidden")) {

            resumeContainer.classList.remove("hidden");

            setTimeout(() => {

                resumeContainer.classList.remove(
                    "opacity-0",
                    "translate-y-10"
                );

                resumeContainer.classList.add(
                    "opacity-100",
                    "translate-y-0"
                );

                resumeContainer.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 50);

            loadResumeBtn.textContent = "Hide CV";

        } else {

            resumeContainer.classList.remove(
                "opacity-100",
                "translate-y-0"
            );

            resumeContainer.classList.add(
                "opacity-0",
                "translate-y-10"
            );

            setTimeout(() => {

                resumeContainer.classList.add("hidden");

            }, 400);

            loadResumeBtn.textContent = "Load CV";

        }

    });

}

/* ========================================= */
/* CONTACT SECTION */
/* ========================================= */

const contactInfo = document.getElementById("contactInfo");
const contactCard = document.getElementById("contactCard");
const contactForm = document.getElementById("contactForm");

/* ---------- Scroll Animation ---------- */

const contactObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-contact");

        }

    });

}, {
    threshold: 0.2
});

if (contactInfo) {

    contactObserver.observe(contactInfo);

}

if (contactCard) {

    contactObserver.observe(contactCard);

}

/* ---------- Contact Form ---------- */

if (contactForm) {

    contactForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const formMessage = document.getElementById("formMessage");
        const submitBtn = document.getElementById("submitBtn");

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {

            formMessage.className =
                "rounded-xl px-5 py-4 mb-6 bg-red-100 text-red-700 text-sm font-medium";

            formMessage.textContent =
                "Please fill in all fields.";

            formMessage.classList.remove("hidden");

            return;

        }

        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";

        try {

            const response = await fetch("/contact", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    message
                })

            });

            const result = await response.json();

            if (result.success) {

                formMessage.className =
                    "rounded-xl px-5 py-4 mb-6 bg-green-100 text-green-700 text-sm font-medium";

                formMessage.textContent =
                    "✓ Message sent successfully! I'll get back to you soon.";

                formMessage.classList.remove("hidden");

                contactForm.reset();

            } else {

                formMessage.className =
                    "rounded-xl px-5 py-4 mb-6 bg-red-100 text-red-700 text-sm font-medium";

                formMessage.textContent =
                    result.message || "Failed to send message.";

                formMessage.classList.remove("hidden");

            }

        } catch (error) {

            console.error(error);

            formMessage.className =
                "rounded-xl px-5 py-4 mb-6 bg-red-100 text-red-700 text-sm font-medium";

            formMessage.textContent =
                "Server error. Please try again later.";

            formMessage.classList.remove("hidden");

        } finally {

            submitBtn.disabled = false;
            submitBtn.textContent = "Let's Connect";

        }

    });

}

//floating effect
const image = document.querySelector(".about-image");

image.addEventListener("mousemove",(e)=>{

    const rect = image.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 50;

    const rotateX = ((y / rect.height) - 0.5) * -50;

    image.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        scale(1.05)
    `;

    image.style.boxShadow =
        "0 45px 100px rgba(8,51,54,.25)";
});

image.addEventListener("mouseleave",()=>{

    image.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";

    image.style.boxShadow =
        "0 20px 40px rgba(0,0,0,.15), 0 35px 80px rgba(8,51,54,.12)";
});