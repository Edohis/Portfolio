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
  createBoxProject([listCurrentPersoProjectsEN, listCurrentPersoProjectsFR], "ListCurrentPersoProjects");
  createBoxProject([listFuturePersoProjectsEN, listFuturePersoProjectsFR], "ListFuturePersoProjects");
  createBoxProject([listCompletedPersoProjectsEN, listCompletedPersoProjectsFR], "ListCompletedPersoProjects");
  app.init();
}

function setLanguage(language) {
  if (language === "en") {
    window.location.href = "projets-personnels.html";
  }
}