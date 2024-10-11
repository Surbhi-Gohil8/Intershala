// Add event listener to the read more button
document.querySelector('.read-more-button').addEventListener('click', function() {
    // Add your logic here to handle the click event
    console.log('Read more button clicked!');
  });
  
  // Add event listener to the carousel items
  document.querySelectorAll('.carousel-item').forEach(function(item) {
    item.addEventListener('mouseover', function() {
      // Add your logic here to handle the mouseover event
      console.log('Carousel item hovered!');
    });
  });