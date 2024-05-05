// Function to handle form submission and search for jobs
function searchJobs(event) {
    event.preventDefault(); // Prevent form from submitting

    const keyword = document.querySelector("#searchInput").value;

    // Simulated search results (replace with actual search functionality)
    const searchResults = [
        { title: "Web Developer", company: "Tech Solutions Inc.", location: "New York", salary: "$70,000" },
        { title: "Data Scientist", company: "Data Insights Co.", location: "San Francisco", salary: "$90,000" },
        { title: "UX/UI Designer", company: "Creative Designs Ltd.", location: "Los Angeles", salary: "$80,000" },
        // Add more search results as needed
    ];

    const searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; // Clear previous search results

    if (searchResults.length === 0) {
        searchResultsContainer.innerHTML = "<p>No jobs found.</p>";
    } else {
        searchResults.forEach(job => {
            const jobElement = document.createElement("div");
            jobElement.classList.add("job");
            jobElement.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <button onclick="viewJobDetails('${job.title}')">View Details</button>
            `;
            searchResultsContainer.appendChild(jobElement);
        });
    }
}

// Event listener for form submission
document.getElementById("searchForm").addEventListener("submit", searchJobs);
