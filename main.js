import { newArticles } from "./data.js"
import projects from "./data.js"

const section = document.getElementById('articles')
const sectionProjects = document.getElementById('projects')

//Render Articles
newArticles.map((article) => {
    
    return section.innerHTML += `
        <h3>${article.title}</h3>
        <p>${article.body}</p>
        <time>${article.date}</time>
        ${article.title == "Learning journal" && 
            "<button id='doc-btn'>docs</button>"
        }
        <hr />
    `
})

//Render Projects
projects.map((project) => {
    return sectionProjects.innerHTML += `
        <img src=${project.img} alt="${project.title} screenshot" width="300px">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">See project</a>
    `
})

document.getElementById('doc-btn').addEventListener('click', () => {
    window.location.href = "./documentation.html"
})
