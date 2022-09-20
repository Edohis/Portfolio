/******************************
 ** RELATED TO DOM
 ******************************/

// select element
function selectElement(element, all = false) {
  if (all) {
    return [...document.querySelectorAll(element)]
  };
  return document.querySelector(element); 
}

// create HTML element
function createElement(type, options = {})
{
  const element = document.createElement(type);
  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") {
      let list = value
      list = list.split(" "); 
      for (const classV in list) {
        if (!element.classList.contains(list[classV])) {
          element.classList.add(list[classV])
        }
      };
      return
    }
    if (key === "style") {
      for ([styleKey, styleValue] of Object.entries(value)) {
        element.style[styleKey] = styleValue;
      };
      return
    }
    if (key === "dataset") {
      for ([dataKey, dataValue] of Object.entries(value)) {
        element.dataset[dataKey] = dataValue;
      };
      return
    }
    if (key === "text") {
      element.innerHTML = value;
      return
    }
    element.setAttribute(key, value);  
  });
  return element
};

// remove HTML element
function removeElement(element, all = false)
{
  const item = selectElement(element, all);
  item.remove();
};

// append a html child element of type object to a html parent element
function appendChildTo(elementParent, elementChild, all = false)
{
  const itemParent = selectElement(elementParent, all);
  itemParent.appendChild(elementChild)
};

// append a child element to a parent element thanks to their id
function appendChildWithIdTo(elementParent, elementChild)
{
  const itemParent = selectElement(elementParent, false);
  const itemChild = selectElement(elementChild, false); 
  itemParent.appendChild(itemChild);
};

// create html element & append it somewhere
function createElementAndAppendTo(elementParent, type, options = {})
{
  const elementCreate = createElement(type, options);
  appendChildTo(elementParent, elementCreate);
};


/******************************
 ** RELATED TO CLASS/STYLE
 ******************************/

// add one or more classes to the element
function addClassTo(element, classToAdd) {
  const item = document.querySelector(element); 
  const list = classToAdd.split(" ");

  for (const value in list) {
    if (!item.classList.contains(list[value])) {
      item.classList.add(list[value])
    };
  };
}

// remove on or more classes to the element
function removeClassTo(element, classToRemove) {
  const item = document.querySelector(element);
  const list = classToRemove.split(" ");
  
  for (const value in list) {
    if (item.classList.contains(list[value])) {
      item.classList.remove(list[value]);
    };
  };
};

// toggle one or more classes of the element
function toggleClassTo(element, classToToggle) {
  const item = document.querySelector(element);
  const list = classToToggle.split(" ");
  
  for (const value in list) {
    item.classList.toggle(list[value]);
  };
};
