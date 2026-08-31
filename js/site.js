(() => {
  "use strict";
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
  // Crisp vector logo; text remains in HTML as no-JS fallback.
  $$(".logo").forEach(el=>{el.innerHTML='<img src="assets/logo-fantastic.svg" alt="Fantastic!" width="560" height="120">';});
  const menu=$(".menu"), nav=$(".nav");
  if(menu&&nav){
    const setMenu=open=>{nav.classList.toggle("open",open);document.body.classList.toggle("menu-open",open);menu.setAttribute("aria-expanded",String(open));menu.textContent=open?"Fechar":"Menu";};
    menu.setAttribute("aria-expanded","false"); menu.addEventListener("click",()=>setMenu(!nav.classList.contains("open")));
    $$("a",nav).forEach(a=>a.addEventListener("click",()=>setMenu(false)));
    addEventListener("keydown",e=>{if(e.key==="Escape"&&nav.classList.contains("open")){setMenu(false);menu.focus();}});
    addEventListener("resize",()=>{if(innerWidth>767&&nav.classList.contains("open"))setMenu(false);},{passive:true});
  }
  const page=document.body.dataset.page; if(page) $(`[data-nav="${page}"]`)?.classList.add("active");
  const type=new URLSearchParams(location.search).get("tipo"), select=$("#tipo"); if(type&&select){const opt=$$("option",select).find(o=>o.value.toLowerCase()===type.toLowerCase()||o.textContent.toLowerCase().includes(type.toLowerCase())); if(opt)select.value=opt.value;}
  // Lightweight reveal animation works on desktop AND mobile; no content starts hidden without JS.
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets=$$(".eyebrow,h1,.lead,.actions,.proof,.orbit,.section-head,.card,.steps li,.page-section>h2,.intro,.feature,.wide-card,.project,.faq details,.contact-box,.tag-row,.cta h2,.cta .button,.automation-flow");
  if(!reduce&&"IntersectionObserver" in window){document.body.classList.add("motion-ready");targets.forEach((el,i)=>{el.classList.add("reveal","reveal-up");el.style.setProperty("--delay",`${Math.min((i%4)*55,165)}ms`);});const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target);}}),{threshold:.08,rootMargin:"0px 0px -4%"});targets.forEach(el=>io.observe(el));}else targets.forEach(el=>el.classList.add("is-visible"));
  const progress=document.createElement("div"); progress.className="scroll-progress";document.body.prepend(progress);let ticking=false;const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?Math.max(0,Math.min(1,scrollY/max)):0})`;ticking=false};addEventListener("scroll",()=>{if(!ticking){requestAnimationFrame(update);ticking=true;}},{passive:true});update();
  // Desktop-only subtle tilt, guarded for touch/coarse pointers.
  if(matchMedia("(hover:hover) and (pointer:fine)").matches){$$(".card,.feature,.project").forEach(card=>{card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect(),rx=((e.clientY-r.top)/r.height-.5)*-3,ry=((e.clientX-r.left)/r.width-.5)*4;card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;});card.addEventListener("pointerleave",()=>card.style.transform="");});}
  $("[data-form]")?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget),text=`Olá, Fantastic! Meu nome é ${d.get("nome")||""}.\nQuero conversar sobre: ${d.get("tipo")||"um projeto"}.\n\n${d.get("mensagem")||""}`;open("https://wa.me/?text="+encodeURIComponent(text),"_blank","noopener,noreferrer");});
  // Gaspar: file/excel automation simulation.
  const demo=$("[data-file-automation]"); if(demo){const run=$("[data-file-run]",demo),steps=$$("[data-step]",demo),out=$("[data-file-output]",demo),status=$("[data-file-status]",demo);let running=false;const wait=ms=>new Promise(r=>setTimeout(r,ms));run?.addEventListener("click",async()=>{if(running)return;running=true;run.disabled=true;out.hidden=true;steps.forEach(s=>{s.classList.remove("running","done");$("em",s).textContent="Aguardando";});for(let i=0;i<steps.length;i++){const s=steps[i];s.classList.add("running");$("em",s).textContent=["Validando…","Consolidando…","Organizando…","Gerando…"][i];status.textContent=["Lendo 12 arquivos…","Unindo planilhas…","Renomeando anexos…","Criando entregáveis…"][i];await wait(650);s.classList.remove("running");s.classList.add("done");$("em",s).textContent="Concluído";}out.hidden=false;status.textContent="Concluído sem intervenção manual";run.textContent="Executar novamente";run.disabled=false;running=false;out.scrollIntoView({behavior:reduce?"auto":"smooth",block:"nearest"});});}
})();