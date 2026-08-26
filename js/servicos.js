// =========================================================
// SERVIÇOS — FANTASTIC!
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

    console.log("Lenis carregado.");

} else {

    console.warn("Lenis não carregou. GSAP continuará funcionando.");

}


// =========================================================
// INTRO
// =========================================================

const introTimeline = gsap.timeline({
    defaults: {
        ease: "power3.out"
    }
});

introTimeline

    .from(".services-intro .section-label", {
        y: 25,
        opacity: 0,
        duration: 0.5
    })

    .from(".services-intro h1", {
        y: 80,
        opacity: 0,
        duration: 1
    }, "-=0.2")

    .from(".services-intro p", {
        y: 35,
        opacity: 0,
        duration: 0.8
    }, "-=0.45");


// =========================================================
// TOPOS DOS SERVIÇOS
// =========================================================

gsap.utils.toArray(".service-top").forEach((top) => {

    const number = top.querySelector(".service-number");
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
            x: -60,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform"
        });

    }

    if (label) {

        tl.from(label, {
            y: 20,
            opacity: 0,
            duration: 0.45,
            ease: "power3.out",
            clearProps: "transform"
        }, "-=0.35");

    }

    if (title) {

        tl.from(title, {
            y: 55,
            opacity: 0,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "transform"
        }, "-=0.25");

    }

});


// =========================================================
// SHOWCASE PRINCIPAL
// =========================================================

const serviceShowcase =
    document.querySelector(".service-showcase");

if (serviceShowcase) {

    const text =
        serviceShowcase.querySelector(".showcase-text");

    const mockup =
        serviceShowcase.querySelector(".mockup");

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: serviceShowcase,
            start: "top 82%",
            once: true
        }

    });

    if (text) {

        tl.from(text, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform"
        });

    }

    if (mockup) {

        tl.from(mockup, {
            x: 70,
            rotateY: -12,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            clearProps: "transform"
        }, "-=0.55");

    }

}


// =========================================================
// TÍTULOS DE BLOCOS
// =========================================================

gsap.utils.toArray(
    ".feature-heading, .examples-heading, .custom-system, .process-title"
).forEach((element) => {

    gsap.from(element, {

        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true
        },

        y: 45,
        opacity: 0,
        duration: 0.8,

        ease: "power3.out",

        clearProps: "transform"

    });

});


// =========================================================
// FEATURES
// =========================================================

const featureList =
    document.querySelector(".feature-list");

if (featureList) {

    gsap.from(
        featureList.querySelectorAll("li"),
        {

            scrollTrigger: {
                trigger: featureList,
                start: "top 85%",
                once: true
            },

            y: 35,
            opacity: 0,

            duration: 0.55,

            stagger: 0.07,

            ease: "power3.out",

            clearProps: "transform"

        }
    );

}


// =========================================================
// EXEMPLOS DE SITES
// =========================================================

gsap.utils.toArray(".visual-example").forEach((example) => {

    const content =
        example.querySelector(".example-content");

    const card =
        example.querySelector(".example-card");

    const reverse =
        example.classList.contains("reverse");

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: example,
            start: "top 82%",
            once: true
        }

    });

    if (content) {

        tl.from(content, {
            x: reverse ? 60 : -60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform"
        });

    }

    if (card) {

        tl.from(card, {
            x: reverse ? -60 : 60,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform"
        }, "-=0.55");

    }

});


// =========================================================
// MENSAGEM FINAL DOS SITES
// =========================================================

const serviceMessage =
    document.querySelector(".service-message");

if (serviceMessage) {

    gsap.from(serviceMessage, {

        scrollTrigger: {
            trigger: serviceMessage,
            start: "top 83%",
            once: true
        },

        y: 55,
        scale: 0.97,
        opacity: 0,

        duration: 0.9,

        ease: "power3.out",

        clearProps: "transform"

    });

}


// =========================================================
// PROJETOS PESSOAIS
// =========================================================

const personalIntro =
    document.querySelector(".personal-intro");

