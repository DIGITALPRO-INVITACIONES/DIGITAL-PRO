const projects=[
['JHONATAN-Y-ROUSS','Jhonatan & Rouss','Bodas','boda.webp','#ebebe3'],
['15-ABBY','Abby Adriana','XV años','abby.webp','#ece5e0'],
['BABY-SHOWER-BIKER','Andrea & César','Baby shower','baby.webp','#e9f2ee','contain'],
['LUIS-Y-ARIANA','Luis & Ariana','Bodas',null,'#dce5e6'],
['15-NICOLE','Nicole Fernanda','XV años',null,'#f4ead7'],
['LEO-CUMPLEA-OS','Leonardo · 10 años','Cumpleaños','leo.webp','#d7ebf7','contain'],
['REVELACION-DE-GENERO','Henry & Lizeth','Revelación','revelacion.webp','#f8ebde','contain'],
['BAUTIZO-CAMILE','Camile Zendaya','Bautizos','camile.png','#f6e9eb','contain'],
['SERGIO-Y-NOHELIA','Sergio & Nohelia','Bodas',null,'#e8e6dc'],
['NOEL-Y-BIANCA','Noel & Bianca','Bodas',null,'#f0e8df'],
['WILSON-Y-YESSICA','Wilson & Yessica','Bodas',null,'#e0eadd'],
['ESTEFANIA','Estefanía Dapfne','XV años',null,'#ebe0f1'],
['IRENE-SANCHEZ','Irene Jesús · 60 años','Cumpleaños',null,'#f3dfe4'],
['AMBER','Amber · 5 años','Cumpleaños',null,'#e3ddf4'],
['GRADUACION-ESTEFANIA','Estefani','Graduación',null,'#173c40'],
['CABO-DE-A-O','Dr. Carlos Caballero','Homenajes',null,'#e7e9e7']
];
const categories=['Todas',...new Set(projects.map(p=>p[2]))];
const filters=document.querySelector('.filters'),gallery=document.querySelector('#gallery');
function render(category){
const shown=projects.filter(p=>category==='Todas'||p[2]===category);
gallery.innerHTML=shown.map(([repo,name,type,image,tone,fit])=>'<a class="project" href="https://digitalpro-invitaciones.github.io/'+repo+'/" target="_blank" rel="noopener" aria-label="Ver invitación de '+name+' (abre en otra pestaña)">'+(image?'<div class="cover '+(fit||'')+'" style="--tone:'+tone+'"><img src="assets/'+image+'" alt="" loading="lazy" width="600" height="450"></div>':'<div class="cover typographic" style="--tone:'+tone+';--text:'+(repo==='GRADUACION-ESTEFANIA'?'#d5f0d9':'#564f50')+'"><small>'+type+'</small><strong>'+name+'</strong><em>UNA INVITACIÓN ESPECIAL</em></div>')+'<div class="project-info"><small>'+type+'</small><h3>'+name+'</h3><span>Ver invitación</span></div></a>').join('');
document.querySelector('#count').textContent=shown.length+' invitaciones para explorar';
filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.textContent===category?'true':'false'));
}
categories.forEach(category=>{const b=document.createElement('button');b.type='button';b.textContent=category;b.addEventListener('click',()=>render(category));filters.append(b)});render('Todas');
