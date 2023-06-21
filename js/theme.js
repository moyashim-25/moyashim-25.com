(function (theme) {
    "use strict";
    let changeDark;
    const switchTheme = (changeDark) => {
        if (changeDark) {
            theme.document.documentElement.classList.add("dark");
            localStorage.setItem("darktheme", "on");
            return;
        }
        theme.document.documentElement.classList.remove("dark");
        localStorage.removeItem("darktheme");
    };

    theme.document.addEventListener("DOMContentLoaded", () => {
        const changebutton = theme.document.getElementById("dark_switch");
        changebutton.addEventListener("click", () => {
            if (localStorage.getItem("darktheme")) changeDark = true;
            if (changeDark == true) {
                switchTheme(changeDark = false);
            } else {
                switchTheme(changeDark = true);
            }
        });
    });
})(this);