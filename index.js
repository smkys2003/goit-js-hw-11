import{a as c,S as u,i as d}from"./assets/vendor-C6x3Vi_0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="56499472-080893bfed44fcf3a0d134fcd",m="https://pixabay.com/api/";function p(s){const t={key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return c.get(m,{params:t})}function y(s){return s.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img 
              class="gallery-image" 
              src="${t.webformatURL}" 
              alt="${t.tags}" 
            />
          </a>
          <div class="info-block">
            <div class="info-item">
              <b class="info-title">Likes</b>
              <span class="info-value">${t.likes}</span>
            </div>
            <div class="info-item">
              <b class="info-title">Views</b>
              <span class="info-value">${t.views}</span>
            </div>
            <div class="info-item">
              <b class="info-title">Comments</b>
              <span class="info-value">${t.comments}</span>
            </div>
            <div class="info-item">
              <b class="info-title">Downloads</b>
              <span class="info-value">${t.downloads}</span>
            </div>
          </div>
        </li>
      `).join("")}const g=document.querySelector(".form"),n=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new u(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",s=>{s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();t!==""&&(n.innerHTML="",l.classList.remove("is-hidden"),p(t).then(i=>{const a=i.data.hits;if(a.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const e=y(a);n.insertAdjacentHTML("beforeend",e),h.refresh()}).finally(()=>{l.classList.add("is-hidden")}))});
//# sourceMappingURL=index.js.map
