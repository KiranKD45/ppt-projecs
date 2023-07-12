// Get the modal elements
const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Function to open the modal
function openModal() {
  modalOverlay.style.opacity = '1';
  modalOverlay.style.visibility = 'visible';
  document.body.classList.add('modal-open');
}

// Function to close the modal
function closeModal() {
  modalOverlay.style.opacity = '0';
  modalOverlay.style.visibility = 'hidden';
  document.body.classList.remove('modal-open');
}

// Event listeners for opening and closing the modal
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
