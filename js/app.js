const menuBtn=document.getElementById('menuBtn');const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
function printSection(id){
 const el=document.getElementById(id); if(!el)return;
 el.classList.add('print-target'); document.body.classList.add('printing');
 window.print();
 setTimeout(()=>{el.classList.remove('print-target');document.body.classList.remove('printing')},300);
}
window.printSection=printSection;
