// Function to fetch and display application status updates
function fetchApplicationStatus() {
    // Simulated application status updates (replace with actual data retrieval)
    const applicationStatusUpdates = [
        { jobId: "123", status: "Pending", message: "Your application for Web Developer position is pending." },
        { jobId: "456", status: "Under Review", message: "Your application for Data Scientist position is under review." },
        // Add more status updates as needed
    ];

    const applicationStatusContainer = document.getElementById("applicationStatus");
    applicationStatusContainer.innerHTML = ""; // Clear previous status updates

    if (applicationStatusUpdates.length === 0) {
        applicationStatusContainer.innerHTML = "<p>No application status updates found.</p>";
    } else {
        applicationStatusUpdates.forEach(update => {
            const updateElement = document.createElement("div");
            updateElement.classList.add("status-update");
            updateElement.innerHTML = `
                <p><strong>Job ID:</strong> ${update.jobId}</p>
                <p><strong>Status:</strong> ${update.status}</p>
                <p><strong>Message:</strong> ${update.message}</p>
            `;
            applicationStatusContainer.appendChild(updateElement);
        });
    }
}

// Fetch and display application status updates when the page loads
fetchApplicationStatus();
