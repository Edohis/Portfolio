window.onload = () => {
  let siteLang = checkLanguage();
  const firstVisit = getCookie("firstVist");
  let siteMode = checkMode();
  if (!firstVisit === "visited") {
    saveCookie("firstVisit", "visited");
  }
  setLanguage(siteLang);
  const btnLang = document.getElementById("NavbarLang");
  btnLang.addEventListener("click", () => {
    saveCookie("language", "en");
    setLanguage("en");
  });
  setIconMode(siteMode);
  createBoxProject([listFeaturedProjectsEN, listFeaturedProjectsFR], "ListFeaturedProjects");
  app.init();
}

function setLanguage(language) {
  if (language === "en") {
    window.location.href = "index.html";
  }
}
