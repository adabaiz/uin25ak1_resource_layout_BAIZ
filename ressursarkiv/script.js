const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            { title: "W3Schools", url: "https://www.w3schools.com/html/" },
            { title: "HTML Living standard", url: "https://html.spec.whatwg.org/multipage/" },
            { title: "HTML.com Tutorials", url: "https://html.com/" },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            { title: "W3Schools", url: "https://www.w3schools.com/css/" },
            { title: "W3C HTML & CSS Standards", url: "https://www.w3.org/standards/webdesign/htmlcss.html" },
            { title: "W3C CSS Validator", url: "https://jigsaw.w3.org/css-validator/" },
            { title: "CSS Tricks", url: "https://css-tricks.com/" },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            { title: "W3Schools", url: "https://www.w3schools.com/js/" },
            { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { title: "How to read JavaScript Documentation", url: "https://www.youtube.com/watch?v=O3iR-CIufKM" },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            { title: "React documentation", url: "https://reactjs.org/docs/getting-started.html" },
            { title: "W3Schools", url: "https://www.w3schools.com/REACT/DEFAULT.ASP" },
            { title: "How to read JavaScript Documentation", url: "https://www.youtube.com/watch?v=O3iR-CIufKM" },
        ]
    },
    {
        category: "Sanity",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            { title: "Sanity documentation", url: "https://www.sanity.io/docs" },
            { title: "OnCrawl: a beginners guide to headless CMS", url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/" },
            { title: "Section.io: Getting started with Sanity CMS", url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/" },
        ]
    },
];


document.addEventListener("DOMContentLoaded", function () {
    const tabsContainer = document.querySelector("nav.tabs");
    const contentBox = document.querySelector("article.content-box");

    
    tabsContainer.innerHTML = "";
    contentBox.innerHTML = "";

    
    resources.forEach((resource, index) => {
        const tabButton = document.createElement("button");
        tabButton.classList.add("tab");
        if (index === 0) tabButton.classList.add("active"); 
        tabButton.textContent = resource.category;
        tabButton.onclick = (event) => changeTab(event, resource.category.toLowerCase());

        tabsContainer.appendChild(tabButton);
    });

 
    const htmlResource = resources.filter(res => res.category === "HTML")[0]; 
    const htmlLinks = htmlResource.sources.map(source => 
        `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
    ).join("");

   
    contentBox.innerHTML = `
        <section id="html" class="content active">
            <h1>${htmlResource.category}</h1>
            <p>${htmlResource.text}</p>
            <ul>${htmlLinks}</ul>
        </section>
    `;
});


function changeTab(event, tabId) {
    const contentBox = document.querySelector("article.content-box");

    
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
    event.currentTarget.classList.add("active");

    
    const resource = resources.find(res => res.category.toLowerCase() === tabId);

  
    const newContent = `
        <section id="${tabId}" class="content active">
            <h1>${resource.category}</h1>
            <p>${resource.text}</p>
            <ul>
                ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join("")}
            </ul>
        </section>
    `;

  
    contentBox.innerHTML = newContent;
}
