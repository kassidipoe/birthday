// Function to add shaking effect to the image
function shakeImage() {
    const image = document.getElementById('shake-image');
    image.style.animation = 'shake 0.5s';
    setTimeout(() => {
        image.style.animation = '';
    }, 500);
}

// Variable to track if navigation bar is shown
let navigationBarShown = false;

// Function to change the image and show navigation bar when clicked
function changeImageAndShowNavBar() {
    const image = document.getElementById('shake-image');
    if (!navigationBarShown) {
        if (image.src.endsWith('img1.png')) {
            // URL for the second image
            image.src = 'img2.png';
        } else if (image.src.endsWith('img2.png')) {
            // URL for the third image
            image.src = 'img3.png';
        } else if (image.src.endsWith('img3.png')) {
            // URL for the fourth image
            image.src = 'img4.png';
        } else if (image.src.endsWith('img4.png')) {
            // URL for the fifth image
            image.src = 'img5.png';
        } else if (image.src.endsWith('img5.png')) {
            // URL for the sixth image
            image.src = 'img6.png';
        } else if (image.src.endsWith('img6.png')) {
            // URL for the seventh image
            image.src = 'img7.png';
            // Show navigation bar
            showNavigationBar();
            // Set navigationBarShown to true to prevent further changes
            navigationBarShown = true;
        }
    }
}

// Function to show navigation bar
function showNavigationBar() {
    const navigationBar = document.createElement('div');
    navigationBar.id = 'navigation-bar';

    // Create navigation links
    const links = [
        { text: 'card', url: 'card.html' },
        
    ];

    // Create anchor elements for each link
    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.textContent = link.text;
        anchor.href = link.url;
        anchor.classList.add('nav-link'); // Add a class for styling
        anchor.addEventListener('click', function(event) {
            // Log to check if the click event is triggered
            console.log('Clicked on navigation link:', link.url);
            // Prevent default behavior of anchor click
            event.preventDefault();
            // Navigate to the specified URL
            window.location.href = link.url;
        });
        navigationBar.appendChild(anchor);
    });

    // Append navigation bar to the document body
    document.body.appendChild(navigationBar);
}


// Add event listener to the image
document.getElementById('shake-image').addEventListener('click', function() {
    shakeImage();
    changeImageAndShowNavBar();
});