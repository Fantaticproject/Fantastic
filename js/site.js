const menu = document.querySelector(".menu"),
  nav = document.querySelector(".nav");
if (menu && nav) {
  nav.id ||= "main-navigation";
  menu.setAttribute("aria-controls", nav.id);
  menu.setAttribute("aria-expanded", "false");
}
document.querySelectorAll(".logo").forEach((logo) => {
  logo.innerHTML = '<img src="assets/logo-fantastic.png" alt="Fantastic">';
});
menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.textContent = open ? "Fechar" : "Menu";
  menu.setAttribute("aria-expanded", open);
  document.body.classList.toggle("menu-open", open);
});
nav?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menu.textContent = "Menu";
    menu.setAttribute("aria-expanded", "false");
  }),
);
addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !nav?.classList.contains("open")) return;
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menu.textContent = "Menu";
  menu.setAttribute("aria-expanded", "false");
  menu.focus();
});
document
  .querySelector(`[data-nav="${document.body.dataset.page}"]`)
  ?.classList.add("active");

const requestedType = new URLSearchParams(location.search).get("tipo");
const typeSelect = document.querySelector("#tipo");
if (
  requestedType &&
  typeSelect &&
  [...typeSelect.options].some((option) => option.value === requestedType)
) {
  typeSelect.value = requestedType;
}

const progress = document.createElement("div");
progress.className = "scroll-progress";
document.body.prepend(progress);
const updateProgress = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
};
addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const selectors = [
  ".eyebrow",
  "h1",
  ".lead",
  ".actions",
  ".proof",
  ".orbit",
  ".section-head",
  ".card",
  ".steps li",
  ".page-section h2",
  ".intro",
  ".feature",
  ".wide-card",
  ".project",
  ".faq details",
  ".contact-box",
  ".tag-row",
  ".cta h2",
  ".cta .button",
];
const animated = [...document.querySelectorAll(selectors.join(","))],
  directions = ["reveal-up", "reveal-left", "reveal-right", "reveal-down"];
animated.forEach((el, index) => {
  const direction =
    innerWidth < 900 ? "reveal-up" : directions[index % directions.length];
  el.classList.add("reveal", direction);
  el.style.setProperty(
    "--delay",
    `${innerWidth < 900 ? Math.min((index % 3) * 45, 90) : Math.min((index % 5) * 70, 280)}ms`,
  );
});
document.body.classList.add("motion-ready");
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.12, rootMargin: "0px 0px -7%" },
);
animated.forEach((el) => observer.observe(el));

// Cenário vivo: formas coloridas, faixa infinita e chamada para rolar.
const energy = document.createElement("div");
energy.className = "energy-layer";
energy.innerHTML =
  '<i class="energy-ball ball-blue"></i><i class="energy-ball ball-purple"></i><i class="energy-ball ball-orange"></i><i class="energy-star">✦</i><i class="energy-plus">+</i>';
document.body.prepend(energy);
const firstHero = document.querySelector(".hero,.page-hero");
if (firstHero) {
  const cue = document.createElement("div");
  cue.className = "scroll-cue";
  cue.innerHTML = "<span>ROLE PARA EXPLORAR</span><b>↓</b>";
  firstHero.append(cue);
}
if (document.body.dataset.page === "inicio") {
  const marquee = document.createElement("div");
  marquee.className = "marquee";
  marquee.innerHTML =
    "<div><span>SITES</span><b>✦</b><span>SISTEMAS</span><b>✦</b><span>AUTOMAÇÕES</span><b>✦</b><span>IDEIAS</span><b>✦</b><span>SITES</span><b>✦</b><span>SISTEMAS</span><b>✦</b><span>AUTOMAÇÕES</span><b>✦</b><span>IDEIAS</span><b>✦</b></div>";
  firstHero.after(marquee);
}

// Letras do título aparecem em uma sequência mais teatral.
document.querySelectorAll(".hero h1,.page-hero h1").forEach((title) => {
  title.classList.add("title-alive");
  title
    .querySelectorAll("span")
    .forEach((span) => span.classList.add("title-pulse"));
});

const orbit = document.querySelector(".orbit");
addEventListener(
  "pointermove",
  (event) => {
    if (!orbit || innerWidth < 900) return;
    const x = (event.clientX / innerWidth - 0.5) * 16,
      y = (event.clientY / innerHeight - 0.5) * 16;
    orbit.style.transform = `translate(${x}px,${y}px)`;
  },
  { passive: true },
);
document.querySelectorAll(".card,.feature,.project").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (innerWidth < 900) return;
    const r = card.getBoundingClientRect(),
      rx = ((event.clientY - r.top) / r.height - 0.5) * -5,
      ry = ((event.clientX - r.left) / r.width - 0.5) * 7;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
  });
  card.addEventListener("pointerleave", () => (card.style.transform = ""));
});

document.querySelector("[data-form]")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target),
    text = `Olá, Fantastic! Meu nome é ${data.get("nome")}.\nQuero conversar sobre: ${data.get("tipo")}.\n\n${data.get("mensagem")}`;
  window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
});

// =========================================================
// INTERACAO DA PROVA VISUAL DE AUTOMACAO
// A estrutura do dashboard esta em automacoes.html.
// =========================================================
const automationDemo = document.querySelector("[data-automation-demo]");

