(()=>{"use strict";(function(){const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("h1");n.classList.add("title"),n.textContent="Eat Gluten Not Meat";const c=document.createElement("div");c.classList.add("button-container");const d=document.createElement("button");d.classList.add("welcome"),d.textContent="Welcome";const a=document.createElement("button");a.classList.add("menu"),a.textContent="Menu";const s=document.createElement("button");s.classList.add("contact"),s.textContent="Contact us";const o=document.createElement("main");o.classList.add("main");const i=document.createElement("div");i.classList.add("welcome-cntr");const l=document.createElement("h2");l.classList.add("welcome-msg"),l.textContent="Eat Gluten Not Meat";const m=document.createElement("footer"),r=document.createElement("span");r.classList.add("by-bepsik"),r.innerHTML='Made with love by <a href="#">bepsik777</a>',e.appendChild(t),e.appendChild(o),e.appendChild(m),t.appendChild(n),t.appendChild(c),c.appendChild(d),c.appendChild(a),c.appendChild(s),o.append(i),i.appendChild(l),m.appendChild(r)})(),function(){const e=document.getElementById("content"),t=document.createElement("img");t.setAttribute("src","./seitan-burger.jpeg"),t.classList.add("seitan-burger"),document.createElement("img"),document.createElement("img"),document.createElement("img");const n=document.querySelector(".main"),c=document.createElement("main");c.classList.add("main-menu");const d=document.createElement("div");d.classList.add("menu-container");const a=[],s=[];for(let e=0;e<4;e++){const t=document.createElement("div");t.classList.add("container"),t.classList.add(`${e}`),d.appendChild(t),a.push(t)}a.forEach((e=>{console.log(e);const t=document.createElement("div");t.dataset.id=e.classList[1],t.classList.add("picture-container");const n=document.createElement("div");n.classList.add("description-container"),e.appendChild(t),e.appendChild(n),s.push(t)})),s[0].appendChild(t),c.appendChild(d),e.replaceChild(c,n)}()})();