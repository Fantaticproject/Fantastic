(() => {
  "use strict";
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
  // Clean brand lockup: supplied hat artwork + crisp wordmark.
  $$(".logo").forEach(el=>{
    el.setAttribute("aria-label","Fantastic!");
  });
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
  const targets=$$(".eyebrow,h1,.lead,.actions,.proof,.orbit,.section-head,.card,.steps li,.page-section>h2,.intro,.feature,.wide-card,.project,.faq details,.contact-box,.tag-row,.cta h2,.cta .button,.automation-flow").filter(el=>!el.closest(".portfolio-hero"));
  if(!reduce&&"IntersectionObserver" in window){document.body.classList.add("motion-ready");targets.forEach((el,i)=>{el.classList.add("reveal","reveal-up");el.style.setProperty("--delay",`${Math.min((i%4)*55,165)}ms`);});const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target);}}),{threshold:.08,rootMargin:"0px 0px -4%"});targets.forEach(el=>io.observe(el));}else targets.forEach(el=>el.classList.add("is-visible"));
  const progress=document.createElement("div"); progress.className="scroll-progress";document.body.prepend(progress);let ticking=false;const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?Math.max(0,Math.min(1,scrollY/max)):0})`;ticking=false};addEventListener("scroll",()=>{if(!ticking){requestAnimationFrame(update);ticking=true;}},{passive:true});update();
  // Desktop-only subtle tilt, guarded for touch/coarse pointers.
  if(matchMedia("(hover:hover) and (pointer:fine)").matches){$$(".card,.feature,.project").forEach(card=>{card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect(),rx=((e.clientY-r.top)/r.height-.5)*-3,ry=((e.clientX-r.left)/r.width-.5)*4;card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;});card.addEventListener("pointerleave",()=>card.style.transform="");});}
  $("[data-form]")?.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget),text=`Olá, Fantastic! Meu nome é ${d.get("nome")||""}.\nQuero conversar sobre: ${d.get("tipo")||"um projeto"}.\n\n${d.get("mensagem")||""}`;open("https://wa.me/?text="+encodeURIComponent(text),"_blank","noopener,noreferrer");});
})();