// Get references to the search input and product cards
const searchInput = document.querySelector('.search-bar input');
const productCards = document.querySelectorAll('.product-card');

// Add an event listener to the search input
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim().toLowerCase(); // Get the search term and convert to lowercase

  // Loop through each product card
  productCards.forEach(card => {
    const productName = card.querySelector('h3').textContent.toLowerCase(); // Get product name
    const productDescription = card.querySelector('p').textContent.toLowerCase(); // Get product description

    // Check if the product name or description includes the search term
    if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
      card.classList.remove('hide'); // Show the card
    } else {
      card.classList.add('hide'); // Hide the card
    }
  });
});

// Add click event to product cards
productCards.forEach(card => {
  card.addEventListener('click', () => {
    // Toggle a class for additional interactivity
    card.classList.toggle('active');
  });
});