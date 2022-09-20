const app = {};

app.DisplayConsent = () => {
  //const cookiePop = document.getElementById("DataConsent");
  const cookieConsentPop = getCookie("cookieConsentPop");

  removeClassTo("#DataConsent", "hidden");
  if (cookieConsentPop === "true") {
    addClassTo("#DataConsent", "hidden");
  }
};

app.UserConsent = () => {
  //-- cookie accept 
  const cookieConsentAccept = document.getElementById("DataConsentAccept");
  cookieConsentAccept.addEventListener("click", () => {
    cookieAccept();
    cookieHide();
  });
  
  //-- cookie refuse 
  const cookieConsentRefuse = document.getElementById("DataConsentRefuse");
  cookieConsentRefuse.addEventListener("click", () => {
    cookieRefuse();
    cookieHide();
  });
};

app.ToggleMode = () => {
  const toggleMode = document.getElementById("NavbarMode");
  toggleMode.addEventListener("click", () => {
    if (document.body.classList.contains("theme-dark")) {
      document.body.classList.remove("theme-dark");
      saveCookie("mode", "light");
      setIconMode("light")
      return
    }
    document.body.classList.add("theme-dark");
    saveCookie("mode", "dark");
    setIconMode("dark");
  });
};

app.OpenMobileNavbar = () => {
  const openMobileNavbar = document.getElementById("MobileNavbarToggle");
  openMobileNavbar.addEventListener("click", () => {
    document.querySelector("#HeaderPrimary").classList.toggle("header-mobile");
    document.querySelector("#NavbarPrimary").classList.toggle("navbar-mobile");
    document.querySelector("#MainPrimary").classList.toggle("main-mobile");
  });
};

app.CloseMobileNavbar = () => {
  const closeMobileNavbar = document.getElementById("MobileNavbarClose");
  closeMobileNavbar.addEventListener("click", () => {
    document.querySelector("#HeaderPrimary").classList.toggle("header-mobile");
    document.querySelector("#NavbarPrimary").classList.toggle("navbar-mobile");
    document.querySelector("#MainPrimary").classList.toggle("main-mobile");
  });
};

app.DataConsentPop = () => {
  const dataConsentBtnLang = document.getElementById("ConsentLang");
  dataConsentBtnLang.addEventListener("click", () => {
    if (dataConsentBtnLang.innerHTML === "En Français") {
      dataConsentBtnLang.innerHTML = "In English";
      setLanguageForDataConsent("fr");
    } else {
      dataConsentBtnLang.innerHTML = "En Français";
      setLanguageForDataConsent("en");
    }
  });
}

app.init = () => {
  app.DisplayConsent();
  app.UserConsent();
  app.ToggleMode();
  app.OpenMobileNavbar();
  app.CloseMobileNavbar();
  app.DataConsentPop();
};
