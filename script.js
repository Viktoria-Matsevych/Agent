console.clear()

document.addEventListener("DOMContentLoaded", () => {
    // Це забезпечує завантаження DOM перед спробою доступу до елементів
    let loader = document.querySelector(".Strich1");
    let container = document.querySelector(".container")
    setTimeout(() => {
        loader.style.display = "none"; // Приховати лоадер
        container.style.display = "block" // Показати основний контент

    }, 1000);
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
    h.style.transform = `rotate(${hs * 30}deg)`

    console.log(sec)
}, 1000)

let textsUk = [
    'Агенти', 'Покупці житла', 'Ресурси', 'Увійти', 'Зареєструйтесь зараз',
    'Забезпечення певності на шляху до власного житла.',
    'Гарантуйте завершення угоди про продаж вашого будинку за допомогою пропозицій з готівковим забезпеченням та без будь-яких непередбачених обставин для покупців, продавців, їхніх агентів та кредитних спеціалістів.',
    'Зареєструватися зараз', 'Дізнатися більше',
    'ПРЕДСТАВЛЕНО В',
    'Кого ми наділяємо повноваженнями',
    'Агенти покупця', 'Покупці', 'Агенти з лістингу', 'продавці', 'Кредитні спеціалісти',
    'АГЕНТИ ПОКУПЦЯ',
    'Дайте своїм покупцям гарантію готівки',
    'Відмовтеся від поширених непередбачених обставин, включаючи непередбачену умову продажу житла, щоб дозволити вашим покупцям зробити найвигіднішу пропозицію на будь-якому ринку.',
    'Отримайте сертифікацію сьогодні',
    'Збережіть свою комісію', 'Напишіть більше виграшних пропозицій', 'Гарантовано закриття',
    'Ви в гарній компанії',
    '«Ribbon — це величезна перевага для вас як агента покупця, і вона безумовно дає вам додаткову перевагу, необхідну для прийняття пропозиції покупця».',
    'ЕДГАР ГОНСАЛЕС',
    'eXp Realty',
    'Агенти люблять нас, бо ми надаємо їхнім покупцям гроші, а не конкуруємо за комісійні.',
    'Дізнатися більше',
    'Придбані будинки', 'Агенти', 'Купівельна спроможність'
]

function translateToUk() {
    let targets = document.querySelectorAll(".target");
    for (let i = 0; i < targets.length; i++) {
        targets[i].textContent = textsUk[i];
    }
}

let textsEn = [
    'Agents', 'Homebuyers', 'Resources', 'Log In', 'Sign up now',
    'Providing certainty on the journeyto homeownership.',
    'Guarantee your home closes with cash-backed, contingency-free offers for buyers, sellers, their agents, and loan officers.',
    'Sign Up Now', 'Learn more',
    'FEATURED IN',
    'Who we empower',
    'BuyE\'s AgentS', 'Buyers', 'Listing agents', 'sellers', 'Loan officers',
    'BUYER\'S AGENTS',
    'Give your buyers the certainty of cash',
    'Waive common contingencies, including the home-sale contingency, to allow your buyers to make their strongest offer in any market.',
    'Get Certified Today',
    'Keep Your Commission', 'Write More Winning Offers', 'Guaranteed to Close',
    'You\'re in good company',
    '“Ribbon is a huge advantage for you as the buyer\'s agent - and definitely gives you the extra edge needed to have your buyer\'s offer accepted."',
    'EDGAR GONZALEZ',
    'eXp Realty',
    'Agents love us because we empower their buyers with cash and don\'t compete for the commissions.',
    'Learn More',
    'Homes Purchased', 'Agents', '$5 B+',
    'Buying Power'
]

function translateToEn() {
    let targets = document.querySelectorAll(".target");

    console.log(targets)
    for (let i = 0; i < targets.length; i++) {
        targets[i].textContent = textsEn[i];
    }
}

