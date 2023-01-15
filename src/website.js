const content = document.getElementById("content");

export function createBackground() {
    const background = document.createElement("img");
    background.setAttribute("id", "background-image");
    background.src = "images/background.jpg";
    content.appendChild(background);
}

export function createHeader() {
    const header = document.createElement('header');
    header.classList.add("header");
    content.appendChild(header);

    const headerText = document.createElement('h1');
    headerText.innerText = "Sample Text";

    header.appendChild(headerText);
    header.appendChild(createNav());

    const navButtons = document.getElementsByClassName("nav-button");
    for (let i = 0; i < navButtons.length; i++) {

    }
  }

const createNav = () => {
    const navContainer = document.createElement("nav");
    navContainer.classList.add("nav-button-container");

    const homeTab = document.createElement("button");
    homeTab.innerText = "Home";
    homeTab.classList.add("nav-button");
    homeTab.classList.add("active-nav-button");
    navContainer.appendChild(homeTab);

    homeTab.addEventListener("click", (e) => {
        if (e.target.classList.contains("active-nav-button")) {return;}
        setActiveButton(homeTab, "home-container");
    });

    const menuTab = document.createElement("button");
    menuTab.innerText = "Menu";
    menuTab.classList.add("nav-button");
    navContainer.appendChild(menuTab);
    menuTab.addEventListener("click", (e) => {
        if (e.target.classList.contains("active-nav-button")) {return;}
        setActiveButton(menuTab, "menu-container");
    });

    const contactTab = document.createElement("button");
    contactTab.innerText = "Contact";
    contactTab.classList.add("nav-button");
    navContainer.appendChild(contactTab);
    contactTab.addEventListener("click", (e) => {
        if (e.target.classList.contains("active-nav-button")) {return;}
        setActiveButton(contactTab, "contact-container");
    });

    return navContainer;
  };

function setActiveButton(button, id) {
    const buttons = document.querySelectorAll(".nav-button");
    const tabContent = document.getElementsByClassName("tab-container");
    
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.add("invisible");
    }

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active-nav-button");
            
        }
    });
      
    document.getElementById(id).classList.remove("invisible");
    button.classList.add("active-nav-button");
}