// Toggle the side menu
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
  }
  
  // Show booking modal
  function bookClass(className) {
    const modal = document.getElementById('bookingModal');
    const message = document.getElementById('bookingMessage');
    message.innerHTML = `You have successfully booked the ${className}. Enjoy your workout!`;
    modal.style.display = "block";
  }
  
  // Show trainer profile modal
  function viewTrainerProfile(name, specialty) {
    const modal = document.getElementById('trainerModal');
    const message = document.getElementById('trainerMessage');
    message.innerHTML = `<strong>${name}</strong><br>Specialty: ${specialty}`;
    modal.style.display = "block";
  }
  
  // Close modals
  function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      modal.style.display = "none";
    });
  }
  