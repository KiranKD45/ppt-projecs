// Function to create a skeleton loader
function createSkeletonLoader() {
    const skeletonLoader = document.createElement('div');
    skeletonLoader.classList.add('skeleton-loader');
    return skeletonLoader;
  }
  
  // Function to fetch data from JSONPlaceholder API
  async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  // Function to display the data in the browser
  async function displayData() {
    const dataContainer = document.getElementById('data-container');
    
    // Display the skeleton loader while data is being fetched
    dataContainer.innerHTML = '';
    for (let i = 0; i < 20; i++) {
      const skeletonLoader = createSkeletonLoader();
      dataContainer.appendChild(skeletonLoader);
    }
    
    // Fetch data from the API
    const data = await fetchData();
    
    // Remove the skeleton loader and display the fetched data
    dataContainer.innerHTML = '';
    data.forEach(item => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
      dataContainer.appendChild(postElement);
    });
  }
  
  // Call the displayData function when the page loads
  window.onload = displayData;
  