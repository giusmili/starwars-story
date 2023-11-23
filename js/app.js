/* object date */
import { Data_user } from "./composant.js";
import { icone } from "./composant.js";
import { btn } from "./composant.js";

document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    Data_user.formatDateTime();

    btn.event_css.addEventListener("click", () => {
        btn.events();
    });

    icone(document.querySelector("h1"));
});