if (automationDemo) {
  const periods = {
    today: {
      tasks: "248",
      hours: "12,4h",
      success: "98,7%",
      total: "248 execuções",
      points: [132, 118, 126, 78, 92, 50, 68],
      steps: [100, 98, 94],
    },
    week: {
      tasks: "1.842",
      hours: "92h",
      success: "99,1%",
      total: "1.842 execuções",
      points: [140, 104, 116, 62, 84, 38, 54],
      steps: [100, 99, 97],
    },
    month: {
      tasks: "7.690",
      hours: "384h",
      success: "99,4%",
      total: "7.690 execuções",
      points: [126, 96, 108, 72, 58, 46, 32],
      steps: [100, 99, 98],
    },
  };

  const xPositions = [20, 105, 192, 278, 365, 452, 540];
  const chartLine = automationDemo.querySelector("[data-chart-line]");
  const chartArea = automationDemo.querySelector("[data-chart-area]");
  const chartDots = automationDemo.querySelector("[data-chart-dots]");
  const runButton = automationDemo.querySelector("[data-run-automation]");
  const beforePanel = automationDemo.querySelector("[data-automation-before]");
  const dashboardPanel = automationDemo.querySelector(
    "[data-automation-after]",
  );
  const gasparButton = automationDemo.querySelector("[data-gaspar-trigger]");
  const showBeforeButton = automationDemo.querySelector("[data-show-before]");
  const processingLabel = automationDemo.querySelector(
    "[data-processing-label]",
  );

  function renderDots(points) {
    chartDots.innerHTML = points
      .map((y, index) => `<circle cx="${xPositions[index]}" cy="${y}" r="5"/>`)
      .join("");
  }

  function updateDashboard(periodKey) {
    const data = periods[periodKey];
    const linePoints = data.points
      .map((y, index) => `${xPositions[index]},${y}`)
      .join(" ");
    const areaPoints = data.points
      .map((y, index) => `${xPositions[index]},${y}`)
      .join(" L");

    automationDemo.querySelector('[data-kpi="tasks"]').textContent = data.tasks;
    automationDemo.querySelector('[data-kpi="hours"]').textContent = data.hours;
    automationDemo.querySelector('[data-kpi="success"]').textContent =
      data.success;
    automationDemo.querySelector("[data-chart-total]").textContent = data.total;

    chartLine.setAttribute("points", linePoints);
    chartArea.setAttribute("d", `M20 155 L${areaPoints} L540 155 Z`);
    renderDots(data.points);

    data.steps.forEach((value, index) => {
      automationDemo.querySelector(`[data-step-value="${index}"]`).textContent =
        `${value}%`;
      automationDemo.querySelector(`[data-step-bar="${index}"]`).style.width =
        `${value}%`;
    });
  }

  automationDemo.querySelectorAll("[data-period]").forEach((button) => {
    button.addEventListener("click", () => {
      automationDemo.querySelectorAll("[data-period]").forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", isActive);
      });
      updateDashboard(button.dataset.period);
    });
  });

  gasparButton.addEventListener("click", () => {
    beforePanel.classList.add("is-processing");
    gasparButton.disabled = true;
    processingLabel.textContent = "Lendo a planilha...";

    setTimeout(() => {
      processingLabel.textContent = "Validando informações...";
    }, 520);
    setTimeout(() => {
      processingLabel.textContent = "Criando indicadores...";
    }, 1020);
    setTimeout(() => {
      beforePanel.hidden = true;
      beforePanel.classList.remove("is-processing");
      dashboardPanel.hidden = false;
      dashboardPanel.classList.add("is-revealed");
      gasparButton.disabled = false;
      updateDashboard("today");
    }, 1700);
  });

  showBeforeButton.addEventListener("click", () => {
    dashboardPanel.hidden = true;
    dashboardPanel.classList.remove("is-revealed");
    beforePanel.hidden = false;
    processingLabel.textContent = "Lendo a planilha...";
  });

  runButton.addEventListener("click", () => {
    dashboardPanel.classList.add("is-running");
    runButton.disabled = true;
    runButton.innerHTML = "<span>●</span> Processando dados...";
    automationDemo.querySelector("[data-run-label]").textContent =
      "Em execução";

    automationDemo
      .querySelectorAll("[data-step-bar]")
      .forEach((bar) => (bar.style.width = "12%"));
    automationDemo
      .querySelectorAll("[data-step-value]")
      .forEach((value) => (value.textContent = "..."));

    setTimeout(() => {
      const selectedPeriod =
        automationDemo.querySelector("[data-period].active")?.dataset.period ||
        "today";
      updateDashboard(selectedPeriod);
      dashboardPanel.classList.remove("is-running");
      runButton.disabled = false;
      runButton.innerHTML = "<span>✓</span> Automação concluída";
      automationDemo.querySelector("[data-run-label]").textContent =
        "Concluído";
      automationDemo.querySelector("[data-feed-time]").textContent =
        "Agora mesmo";

      setTimeout(() => {
        runButton.innerHTML = "<span>▶</span> Executar novamente";
      }, 1800);
    }, 1300);
  });

  renderDots(periods.today.points);
}