if (personalIntro) {

    gsap.from(personalIntro, {

        scrollTrigger: {
            trigger: personalIntro,
            start: "top 85%",
            once: true
        },

        y: 40,
        opacity: 0,

        duration: 0.75,

        ease: "power3.out",

        clearProps: "transform"

    });

}


const personalGrid =
    document.querySelector(".personal-grid");

if (personalGrid) {

    gsap.from(
        personalGrid.querySelectorAll(".personal-card"),
        {

            scrollTrigger: {
                trigger: personalGrid,
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


const personalEnding =
    document.querySelector(".personal-ending");

if (personalEnding) {

    gsap.from(personalEnding, {

        scrollTrigger: {
            trigger: personalEnding,
            start: "top 85%",
            once: true
        },

        y: 40,
        opacity: 0,

        duration: 0.8,

        ease: "power3.out",

        clearProps: "transform"

    });

}


// =========================================================
// SISTEMAS — INTRO
// =========================================================

const systemsIntro =
    document.querySelector(".systems-intro");

if (systemsIntro) {

    gsap.from(systemsIntro, {

        scrollTrigger: {
            trigger: systemsIntro,
            start: "top 85%",
            once: true
        },

        y: 45,
        opacity: 0,

        duration: 0.8,

        ease: "power3.out",

        clearProps: "transform"

    });

}


// =========================================================
// SISTEMAS — PROBLEMA
// =========================================================

const problemBlock =
    document.querySelector(".problem-block");

if (problemBlock) {

    gsap.from(problemBlock, {

        scrollTrigger: {
            trigger: problemBlock,
            start: "top 82%",
            once: true
        },

        y: 50,
        opacity: 0,

        duration: 0.8,

        ease: "power3.out",

        clearProps: "transform"

    });


    gsap.from(
        problemBlock.querySelectorAll("blockquote"),
        {

            scrollTrigger: {
                trigger: problemBlock,
                start: "top 72%",
                once: true
            },

            y: 25,
            opacity: 0,

            duration: 0.5,

            stagger: 0.08,

            ease: "power2.out",

            clearProps: "transform"

        }
    );

}


// =========================================================
// PROCESSO DOS SISTEMAS
// =========================================================

const processVisual =
    document.querySelector(".process-visual");

if (processVisual) {

    gsap.from(
        processVisual.querySelectorAll(".process-card"),
        {

            scrollTrigger: {
                trigger: processVisual,
                start: "top 80%",
                once: true
            },

            y: 45,
            opacity: 0,

            duration: 0.6,

            stagger: 0.12,

            ease: "power3.out",

            clearProps: "transform"

        }
    );

}


// =========================================================
// CARDS DOS SISTEMAS
// =========================================================

const systemsGrid =
    document.querySelector(".systems-grid");

if (systemsGrid) {

    gsap.from(
        systemsGrid.querySelectorAll(".system-card"),
        {

            scrollTrigger: {
                trigger: systemsGrid,
                start: "top 85%",
                once: true
            },

            y: 45,
            opacity: 0,

            duration: 0.6,

            stagger: 0.08,

            ease: "power3.out",

            clearProps: "transform"

        }
    );

}


// =========================================================
// FINAL SISTEMAS
// =========================================================

const systemEnding =
    document.querySelector(".system-ending");

if (systemEnding) {

    gsap.from(systemEnding, {

        scrollTrigger: {
            trigger: systemEnding,
            start: "top 82%",
            once: true
        },

        y: 55,
        scale: 0.97,
        opacity: 0,

        duration: 0.9,

        ease: "power3.out",

        clearProps: "transform"

    });

}


// =========================================================
// EXCEL INTRO
// =========================================================

const excelIntro =
    document.querySelector(".excel-intro");

if (excelIntro) {

    gsap.from(excelIntro, {

        scrollTrigger: {
            trigger: excelIntro,
            start: "top 84%",
            once: true
        },

        y: 50,
        opacity: 0,

        duration: 0.8,

        ease: "power3.out",

        clearProps: "transform"

    });

}


// =========================================================
// GASPAR
// =========================================================

const gasparIntroduction =
    document.querySelector(".gaspar-introduction");

if (gasparIntroduction) {

    const content =
        gasparIntroduction.querySelector(".gaspar-content");

    const screen =
        gasparIntroduction.querySelector(".gaspar-screen");

    const tasks =
        gasparIntroduction.querySelectorAll(".gaspar-task");

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: gasparIntroduction,
            start: "top 82%",
            once: true
        }

    });

    if (content) {

        tl.from(content, {
            x: -55,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform"
        });

    }

    if (screen) {

        tl.from(screen, {
            x: 65,
            opacity: 0,
            scale: 0.95,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "transform"
        }, "-=0.55");

    }

    if (tasks.length) {

        tl.from(tasks, {
            x: 20,
            opacity: 0,
            duration: 0.35,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "transform"
        }, "-=0.25");

    }

}


// =========================================================
// CHECKLIST GASPAR
// =========================================================

const checkList =
    document.querySelector(".check-list");

if (checkList) {

    gsap.from(
        checkList.querySelectorAll("div"),
        {

            scrollTrigger: {
                trigger: checkList,
                start: "top 85%",
                once: true
            },

            y: 35,
            opacity: 0,

            duration: 0.55,

            stagger: 0.08,

            ease: "power3.out",

            clearProps: "transform"

        }
    );

}


// =========================================================
// CARDS AUTOMAÇÃO
// =========================================================

const automationGrid =
    document.querySelector(".automation-grid");

if (automationGrid) {

    gsap.from(
        automationGrid.querySelectorAll(".automation-card"),
        {

            scrollTrigger: {
                trigger: automationGrid,
                start: "top 85%",
                once: true
            },

            y: 45,
            opacity: 0,

            duration: 0.6,

            stagger: 0.1,

            ease: "power3.out",

            clearProps: "transform"

        }
    );

}


// =========================================================
// VISITA TÉCNICA
// =========================================================

const technicalVisit =
    document.querySelector(".technical-visit");

if (technicalVisit) {

    const content =
        technicalVisit.querySelector(".visit-content");

    const visual =
        technicalVisit.querySelector(".visit-card");

    const tl = gsap.timeline({

        scrollTrigger: {
            trigger: technicalVisit,
            start: "top 82%",
            once: true
        }

    });

    if (content) {

        tl.from(content, {
            x: -55,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform"
        });

    }

    if (visual) {

        tl.from(visual, {
            x: 55,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform"
        }, "-=0.5");

    }

}


// =========================================================
// FLUXO GASPAR
// =========================================================

const flow =
    document.querySelector(".flow");

if (flow) {

    gsap.from(
        flow.querySelectorAll("div"),
        {

            scrollTrigger: {
                trigger: flow,
                start: "top 85%",
                once: true
            },

            y: 40,
            opacity: 0,

            duration: 0.5,

            stagger: 0.1,

            ease: "power3.out",

            clearProps: "transform"

        }
    );

}


// =========================================================
// FINAL GASPAR
// =========================================================

const gasparEnding =
    document.querySelector(".gaspar-ending");

if (gasparEnding) {

    gsap.from(gasparEnding, {

        scrollTrigger: {
            trigger: gasparEnding,
            start: "top 82%",
            once: true
        },

        y: 55,
        opacity: 0,

        duration: 0.9,

        ease: "power3.out",

        clearProps: "transform"

    });

}


// =========================================================
// CTA FINAL
// =========================================================

const finalSection =
    document.querySelector(".services-final");

if (finalSection) {

    gsap.from(
        finalSection.querySelectorAll(
            ".section-label, h2, p, .cta-button"
        ),
        {

            scrollTrigger: {
                trigger: finalSection,
                start: "top 82%",
                once: true
            },

            y: 45,
            opacity: 0,

            duration: 0.65,

            stagger: 0.1,

            ease: "power3.out",

            clearProps: "transform"

        }
    );

}


// =========================================================
// FINALIZAÇÃO
// =========================================================

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});