const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const projectCategoryButtons = document.querySelectorAll("#Projects button[aria-controls]");

projectCategoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        projectCategoryButtons.forEach((categoryButton) => {
            const selected = categoryButton === button;
            const panel = document.getElementById(categoryButton.getAttribute("aria-controls"));

            categoryButton.setAttribute("aria-pressed", String(selected));
            panel.hidden = !selected;
        });
    });
});
