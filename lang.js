const t={
  mk:{
    home:"Почетна",
    phones:"Телефони",
    accessories:"Аксесоари",
    contact:"Контакт",
    services:"Продажба • Сервис • Аксесоари • Откуп • Декодирање"
  },
  al:{
    home:"Ballina",
    phones:"Telefona",
    accessories:"Aksesore",
    contact:"Kontakt",
    services:"Shitje • Servis • Aksesore • Blerje • Dekodim"
  },
  en:{
    home:"Home",
    phones:"Phones",
    accessories:"Accessories",
    contact:"Contact",
    services:"Sales • Service • Accessories • Buyback • Unlocking"
  }
};

function setLanguage(l){
  localStorage.setItem("lang",l);
  document.querySelectorAll("[data-lang]").forEach(e=>{
    e.innerText=t[l][e.dataset.lang];
  });
}

function toggleMenu(){
  document.getElementById("nav").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded",()=>{
  setLanguage(localStorage.getItem("lang")||"mk");
});
