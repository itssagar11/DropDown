"use strict"

let div= document.getElementById("menu");

MenuClick.addEventListener("mouseover",()=>{ div.classList.add('open');});
MenuClick.addEventListener("mouseout",()=>{ div.classList.remove('open');});
