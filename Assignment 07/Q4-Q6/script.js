const container = document.getElementById('product-container');


// Fetch products from the API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    // Loop through the products and create product cards
    products.forEach(product => {
      const card = createProductCard(product);
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Failed to fetch products. Please try again later.';
    container.appendChild(errorMessage);
  });

// Create a product card
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const image = document.createElement('img');
  image.src = product.image;
  image.alt = product.title;
  card.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = product.title;
  card.appendChild(title);

  const price = document.createElement('p');
  price.textContent = "Price: " +`$${product.price}`;
  card.appendChild(price);

  const button = document.createElement('button');
  button.textContent = `Add to Cart`;
  card.appendChild(button);

  return card;
}

