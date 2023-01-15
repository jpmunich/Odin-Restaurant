const content = document.getElementById("content");

export function createHomePage() {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("tab-container");
    homeContainer.setAttribute("id", "home-container");
    content.appendChild(homeContainer);

    homeContainer.appendChild(createText("Sample Home Page Text"));
    homeContainer.appendChild(createText("Established Today on this Local Machine"));

    const img = document.createElement("img");
    img.src = "images/home-icon.jpg";
    img.setAttribute("id", "home-icon");
    homeContainer.appendChild(img);

    homeContainer.appendChild(createText("Order Online or Visit us Today!"));
}

function createText(text) {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    return paragraph;
}
