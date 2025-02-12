// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add interactivity to the sidebar
    const sidebar = document.querySelector('.sidebar');
    sidebar.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  });