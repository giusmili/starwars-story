/* composant date */
export const Data_user = {
    el: document.querySelector("time"),
    formatDateTime() {
        this.el.innerText = new Date().getFullYear();
    }

};

/* icon selection*/
export const icone = elements => {
    return elements.innerHTML += ' <ion-icon name="sunny-outline"></ion-icon>';
};

/* btn event darkmode */
export const btn = {
    parent: document.querySelector("body"),
    event_css: document.querySelector("h1"),
    events() {
        return this.parent.classList.toggle("whitemode");
    }
};