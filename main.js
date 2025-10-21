import { newArticles } from "./data.js"

const section = document.getElementById('articles')

newArticles.map((article) => {
    return section.innerHTML += `
        <h3>${article.title}</h3>
        <p>${article.body}</p>
        <time>${article.date}</time>
        <hr />
    `
})
