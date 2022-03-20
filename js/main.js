const navbar = document.querySelector(".nav");
const botonMenu = document.querySelector(".btn-menu");
const navA = document.querySelectorAll(".nav__a");
const imagenesRedesFooter = document.querySelectorAll(".img-redes");
const imagenesDePresentacion = document.querySelectorAll("img-presentacion");

const removerNavYAgregarAtributo = (num,href,hrefValue)=>{
	navA[num].setAttribute(href,hrefValue);
	navbar.classList.remove("navbar-toggle");
};


// Dom events navegacion menu
botonMenu.addEventListener("click",()=>{
	navbar.classList.toggle("navbar-toggle");
});

navA[0].addEventListener("click",()=>{
	removerNavYAgregarAtributo(0,"href","./index.html");
});

navA[1].addEventListener("click",()=>{
	removerNavYAgregarAtributo(1,"href","./index.html#productos");
});

navA[2].addEventListener("click",()=>{
	removerNavYAgregarAtributo(2,"href","./galeria.html");
})

navA[3].addEventListener("click",()=>{
	removerNavYAgregarAtributo(3,"href","#contactame");
});

imagenesRedesFooter[0].addEventListener("click",()=> {
	window.open("https://facebook.com");
});

imagenesRedesFooter[1].addEventListener("click",()=> {
	window.open("https://instagram.com");
});
