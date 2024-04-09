document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Ultrakill Vertical Slice",
            tags: ["Game", "C#", "Unity", "FPS"],
            description: "A vertical slice of the game Ultrakill",
            image: "img/ukposter.png",
            link: "Ultrakill.html" // Add link to project page
        },
        {
            title: "EvilPunk",
            tags: ["Game", "C#", "Unity", "Top Down"],
            description: "A top down 2.5d wave shooter",
            image: "img/poster.png",
            link: "project2.html" // Add link to project page
        },
        {
            title: "Generic Tower Defense",
            tags: ["Game", "C#", "Unity", "Tower Defense"],
            description: "A simple tower defense game focussing on a clean aesthetic",
            image: "img/TDposter.png",
            link: "project3.html" // Add link to project page
        },
        {
            title: "Line Dancer",
            tags: ["Game", "C#", "Unity", "Rhythm Game"],
            description: "A simple rythm game made in a week",
            image: "img/LDposter.png",
            link: "project4.html" // Add link to project page
        },
    ];

    function displayProjects(projects) {
        const container = document.getElementById('projectContainer');
        container.innerHTML = ''; // Clear existing projects
        projects.forEach(project => {
            const projectElement = document.createElement('a'); // Use <a> tag for links
            projectElement.href = project.link; // Set href attribute to the project's link
            projectElement.className = 'project';
            projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
            `;
            container.appendChild(projectElement);
        });
    }

    function filterProjects(searchTag) {
        const filteredProjects = projects.filter(project => 
            project.tags.some(tag => tag.toLowerCase().includes(searchTag.toLowerCase()))
        );
        displayProjects(filteredProjects);
    }

    document.getElementById('searchTags').addEventListener('input', function(e) {
        const searchTag = e.target.value.trim();
        if (searchTag) {
            filterProjects(searchTag);
        } else {
            displayProjects(projects); // No input, show all projects
        }
    });

    displayProjects(projects); // Initial display of projects
});

document.addEventListener('DOMContentLoaded', function() {
    VANTA.NET({
        el: "#vanta-background",
        color: 0xffdd40, // Yellow color
        backgroundColor: 0x1a1a1a, // Main background color
        points: 15, // Number of dots
        maxDistance: 25, // Maximum distance between dots
        spacing: 25 // Spacing between dots
    });
});
