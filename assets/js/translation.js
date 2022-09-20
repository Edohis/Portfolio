function setLanguageForDataConsent(language) {
  const translations = document.querySelectorAll("[data-i18n-key]");
  translations.forEach((string) => {
    const key = string.getAttribute("data-i18n-key");
    const translation = TranslationStringDataConsent[language][key];
    if (key === "DataConsentImgAlt") {
      string.setAttribute("alt", translation);
    } else {
      string.innerHTML = translation;  
    }
  });
  return
}

const TranslationStringDataConsent = {
  "en": {
    "DataConsentLang": "En Français",
    "DataConsentImgAlt": "Cookie",
    "DataConsentTitle": "Data Consent", 
    "DataConsentDesc": "This site stores data on your browser to allow you a better experience on the site. This data is used for the language and theme of the site. For more information you can ",
    "DataConsentDescLink": "read the data policy of this site",
    "DataConsentBtnAccept": "Accept",
    "DataConsentBtnRefuse": "Refuse"
  },
  "fr": {
    "DataConsenLang": "In English", 
    "DataConsentImgAlt": "Cookie", 
    "DataConsentTitle": "Consentement aux données",
    "DataConsentDesc": "Ce site stocke des données sur votre navigateur pour vous permettre une meilleure expérience sur le site. Ces données sont utilisées pour la langue et le thème du site.Pour plus d 'informations, vous pouvez ",
    "DataConsentDescLink": "lire la politique de données de ce site",
    "DataConsentBtnAccept": "Accepter",
    "DataConsentBtnRefuse": "Refuser"
  }
};
