const m=document.querySelector('.menu'),l=document.getElementById('links');
m.addEventListener('click',()=>{const o=l.classList.toggle('open');m.setAttribute('aria-expanded',o)});
l.addEventListener('click',e=>{if(e.target.tagName==='A'){l.classList.remove('open');m.setAttribute('aria-expanded','false')}});
document.querySelectorAll('.faq button').forEach(b=>b.addEventListener('click',()=>{
 const p=document.getElementById(b.getAttribute('aria-controls')),o=b.getAttribute('aria-expanded')==='true';
 b.setAttribute('aria-expanded',!o);p.hidden=o}));
