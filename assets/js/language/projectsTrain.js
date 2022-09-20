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
    saveCookie("language", "fr");
    setLanguage("fr");
  });
  setIconMode(siteMode);
  createBoxProject([ListFeaturedTrainingProjectsEN, ListFeaturedTrainingProjectsFR], "ListFeaturedTrainingProjects");
  app.init();
}

function setLanguage(language) {
  if (language === "fr") {
    window.location.href = "projets-formations.html";
  }
}