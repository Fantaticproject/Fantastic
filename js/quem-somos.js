// =========================================================
// QUEM SOMOS — FANTASTIC!
// LENIS + GSAP + SCROLLTRIGGER
// =========================================================


// =========================================================
// GSAP
// =========================================================

gsap.registerPlugin(ScrollTrigger);


// =========================================================
// LENIS
// =========================================================

let lenis = null;

if (typeof Lenis !== "undefined") {

    lenis = new Lenis({
        smoothWheel: true
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    console.log("Lenis carregado — Quem Somos.");
}


// =========================================================
// LINKS INTERNOS + LENIS
// =========================================================

document
    .querySelectorAll(
        ".page-bookmarks a, .hero-scroll, .orbit-item"
    )
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (
                !targetId ||
                !targetId.startsWith("#")
            ) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            if (lenis) {

                event.preventDefault();

                lenis.scrollTo(target, {
                    offset: -70,
                    duration: 1.1
                });

            }

        });

    });


// =========================================================
// HERO
// =========================================================

const heroTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});

heroTimeline

    .from(".hero .section-label", {
        y: 25,
        opacity: 0,
        duration: 0.5
    })

    .from(".hero h1", {
        y: 85,
        opacity: 0,
        duration: 1
    }, "-=0.2")

    .from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 0.8
    }, "-=0.5")

    .from(".hero-scroll", {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, "-=0.35")

    .from(".fantastic-orbit", {
        scale: 0.8,
        rotate: -8,
        opacity: 0,
        duration: 1
    }, "-=0.85")

    .from(".orbit-item", {
        scale: 0.7,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        clearProps: "transform"
    }, "-=0.5");


// =========================================================
// ORBIT — MOVIMENTO SUAVE
// =========================================================

gsap.to(".fantastic-orbit", {

    rotate: 8,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5
    }

});


// =========================================================
// DECORAÇÕES DO HERO
// =========================================================

gsap.to(".decoration-blue", {

    y: 120,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5
    }

});


gsap.to(".decoration-purple", {

    y: -90,

    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1.5
    }

});


// =========================================================
// TOPOS DAS SEÇÕES
// =========================================================

gsap
    .utils
    .toArray(".section-top")
    .forEach((top) => {

        const number = top.querySelector(".section-number");
        const label = top.querySelector(".section-label");
        const title = top.querySelector("h2");

        const tl = gsap.timeline({

            scrollTrigger: {
                trigger: top,
                start: "top 82%",
                once: true
            }

        });

        if (number) {

            tl.from(number, {
                x: -55,
                opacity: 0,
                duration: 0.7,
                clearProps: "transform"
            });

        }

        if (label) {

            tl.from(label, {
                y: 20,
                opacity: 0,
                duration: 0.45,
                clearProps: "transform"
            }, "-=0.35");

        }

        if (title) {

            tl.from(title, {
                y: 55,
                opacity: 0,
                duration: 0.85,
                clearProps: "transform"
            }, "-=0.25");

        }

    });


// =========================================================
// SHOWCASE DO SITE
// =========================================================

const siteShowcase = document.querySelector(".site-showcase");

if (siteShowcase) {

    const text = siteShowcase.querySelector(".site-showcase-text");

    const browser = siteShowcase.querySelector(".browser-mockup");

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: siteShowcase,
            start: "top 82%",
            once: true
        }

    });

    tl.from(text, {
        x: -55,
        opacity: 0,
        duration: 0.8,
        clearProps: "transform"
    });

    tl.from(browser, {
        x: 70,
        rotateY: -10,
        opacity: 0,
        duration: 0.9,
        clearProps: "transform"
    }, "-=0.55");

}


// =========================================================
// EMPRESAS — INTRO
// =========================================================

gsap.from(".business-intro", {

    scrollTrigger: {
        trigger: ".business-intro",
        start: "top 85%",
        once: true
    },

    y: 45,
    opacity: 0,
    duration: 0.8,
    clearProps: "transform"

});


// =========================================================
// EMPRESAS — CARDS
// =========================================================

const businessGrid = document.querySelector(".business-grid");

if (businessGrid) {

    gsap.from(
        businessGrid.querySelectorAll(".business-card"),
        {

            scrollTrigger: {
                trigger: businessGrid,
                start: "top 85%",
                once: true
            },

            y: 45,
            opacity: 0,
            duration: 0.6,
            stagger: 0.07,
            ease: "power3.out",
            clearProps: "transform"

        }
    );

}


// =========================================================
// FECHAMENTO EMPRESAS
// =========================================================

gsap.from(".business-closing", {

    scrollTrigger: {
        trigger: ".business-closing",
        start: "top 85%",
        once: true
    },

    y: 50,
    scale: 0.98,
    opacity: 0,
    duration: 0.8,
    clearProps: "transform"

});


// =========================================================
// SISTEMAS
// =========================================================

const systemsLayout = document.querySelector(".systems-layout");

