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
const s = document.querySelector(".sec")
const m = document.querySelector(".min")
const h = document.querySelector(".hour")
setInterval(() => {
    const now = new Date()
    const sec = now.getSeconds()
    const min = now.getMinutes()
    const hs = now.getHours()


    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform =`rotate(${hs * 30}deg)`

    console.log(sec)
}, 1000)
