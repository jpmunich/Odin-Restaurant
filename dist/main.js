(()=>{"use strict";const t=document.getElementById("content");function e(t,e){const n=document.querySelectorAll(".nav-button"),a=document.getElementsByClassName("tab-container");for(let t=0;t<a.length;t++)a[t].classList.add("invisible");n.forEach((t=>{t!==this&&t.classList.remove("active-nav-button")})),document.getElementById(e).classList.remove("invisible"),t.classList.add("active-nav-button")}const n=document.getElementById("content");function a(t){const e=document.createElement("p");return e.innerText=t,e}function c(t){const e=document.createElement("p");return e.innerText=t,e}function i(t){const e=document.createElement("p");return e.innerText=t,e}!function(){const n=document.createElement("header");n.classList.add("header"),t.appendChild(n);const a=document.createElement("h1");a.innerText="Sample Text",n.appendChild(a),n.appendChild((()=>{const t=document.createElement("nav");t.classList.add("nav-button-container");const n=document.createElement("button");n.innerText="Home",n.classList.add("nav-button"),t.appendChild(n),n.addEventListener("click",(t=>{t.target.classList.contains("active-nav-button")||e(n,"home-container")}));const a=document.createElement("button");a.innerText="Menu",a.classList.add("nav-button"),t.appendChild(a),a.addEventListener("click",(t=>{t.target.classList.contains("active-nav-button")||e(a,"menu-container")}));const c=document.createElement("button");return c.innerText="Contact",c.classList.add("nav-button"),t.appendChild(c),c.addEventListener("click",(t=>{t.target.classList.contains("active-nav-button")||e(c,"contact-container")})),t})());const c=document.getElementsByClassName("nav-button");for(let t=0;t<c.length;t++);}(),function(){const e=document.createElement("img");e.setAttribute("id","background-image"),e.src="images/background.jpg",t.appendChild(e)}(),function(){const t=document.createElement("div");t.classList.add("tab-container"),t.setAttribute("id","home-container"),n.appendChild(t),t.appendChild(a("Sample Home Page Text")),t.appendChild(a("Established Today on this Local Machine"));const e=document.createElement("img");e.src="images/home-icon.jpg",e.setAttribute("id","home-icon"),t.appendChild(e),t.appendChild(a("Order Online or Visit us Today!"))}(),function(){const t=document.createElement("div");t.classList.add("tab-container"),t.setAttribute("id","menu-container"),content.appendChild(t),t.appendChild(c("Sample Home Page Text")),t.appendChild(c("Established Today on this Local Machine"))}(),function(){const t=document.createElement("div");t.classList.add("tab-container"),t.setAttribute("id","contact-container"),content.appendChild(t),t.appendChild(i("Sample Home Page Text")),t.appendChild(i("Established Today on this Local Machine"))}()})();