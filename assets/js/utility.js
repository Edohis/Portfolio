//---- LANG

function checkLanguage(type = "cookie") {
  const listLangs = ["en", "En", "EN", "fr", "Fr", "FR"];
  let userLang;

  if (type === "cookie") {
    const userCookieLang = getCookie("language");
    userLang = userCookieLang;
    if (userLang === null) {
      userLang = "none";
      type = "browser";
    }  
  }
  
  if (type === "browser") {
    const userBrowserLang = navigator.language || navigator.userLanguage;
    userLang = userBrowserLang.substring(0, 2).toLowerCase();
  }
  
  if (!listLangs.includes(userLang)) {
    userLang = "en";
  }
  
  saveCookie("language", userLang);
  return userLang
}

//---- CONSENT

function cookieAccept() {
  localStorage.setItem("cookieLocalConsent", "true");
  //localStorage.setItem("cookieConsentPop", "true");
  //saveCookie("cookieLocalConsent", "true");
  saveCookie("cookieConsentPop", "true");
  cookieHide();
  return
}

function cookieRefuse() {
  sessionStorage.setItem("cookieLocalConsent", "false");
  //sessionStorage.setItem("cookieConsentPop", "true");
  //saveCookie("cookieLocalConsent", "false");
  saveCookie("cookieConsentPop", "true");
  cookieHide();
  return
}

function cookieHide() {
  addClassTo("#DataConsent", "hidden");
  return
}

//---- "COOKIE"

function saveCookie(name, value) {
  const cookieLocal = localStorage.getItem("cookieLocalConsent"); 
  if (cookieLocal === "true") {
    localStorage.setItem(name, value);
    return
  }
  sessionStorage.setItem(name, value);
}

function getCookie(name) {
  const cookieLocal = localStorage.getItem("cookieLocalConsent"); 
  if (cookieLocal === "true") {
    return localStorage.getItem(name);
  } else {
    return sessionStorage.getItem(name);
  }
}

//---- MODE

function checkMode(type = "cookie") {
  let userMode;
  if (type === "cookie") {
    const userCookieMode = getCookie("mode");
    userMode = userCookieMode;
    if (userMode === null) {
      userMode = "none";
      type = "browser";
    }
  }

  if (type === "browser") {
    const userBrowserMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    userMode = userBrowserMode;
    if (userMode === false) {
      userMode = "light";
    } else {
      userMode = "dark";
    }
  }


  saveCookie("mode", userMode);
  setTextMode();
  return userMode
}

function setTextMode() {
  const iconText = document.getElementById("NavbarTextMode");
  const mode = getCookie("mode");
  const language = getCookie("language");
  if (mode === "dark") {
    if (language === "fr") {
      iconText.innerHTML = "Foncé";
    } else {
      iconText.innerHTML = "Dark";
    }
  } else {
    if (language === "fr") {
      iconText.innerHTML = "Claire";
    } else {
      iconText.innerHTML = "Light";
    }
  }
}

function setIconMode(mode) {
  if (mode === "dark") {
    addClassTo("#Page", "theme-dark");
    addClassTo("#NavbarIconMode", "fa-moon");
    removeClassTo("#NavbarIconMode", "fa-sun");
  } 
  if (mode === "light") {
    removeClassTo("#Page", "theme-dark");
    addClassTo("#NavbarIconMode", "fa-sun");
    removeClassTo("#NavbarIconMode", "fa-moon")
  }
}