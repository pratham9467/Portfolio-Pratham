(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelectorAll(".section"),a=document.querySelectorAll(".controlls"),i=document.querySelectorAll(".control"),d=document.querySelector(".main-content");function u(){for(let r=0;r<i.length;r++)i[r].addEventListener("click",function(){document.querySelector(".active-btn").classList.remove("active-btn"),this.classList.add("active-btn")});d.addEventListener("click",r=>{const c=r.target.dataset.id;c&&(a.forEach(o=>{o.classList.remove("active")}),r.target.classList.add("active"),l.forEach(o=>{o.classList.remove("active")}),document.getElementById(c).classList.add("active"))})}u();