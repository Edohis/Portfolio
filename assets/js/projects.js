function createBoxProject(list, parent) {
  
  let projectLang = checkLanguage();
  let projects = list[0];
  if (projectLang === "fr") {
    projects = list[1];
  }
  projects.forEach((projects) => {
    //create article 
    const createArticle = createElement(
      "article", 
      {
        "id": projects["project-id"],
        "class": "project-box box-shadow"
      }
    );
    let elementParent = document.getElementById(parent);
    elementParent.appendChild(createArticle);
    //appendChildTo(parent, createArticle);

    // create box img & img
    if (projects["project-img-has"] === true) {
      // box img
      const createBoxImg = createElement(
        "div", 
        {
          "id": projects["project-id"] + "-boxImg",
          "class": "project-box box-shadow"
        }
      );
      elementParent = document.getElementById(projects["project-id"]);
      elementParent.appendChild(createBoxImg);
      //appendChildTo("#" + projects["project-id"], createBoxImg);
      // img
      const createImg = createElement(
        "img",
        {
          "id": projects["project-id"] + "-img",
          "src": projects["project-img-url"],
          "alt": projects["project-img-alt"],
        }
      );
      elementParent = document.getElementById(projects["project-id"] + "-boxImg");
      elementParent.appendChild(createImg);
      //appendChildTo("#" + projects["project-id"] + "-boxImg", createImg);
    }

    // create box info
    const createBoxInfo = createElement(
      "div", 
      {
        "id": projects["project-id"] + "-boxInfo",
        "class": "project-box-info"
      }
    );
    elementParent = document.getElementById(projects["project-id"]);
    elementParent.appendChild(createBoxInfo);
    //appendChildTo("#" + projects["project-id"], createBoxInfo);

    // create box info title
    const createBoxInfoTitle = createElement(
      "h3", 
      {
        "id": projects["project-id"] + "-title",
        "text": projects["project-title"]
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxInfo");
    elementParent.appendChild(createBoxInfoTitle);
    //appendChildTo("#" + projects["project-id"] + "-boxInfo", createBoxInfoTitle);

    // create box info desc
    const createBoxInfoDesc = createElement(
      "p", 
      {
        "id": projects["project-id"] + "-desc",
        "text": projects["project-desc"]
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxInfo");
    elementParent.appendChild(createBoxInfoDesc);
    //appendChildTo("#" + projects["project-id"] + "-boxInfo", createBoxInfoDesc);

    // create box tag box
    const createBoxTagBox = createElement(
      "div", 
      {
        "id": projects["project-id"] + "-boxInfoTag",
        "class": "project-box-info-tag"
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxInfo");
    elementParent.appendChild(createBoxTagBox);
    //appendChildTo("#" + projects["project-id"] + "-boxInfo", createBoxTagBox);

    // create box tags
    let listofTags =  projects["project-tag"];
    listofTags = listofTags.split(" ");
    for (const value in listofTags) {
      const createTag = createElement(
        "p",
        {
          "id": projects["project-id"] + "-boxInfoTag-" + value,
          "text": listofTags[value]
        }
      );
      elementParent = document.getElementById(projects["project-id"] + "-boxInfoTag");
      elementParent.appendChild(createTag);
      //appendChildTo("#" + projects["project-id"] + "-boxInfoTag", createTag);
    };

    // create box actions
    const createBoxActions = createElement(
      "div", 
      {
        "id": projects["project-id"] + "-boxActions",
        "class": "project-box-actions"
      }
    );
    elementParent = document.getElementById(projects["project-id"]);
    elementParent.appendChild(createBoxActions);
    //appendChildTo("#" + projects["project-id"], createBoxActions);

    // create box actions - github
    const createBoxActionsGithub = createElement(
      "a",
      {
        "id": projects["project-id"] + "-boxActions-Github",
        "class": "btn btn-icon",
        "href": projects["project-act-github"]
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxActions");
    elementParent.appendChild(createBoxActionsGithub);
    //appendChildTo("#" + projects["project-id"] + "-boxActions",createBoxActionsGithub);
    const createBoxActionsIconGithub = createElement(
      "i",
      {
        "id": projects["project-id"] + "-boxActions-GithubIcon",
        "class": "fa fa-github",
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxActions-Github");
    elementParent.appendChild(createBoxActionsIconGithub);
    //appendChildTo("#" + projects["project-id"] + "-boxActions-Github", createBoxActionsIconGithub);
    if (projects["project-act-github"] === "") {
      document.getElementById(projects["project-id"] + "-boxActions-Github").classList.add("hidden");
    }

    // create box actions - link
    const createBoxActionsLink = createElement(
      "a",
      {
        "id": projects["project-id"] + "-boxActions-Link",
        "class": "btn btn-icon",
        "href": projects["project-act-link"]
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxActions");
    elementParent.appendChild(createBoxActionsLink);
    //appendChildTo("#" + projects["project-id"] + "-boxActions",createBoxActionsLink);
    const createBoxActionsIconLink = createElement(
      "i",
      {
        "id": projects["project-id"] + "-boxActions-LinkIcon",
        "class": "fa fa-link",
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxActions-Link");
    elementParent.appendChild(createBoxActionsIconLink);
    //appendChildTo("#" + projects["project-id"] + "-boxActions-Link", createBoxActionsIconLink);
    if (projects["project-act-link"] === "") {
      document.getElementById(projects["project-id"] + "-boxActions-Link").classList.add("hidden");
    }

    // create box actions - watch
    const createBoxActionsWatch = createElement(
      "a",
      {
        "id": projects["project-id"] + "-boxActions-Watch",
        "class": "btn btn-icon",
        "href": projects["project-act-watch"]
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxActions");
    elementParent.appendChild(createBoxActionsWatch);
    //appendChildTo("#" + projects["project-id"] + "-boxActions",createBoxActionsWatch);
    const createBoxActionsIconWatch = createElement(
      "i",
      {
        "id": projects["project-id"] + "-boxActions-WatchIcon",
        "class": "fa fa-eye",
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxActions-Watch");
    elementParent.appendChild(createBoxActionsIconWatch);
    //appendChildTo("#" + projects["project-id"] + "-boxActions-Watch", createBoxActionsIconWatch);
    if (projects["project-act-watch"] === "") {
      document.getElementById(projects["project-id"] + "-boxActions-Watch").classList.add("hidden");
    }

    // create box actions - download
    const createBoxActionsDownload = createElement(
      "a",
      {
        "id": projects["project-id"] + "-boxActions-Download",
        "class": "btn btn-icon",
        "href": projects["project-act-download"]
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxActions");
    elementParent.appendChild(createBoxActionsDownload);
    //appendChildTo("#" + projects["project-id"] + "-boxActions",createBoxActionsDownload);
    const createBoxActionsIconDownload = createElement(
      "i",
      {
        "id": projects["project-id"] + "-boxActions-DownloadIcon",
        "class": "fa fa-download",
      }
    );
    elementParent = document.getElementById(projects["project-id"] + "-boxActions-Download");
    elementParent.appendChild(createBoxActionsIconDownload);
    //appendChildTo("#" + projects["project-id"] + "-boxActions-Download", createBoxActionsIconDownload);
    if (projects["project-act-download"] === "") {
      document.getElementById(projects["project-id"] + "-boxActions-Download").classList.add("hidden");
    }
  });
}