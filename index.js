import{a as d,S as f,i as n}from"./assets/vendor--e875Ek4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const u="56499472-080893bfed44fcf3a0d134fcd",m="https://pixabay.com/api/";function p(r){return d.get(m,{params:{key:u,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250}),h=()=>l.innerHTML="",g=()=>c.classList.remove("is-hidden"),v=()=>c.classList.add("is-hidden");function b(r){l.insertAdjacentHTML("beforeend",r.map(e=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="info-block">
        <div class="info-item"><b class="info-title">Likes</b><span class="info-value">${e.likes}</span></div>
        <div class="info-item"><b class="info-title">Views</b><span class="info-value">${e.views}</span></div>
        <div class="info-item"><b class="info-title">Comments</b><span class="info-value">${e.comments}</span></div>
        <div class="info-item"><b class="info-title">Downloads</b><span class="info-value">${e.downloads}</span></div>
      </div>
    </li>
  `).join("")),y.refresh()}document.querySelector(".form").addEventListener("submit",r=>{r.preventDefault();const e=r.currentTarget.elements["search-text"].value.trim();e&&(h(),g(),p(e).then(o=>{if(!o.hits.length)return n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});b(o.hits)}).catch(()=>n.error({message:"Something went wrong. Please try again later!",position:"topRight"})).finally(v))});
//# sourceMappingURL=index.js.map
