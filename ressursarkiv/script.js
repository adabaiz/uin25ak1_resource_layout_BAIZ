
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
