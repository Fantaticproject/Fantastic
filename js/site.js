const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
document.querySelectorAll('.logo').forEach(logo=>{logo.innerHTML='<img src="assets/logo-fantastic.png" alt="Fantastic">'});
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.textContent=open?'Fechar':'Menu';menu.setAttribute('aria-expanded',open)});
document.querySelector(`[data-nav="${document.body.dataset.page}"]`)?.classList.add('active');

const progress=document.createElement('div');progress.className='scroll-progress';document.body.prepend(progress);
const updateProgress=()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?scrollY/max:0})`};
addEventListener('scroll',updateProgress,{passive:true});updateProgress();

const selectors=['.eyebrow','h1','.lead','.actions','.proof','.orbit','.section-head','.card','.steps li','.page-section h2','.intro','.feature','.wide-card','.project','.faq details','.contact-box','.tag-row','.cta h2','.cta .button'];
const animated=[...document.querySelectorAll(selectors.join(','))],directions=['reveal-up','reveal-left','reveal-right','reveal-down'];
animated.forEach((el,index)=>{const direction=innerWidth<900?'reveal-up':directions[index%directions.length];el.classList.add('reveal',direction);el.style.setProperty('--delay',`${innerWidth<900?Math.min((index%3)*45,90):Math.min((index%5)*70,280)}ms`)});
document.body.classList.add('motion-ready');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -7%'});
animated.forEach(el=>observer.observe(el));

// Cenário vivo: formas coloridas, faixa infinita e chamada para rolar.
const energy=document.createElement('div');energy.className='energy-layer';energy.innerHTML='<i class="energy-ball ball-blue"></i><i class="energy-ball ball-purple"></i><i class="energy-ball ball-orange"></i><i class="energy-star">✦</i><i class="energy-plus">+</i>';document.body.prepend(energy);
const firstHero=document.querySelector('.hero,.page-hero');
if(firstHero){const cue=document.createElement('div');cue.className='scroll-cue';cue.innerHTML='<span>ROLE PARA EXPLORAR</span><b>↓</b>';firstHero.append(cue)}
if(document.body.dataset.page==='inicio'){const marquee=document.createElement('div');marquee.className='marquee';marquee.innerHTML='<div><span>SITES</span><b>✦</b><span>SISTEMAS</span><b>✦</b><span>AUTOMAÇÕES</span><b>✦</b><span>IDEIAS</span><b>✦</b><span>SITES</span><b>✦</b><span>SISTEMAS</span><b>✦</b><span>AUTOMAÇÕES</span><b>✦</b><span>IDEIAS</span><b>✦</b></div>';firstHero.after(marquee)}

// Letras do título aparecem em uma sequência mais teatral.
document.querySelectorAll('.hero h1,.page-hero h1').forEach(title=>{title.classList.add('title-alive');title.querySelectorAll('span').forEach(span=>span.classList.add('title-pulse'))});

const orbit=document.querySelector('.orbit');
addEventListener('pointermove',event=>{if(!orbit||innerWidth<900)return;const x=(event.clientX/innerWidth-.5)*16,y=(event.clientY/innerHeight-.5)*16;orbit.style.transform=`translate(${x}px,${y}px)`},{passive:true});
document.querySelectorAll('.card,.feature,.project').forEach(card=>{card.addEventListener('pointermove',event=>{if(innerWidth<900)return;const r=card.getBoundingClientRect(),rx=((event.clientY-r.top)/r.height-.5)*-5,ry=((event.clientX-r.left)/r.width-.5)*7;card.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`});card.addEventListener('pointerleave',()=>card.style.transform='')});

document.querySelector('[data-form]')?.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.target),text=`Olá, Fantastic! Meu nome é ${data.get('nome')}.\nQuero conversar sobre: ${data.get('tipo')}.\n\n${data.get('mensagem')}`;window.open('https://wa.me/?text='+encodeURIComponent(text),'_blank')});