if (systemsLayout) {

    const text = systemsLayout.querySelector(".systems-text");

    const visual = systemsLayout.querySelector(".system-window");

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: systemsLayout,
            start: "top 82%",
            once: true
        }

    });

    tl.from(text, {
        x: -55,
        opacity: 0,
        duration: 0.8,
        clearProps: "transform"
    });

    tl.from(visual, {
        x: 65,
        opacity: 0,
        duration: 0.9,
        clearProps: "transform"
    }, "-=0.55");

}


// =========================================================
// DASHBOARD
// =========================================================

const dashboardGrid = document.querySelector(".dashboard-grid");

if (dashboardGrid) {

    gsap.from(
        dashboardGrid.querySelectorAll("div"),
        {

            scrollTrigger: {
                trigger: dashboardGrid,
                start: "top 90%",
                once: true
            },

            y: 25,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            clearProps: "transform"

        }
    );

}


// =========================================================
// ADAPTAÇÃO
// =========================================================

gsap.from(".adaptation-box", {

    scrollTrigger: {
        trigger: ".adaptation-box",
        start: "top 82%",
        once: true
    },

    y: 55,
    scale: 0.97,
    opacity: 0,
    duration: 0.85,
    clearProps: "transform"

});


gsap.from(".systems-ending", {

    scrollTrigger: {
        trigger: ".systems-ending",
        start: "top 86%",
        once: true
    },

    y: 35,
    opacity: 0,
    duration: 0.7,
    clearProps: "transform"

});


// =========================================================
// PROJETOS
// =========================================================

gsap.from(".ideas-intro", {

    scrollTrigger: {
        trigger: ".ideas-intro",
        start: "top 85%",
        once: true
    },

    y: 35,
    opacity: 0,
    duration: 0.7,
    clearProps: "transform"

});


const ideasGrid = document.querySelector(".ideas-grid");

if (ideasGrid) {

    gsap.from(
        ideasGrid.querySelectorAll(".idea-card"),
        {

            scrollTrigger: {
                trigger: ideasGrid,
                start: "top 84%",
                once: true
            },

            y: 55,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform"

        }
    );

}


// =========================================================
// PREVIEWS DOS PROJETOS
// =========================================================

gsap
    .utils
    .toArray(".idea-preview")
    .forEach((preview) => {

        gsap.from(
            preview.children,
            {

                scrollTrigger: {
                    trigger: preview,
                    start: "top 90%",
                    once: true
                },

                scale: 0.8,
                opacity: 0,
                duration: 0.4,
                stagger: 0.08,
                clearProps: "transform"

            }
        );

    });


// =========================================================
// FRASE PROJETOS
// =========================================================

gsap.from(".idea-statement", {

    scrollTrigger: {
        trigger: ".idea-statement",
        start: "top 85%",
        once: true
    },

    y: 45,
    opacity: 0,
    duration: 0.8,
    clearProps: "transform"

});


// =========================================================
// EXCEL
// =========================================================

const excelLayout = document.querySelector(".excel-layout");

if (excelLayout) {

    const content = excelLayout.querySelector(".excel-content");

    const panel = excelLayout.querySelector(".gaspar-panel");

    const tasks = excelLayout.querySelectorAll(".gaspar-task");

    const progress = excelLayout.querySelector(".gaspar-progress div");

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: excelLayout,
            start: "top 82%",
            once: true
        }

    });

    tl.from(content, {
        x: -55,
        opacity: 0,
        duration: 0.8,
        clearProps: "transform"
    });

    tl.from(panel, {
        x: 70,
        scale: 0.96,
        opacity: 0,
        duration: 0.9,
        clearProps: "transform"
    }, "-=0.55");

    tl.from(progress, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.8,
        ease: "power2.inOut",
        clearProps: "transform"
    }, "-=0.35");

    tl.from(tasks, {
        x: 20,
        opacity: 0,
        duration: 0.35,
        stagger: 0.12,
        clearProps: "transform"
    }, "-=0.4");

}


// =========================================================
// FINAL
// =========================================================

const finalSection = document.querySelector(".final-section");

if (finalSection) {

    gsap.from(
        finalSection.querySelectorAll(
            ".final-brand, h2, p, .final-actions"
        ),
        {

            scrollTrigger: {
                trigger: finalSection,
                start: "top 82%",
                once: true
            },

            y: 50,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            clearProps: "transform"

        }
    );

}


// =========================================================
// BANDEIRINHAS — SEÇÃO ATIVA
// =========================================================

document
    .querySelectorAll(
        "#sites, #negocios, #sistemas, #projetos, #excel"
    )
    .forEach((section) => {

        ScrollTrigger.create({

            trigger: section,

            start: "top 45%",

            end: "bottom 45%",

            onEnter: () => {
                activateBookmark(section.id);
            },

            onEnterBack: () => {
                activateBookmark(section.id);
            }

        });

    });


function activateBookmark(sectionId) {

    document
        .querySelectorAll(".bookmark")
        .forEach((bookmark) => {

            bookmark.classList.toggle(
                "active",
                bookmark.dataset.section === sectionId
            );

        });

}


// =========================================================
// REFRESH
// =========================================================

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});