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
  createBoxProject([ListFeaturedTrainingProjectsEN, ListFeaturedTrainingProjectsFR], "ListFeaturedTrainingProjects");
  app.init();
}

function setLanguage(language) {
  if (language === "en") {
    window.location.href = "projects-training.html";
  }
}