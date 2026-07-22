document.querySelectorAll("[data-nav-toggle]").forEach(e=>{e.addEventListener("click",()=>{e.parentElement?.querySelector("[data-nav-links]")?.classList.toggle("open")})});
