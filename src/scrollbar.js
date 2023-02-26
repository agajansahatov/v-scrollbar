class Scrollbar{
    #content;
    #container;
    #scrollbar;
    #width;
    #height;

    static getIndexOf(element) {
        return Array.prototype.indexOf.call(element.parentElement.children, element);
    }

    constructor(scrollable) {
        this.#content = document.querySelector(scrollable);
        this.#width = this.#content.clientWidth;
        this.#height = this.#content.clientHeight;
    }

    createContainer() {
        if(this.#content.nodeName == "BODY"){
            this.#container = document.querySelector("html");
            return;
        }
        this.#container = document.createElement("div");
        const parent = this.#content.parentNode;
        const i = getIndexOf(this.#content);
        parent.insertBefore(this.#container, parent.children[i]);
        this.#container.appendChild(this.#content);
    }

    createScrollbar(){
        this.#scrollbar = document.createElement("nav");
        this.#container.appendChild(this.#scrollbar);
    }

    initialize() {
        this.createContainer();
        this.createScrollbar();

        this.#container.classList.add("scrollable");
        this.#content.classList.add("scrollable__content");
        this.#scrollbar.classList.add("scrollable__scrollbar");

        this.#container.style.width = this.#width + "px";
        this.#container.style.height = this.#height + "px";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
});

const bodyScrollbar = new Scrollbar("body");
bodyScrollbar.initialize();

