import { saveContact } from './supabase.js';

document.getElementById("year").textContent = new Date().getFullYear();

// Example animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});

document.querySelectorAll('.feature, .vision-img').forEach(el => observer.observe(el));

// Form handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = form.name.value;
  const email = form.email.value;
  
  const success = await saveContact(name, email);
  
  if (success) {
    alert('Thank you! Your request has been submitted.');
    form.reset();
  } else {
    alert('Something went wrong. Please try again.');
  }
});