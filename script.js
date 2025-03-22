// Function to update the time every second
function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);

// Event listener for "Explore More" button
document.getElementById('exploreBtn').addEventListener('click', () => {
    window.location.href = 'gallery.html'; // Navigate to the gallery page
});

// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message Sent!");
});

// Login form interaction
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert(`Welcome, ${username}!`);
    } else {
        alert('Please fill in both fields!');
    }
});

// Upgrade the site every minute with new content (simplified upgrade)
let upgradeCounter = 0;
setInterval(() => {
    if (upgradeCounter === 0) {
        document.body.style.backgroundimg = "l.jpg"; // Change background Image
    } else if (upgradeCounter === 1) {
        document.querySelector(".cta-button").innerText = "Now Explore  @YUAN ZUN LIVE Gallery!";
    }
    upgradeCounter++;
}, 60000); // Upgrade every minute
