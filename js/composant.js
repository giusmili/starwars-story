/* composant date */
export const Data_user = {
    el: document.querySelector("time"),
    formatDateTime() {
        this.el.innerText = new Date().getFullYear();
    }
};