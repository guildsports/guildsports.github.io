"use strict";!function(){function e(e){e.preventDefault();var t=e.currentTarget.getAttribute("data-modal-name");document.getElementById("modal-"+t).style.display="block"}function t(e){e.preventDefault();for(var t=document.querySelectorAll(".modal"),l=0;l<t.length;l++)t[l].style.display="none"}for(var l=document.getElementsByClassName("modal-trigger"),n=document.getElementsByClassName("modal-close"),a=0;a<l.length;a++)l[a].addEventListener("click",e);for(var a=0;a<n.length;a++)n[a].addEventListener("click",t)}();