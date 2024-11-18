let currentPhotoIndex = 0;
const photos = document.querySelectorAll('.photo');

function showNextPhoto() {
    // Hide current photo
    photos[currentPhotoIndex].classList.remove('active');

    // Move to the next photo
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;

    // Show the next photo
    photos[currentPhotoIndex].classList.add('active');
}

// Initially show the first photo
photos[currentPhotoIndex].classList.add('active');

// Add click event to photos to show next photo with animation
photos.forEach(photo => {
    photo.addEventListener('click', showNextPhoto);
});
