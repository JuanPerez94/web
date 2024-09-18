document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const allContents = document.querySelectorAll(".accordion-content");

            allContents.forEach(c => {
                if (c !== content) {
                    c.style.display = "none";
                }
            });

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});