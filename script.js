
function scrollFilters(amount) {
    document.getElementById("filters")
        .scrollBy({ left: amount, behavior: "smooth" });
}


function toggleMenu() {

    const menu = document.getElementById("menu");
    const btn = document.getElementById("menuBtn");

    menu.classList.toggle("show");

    if(menu.classList.contains("show")){
        btn.innerHTML = "✕";
    } else {
        btn.innerHTML = "☰";
    }
}

function closeMenu(){

    const menu = document.getElementById("menu");
    const btn = document.getElementById("menuBtn");

    menu.classList.remove("show");
    btn.innerHTML = "☰";
}