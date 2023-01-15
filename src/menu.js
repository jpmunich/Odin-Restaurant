export function createMenuPage() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("tab-container");
    menuContainer.setAttribute("id", "menu-container");
    menuContainer.classList.add("the-menu-container");
    menuContainer.classList.add("invisible");
    content.appendChild(menuContainer);

    createMenuItem("Pizza", "Pepperoni and Cheese. The classic experience.");
    createMenuItem("Pizza", "Pepperoni and Cheese. The classic experience.");
    createMenuItem("Pizza", "Pepperoni and Cheese. The classic experience.");
    createMenuItem("Pizza", "Pepperoni and Cheese. The classic experience.");
    createMenuItem("Pizza", "Pepperoni and Cheese. The classic experience.");
    createMenuItem("Pizza", "Pepperoni and Cheese. The classic experience.");
    createMenuItem("Pizza", "Pepperoni and Cheese. The classic experience.");
    createMenuItem("Pizza", "Pepperoni and Cheese. The classic experience.");
}

function createText(text) {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    return paragraph;
}

function createMenuItem(nameOfItem, itemText) {
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");
    document.getElementById("menu-container").appendChild(menuItem);

    const menuItemName = document.createElement("h2");
    menuItemName.innerText = nameOfItem;
    menuItem.appendChild(menuItemName);

    const menuItemDescription = createText(itemText);
    menuItemDescription.classList.add("menu-item-description");
    menuItem.appendChild(menuItemDescription);

    return menuItem;
}