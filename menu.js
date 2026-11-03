// Menu hambúrguer (celular). O botão é criado aqui e só aparece em telas <= 760px (ver mobile.css).
(function(){
  function init(){
    var h=document.querySelector("header"),hd=h&&h.querySelector(".hd");
    if(!hd||hd.querySelector(".burger"))return;
    var b=document.createElement("button");
    b.className="burger";b.type="button";
    b.setAttribute("aria-label","Abrir menu");b.setAttribute("aria-expanded","false");
    b.innerHTML="<span></span><span></span><span></span>";
    hd.insertBefore(b,hd.firstChild);
    function set(o){
      h.classList.toggle("menu-open",o);
      document.body.classList.toggle("menu-lock",false);
      b.setAttribute("aria-expanded",o);
      b.setAttribute("aria-label",o?"Fechar menu":"Abrir menu");
    }
    b.addEventListener("click",function(){set(!h.classList.contains("menu-open"))});
    document.addEventListener("keydown",function(e){if(e.key==="Escape")set(false)});
    document.addEventListener("click",function(e){if(!h.contains(e.target))set(false)});
    window.addEventListener("resize",function(){if(innerWidth>760)set(false)});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
