export function createMenuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("tab-container");
    menuContainer.setAttribute("id", "menu-container");
    content.appendChild(menuContainer);

    menuContainer.appendChild(createText("Sample Home Page Text"));
    menuContainer.appendChild(createText("Established Today on this Local Machine"));
}

function createText(text) {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    return paragraph;
}