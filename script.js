console.clear()

document.addEventListener("DOMContentLoaded", () => {
    // Це забезпечує завантаження DOM перед спробою доступу до елементів
    let loader = document.querySelector(".Strich1");
    let container = document.querySelector(".container")
    setTimeout(() => {
            loader.style.display = "none"; // Приховати лоадер
            container.style.display = "block" // Показати основний контент

    }, 5000);
})