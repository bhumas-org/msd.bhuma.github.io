function toggleMenu() {
    const menu = document.getElementById("menu");
    const btn = document.getElementById("menuBtn");

    menu.classList.toggle("show");
    btn.innerHTML = menu.classList.contains("show") ? "✕" : "☰";
}

function closeMenu() {
    document.getElementById("menu").classList.remove("show");
    document.getElementById("menuBtn").innerHTML = "☰";
}

function openModal(src) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});

document.querySelectorAll(".filters a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        const headerHeight = document.querySelector("header").offsetHeight;
        const filterHeight = document.querySelector(".filter-wrapper").offsetHeight;

        window.scrollTo({
            top: target.offsetTop - headerHeight - filterHeight - 10,
            behavior: "smooth"
        });
    });
});