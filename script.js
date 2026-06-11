
function toggleMenu(){
  document.getElementById('menu').classList.toggle('show');
}

function scrollFilters(amount) {
    document.getElementById("filters")
        .scrollBy({ left: amount, behavior: "smooth" });
}