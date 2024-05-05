// Function to display the current date in the footer
function displayCurrentDate() {
    const currentDate = new Date();
    const footer = document.querySelector("footer");
    footer.innerHTML = `© ${currentDate.getFullYear()} Job Recommender. All rights reserved.`;
}

// Function to toggle mobile navigation menu
function toggleMobileMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

// Event listener for toggling mobile menu
document.querySelector(".mobile-menu-btn").addEventListener("click", toggleMobileMenu);

// Function to fetch and display user profile data
function fetchUserProfile() {
    // Simulated user profile data
    const userProfile = {
        name: "John Doe",
        email: "john@example.com",
        bio: "Passionate about web development and data science.",
        // Add more profile data as needed
    };

    const userProfileSection = document.querySelector(".user-profile");

    userProfileSection.innerHTML = `
        <h2>${userProfile.name}</h2>
        <p><strong>Email:</strong> ${userProfile.email}</p>
        <p><strong>Bio:</strong> ${userProfile.bio}</p>
        <!-- Add more profile data as needed -->
    `;
}

// Function to simulate searching for jobs
function searchJobs(keyword) {
    // Simulated job search results
    const searchResults = [
        { title: "Web Developer", company: "Tech Solutions Inc.", location: "New York", salary: "$70,000" },
        { title: "Data Scientist", company: "Data Insights Co.", location: "San Francisco", salary: "$90,000" },
        { title: "UX/UI Designer", company: "Creative Designs Ltd.", location: "Los Angeles", salary: "$80,000" },
        // Add more search results as needed
    ];

    const searchSection = document.querySelector(".search");

    searchSection.innerHTML = ""; // Clear previous search results

    if (searchResults.length === 0) {
        searchSection.innerHTML = "<p>No jobs found.</p>";
    } else {
        searchResults.forEach(job => {
            const jobElement = document.createElement("div");
            jobElement.classList.add("job");
            jobElement.innerHTML = `
                <h2>${job.title}</h2>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <button onclick="viewJobDetails('${job.title}')">View Details</button>
            `;
            searchSection.appendChild(jobElement);
        });
    }
}

// Function to simulate viewing job details
function viewJobDetails(jobTitle) {
    // Simulated job details
    const jobDetails = {
        title: jobTitle,
        description: "We are seeking a talented Web Developer to join our team...",
        requirements: "Bachelor's degree in Computer Science or related field...",
        // Add more job details as needed
    };

    // Redirect to job details page with job title parameter
    window.location.href = `job-details.html?title=${encodeURIComponent(jobTitle)}`;
}

// Function to fetch and display job details
function fetchJobDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const jobTitle = urlParams.get('title');

    // Simulated job details
    const jobDetails = {
        title: jobTitle,
        description: "We are seeking a talented Web Developer to join our team...",
        requirements: "Bachelor's degree in Computer Science or related field...",
        // Add more job details as needed
    };

    const jobDetailsSection = document.querySelector(".job-details");

    jobDetailsSection.innerHTML = `
        <h2>${jobDetails.title}</h2>
        <p><strong>Description:</strong> ${jobDetails.description}</p>
        <p><strong>Requirements:</strong> ${jobDetails.requirements}</p>
        <!-- Add more job details as needed -->
    `;
}

// Function to initialize page-specific functionality
function initPage() {
    const currentPage = window.location.pathname;

    if (currentPage.includes("profile.html")) {
        fetchUserProfile();
    } else if (currentPage.includes("search.html")) {
        const searchForm = document.querySelector(".search-form");

        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const keyword = document.querySelector("#searchInput").value;
            searchJobs(keyword);
        });
    } else if (currentPage.includes("job-details.html")) {
        fetchJobDetails();
    }
}

// Display current date in the footer
displayCurrentDate();

// Initialize page-specific functionality
initPage();
