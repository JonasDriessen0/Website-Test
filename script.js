document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { 
            title: "Project 1", 
            tags: ["Web", "Design"], 
            description: "Project 1 description", 
            image: "img/placeholder.jpg" // Path to the image for Project 1
        },
        { 
            title: "Project 2", 
            tags: ["Mobile", "App"], 
            description: "Project 2 description", 
            image: "img/placeholder.jpg" // Path to the image for Project 2
        },
        // Add more projects here
    ];

    function displayProjects(projects) {
        const container = document.getElementById('projectContainer');
        container.innerHTML = ''; // Clear existing projects
        projects.forEach(project => {
            const elem = document.createElement('div');
            elem.classList.add('project');
            elem.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            `;
            container.appendChild(elem);
        });
    }

    function filterProjects(tag) {
        const filteredProjects = projects.filter(p => p.tags.includes(tag));
        displayProjects(filteredProjects);
    }

    document.getElementById('searchTags').addEventListener('input', function(e) {
        const tag = e.target.value.trim().toLowerCase(); // Convert tag to lowercase for case-insensitive search
        if (tag) {
            filterProjects(tag);
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