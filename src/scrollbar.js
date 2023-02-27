class Scrollbar{
    #content;
    #container;
    #scrollbar;
    #scrollbarThumb;

    constructor(scrollable) {
        this.#container = document.querySelector(scrollable);
    }

    initialize() {
        this.#content = document.createElement("div");
        if(this.#container.hasChildNodes()){
            this.#content.innerHTML = this.#container.getInnerHTML();
            
            const children = this.#container.childNodes;
            let i = 0;
            children.forEach(child => {
                if(child.nodeName == "SCRIPT")
                    console.log(1)
                else
                    this.#container.removeChild(this.#container.firstChild);
            });
        }
        this.#container.insertBefore(this.#content, this.#container.children[0]);

        this.#scrollbar = document.createElement("nav");
        this.#scrollbarThumb = document.createElement("div");
        this.#scrollbar.appendChild(this.#scrollbarThumb);
        this.#container.insertBefore(this.#scrollbar, this.#container.children[1]);
        
        this.#container.classList.add("scrollable");
        this.#content.classList.add("scrollable__content");
        this.#scrollbar.classList.add("scrollable__scrollbar");
        this.#scrollbarThumb.classList.add("scrollbar-thumb");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const scrollbar = new Scrollbar("body");
    scrollbar.initialize();

    const body = document.querySelector("body");
    console.log(body);
});

