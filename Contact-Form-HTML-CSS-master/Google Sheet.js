const scriptURL = 'https://script.google.com/macros/s/AKfycbwaQ9FyPJsr0Htubj7w2GcGuNXYAmRK6IAA6vlvnELkGBDi5VJZE8e_30yL5D4MGQF2NQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})