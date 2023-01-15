export function createContactPage() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("tab-container");
    contactContainer.setAttribute("id", "contact-container");
    contactContainer.classList.add("invisible");
    content.appendChild(contactContainer);

    contactContainer.appendChild(createText("Sample Home Page Text"));
    contactContainer.appendChild(createText("Established Today on this Local Machine"));
}

function createText(text) {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    return paragraph;
}