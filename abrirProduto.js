// Clique na foto do produto -> abre produto.html
(function(){
  const s=document.createElement("style");
  s.textContent=".ph{cursor:pointer}.ph img{transition:transform .35s}.ph:hover img{transform:scale(1.03)}.ph{position:relative}.cn{position:absolute;top:50%;transform:translateY(-50%);z-index:4;width:34px;height:34px;border:0;border-radius:50%;background:rgba(255,255,255,.88);color:#222;font-size:1.3rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0 0 2px;opacity:0;transition:opacity .2s}.cn.pv{left:8px}.cn.nx{right:8px}.ph:hover .cn,.cn:focus-visible{opacity:1}@media(hover:none){.cn{opacity:1}}.cc{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);z-index:4;background:rgba(0,0,0,.45);color:#fff;font-size:.7rem;padding:2px 9px;border-radius:99px;pointer-events:none}";
  document.head.appendChild(s);
  function imagens(){
    if(typeof IMG!=="undefined")return IMG;
    if(typeof IMAGENS!=="undefined")return IMAGENS.produtos;
    return {};
  }
  // ---- carrossel nos cards (sem abrir o produto) ----
  function lista(card){
    const fo=(typeof FOTOS!=="undefined"&&FOTOS[+card.dataset.id])||{};
    let cor=card.dataset.cor;
    if(cor===undefined){const sel=card.querySelector('.sw[aria-pressed="true"]');cor=sel?(sel.getAttribute("aria-label")||"").replace("Cor ",""):"";}
    const daCor=(fo.cores&&fo.cores[cor])||[];
    return daCor.length?daCor:(fo.padrao||[]);
  }
  function setas(card){
    const ph=card.querySelector(".ph");if(!ph)return;
    const n=lista(card).length;
    ph.querySelectorAll(".cn,.cc").forEach(b=>b.style.display=n>1?"":"none");
    const c=ph.querySelector(".cc");if(c)c.textContent=((+card.dataset.fi||0)+1)+" / "+n;
  }
  function mostrar(card){
    const l=lista(card);if(!l.length)return;
    let i=+card.dataset.fi||0;if(i>=l.length||i<0)i=0;card.dataset.fi=i;
    const fo=FOTOS[+card.dataset.id]||{},padrao=(fo.padrao&&fo.padrao[0])||"";
    const ph=card.querySelector(".ph");
    let im=ph.querySelector("img.art");
    if(!im){ // a foto anterior falhou e virou ilustração: recria o <img>
      const svg=ph.querySelector("svg.art");
      im=document.createElement("img");
      im.className="art";im.alt=card.querySelector(".nm")?card.querySelector(".nm").textContent:"";
      im.style.objectFit="cover";
      if(svg)svg.replaceWith(im);else ph.insertBefore(im,ph.firstChild);
    }
    im.onerror=function(){im.onerror=null;if(padrao&&im.getAttribute("src")!==padrao)im.src=padrao;};
    im.style.display="";
    im.src=l[i];
    setas(card);
  }
  function mover(card,d){
    const n=lista(card).length;if(n<2)return;
    card.dataset.fi=((+card.dataset.fi||0)+d+n)%n;
    mostrar(card);
  }
  function injeta(){
    document.querySelectorAll(".card .ph").forEach(ph=>{
      if(ph.querySelector(".cn"))return;
      const card=ph.closest(".card");
      ph.insertAdjacentHTML("beforeend",'<button type="button" class="cn pv" aria-label="Foto anterior">&#8249;</button><button type="button" class="cn nx" aria-label="Próxima foto">&#8250;</button><span class="cc"></span>');
      const im=ph.querySelector("img.art"),l=lista(card);
      const k=im?l.indexOf(im.getAttribute("src")):-1;
      card.dataset.fi=k>=0?k:0;
      setas(card);
    });
  }
  new MutationObserver(injeta).observe(document.body,{childList:true,subtree:true});
  injeta();
  let tx=null,tSwipe=0;
  document.addEventListener("touchstart",e=>{tx=e.target.closest(".card .ph")?e.touches[0].clientX:null},{passive:true});
  document.addEventListener("touchend",e=>{
    if(tx===null)return;
    const dx=e.changedTouches[0].clientX-tx,ph=e.target.closest(".card .ph");tx=null;
    if(ph&&Math.abs(dx)>40){tSwipe=Date.now();mover(ph.closest(".card"),dx<0?1:-1);}
  });
  function abrir(card){
    const id=+card.dataset.id, p=P.find(x=>x.id===id);
    if(!p)return;
    const sel=card.querySelector('.sw[aria-pressed="true"]');
    const corSel=sel?(sel.getAttribute("aria-label")||"").replace("Cor ",""):"";
    try{localStorage.setItem("mare_produto",JSON.stringify({...p,img:imagens()[id]||"",corSel}))}catch(e){}
    location.href="produto.html?id="+id;
  }
  document.addEventListener("click",e=>{
    const cn=e.target.closest(".card .cn");
    if(cn){e.preventDefault();mover(cn.closest(".card"),cn.classList.contains("nx")?1:-1);return;}
    const sw=e.target.closest(".card .sw");
    if(sw){
      const card=sw.closest(".card");
      card.dataset.cor=(sw.getAttribute("aria-label")||"").replace("Cor ","");
      card.dataset.fi=0;
      mostrar(card);
      return;
    }
    if(Date.now()-tSwipe<400)return; // evita abrir o produto logo após arrastar
    const ph=e.target.closest(".ph");
    if(ph&&ph.closest(".card"))abrir(ph.closest(".card"));
  });
  document.addEventListener("keydown",e=>{
    if(e.key==="Enter"&&e.target.classList&&e.target.classList.contains("ph"))abrir(e.target.closest(".card"));
  });
  // acessibilidade: foto focável por teclado
  new MutationObserver(()=>document.querySelectorAll(".ph:not([tabindex])").forEach(el=>{el.tabIndex=0;el.setAttribute("role","link")}))
    .observe(document.body,{childList:true,subtree:true});
  document.querySelectorAll(".ph").forEach(el=>{el.tabIndex=0;el.setAttribute("role","link")});
})();