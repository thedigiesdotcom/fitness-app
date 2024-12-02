// Toggle side menu visibility
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
  }
  
  // Function to handle booking
  function bookClass(className, selectedTime) {
    const modal = document.getElementById('bookingModal');
    const message = document.getElementById('bookingMessage');
    message.innerHTML = `You have successfully booked the <strong>${className}</strong> for <strong>${selectedTime}</strong>. Enjoy your workout!`;
    modal.style.display = "block";
  }
  
  // Close the modal
  function closeModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = "none";
  }
  