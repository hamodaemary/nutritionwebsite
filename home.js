document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('foodbtn');
  btn.addEventListener('click', () => {
    const newPageUrl = 'food.html'; // replace with the URL of your new HTML file
    window.open(newPageUrl, '_blank');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const btnc = document.getElementById('contactbtn');
  btnc.addEventListener('click', () => {
    const newPageUrlc = 'CONTACT/index.html'; // replace with the URL of your new HTML file
    window.open(newPageUrlc, '_blank');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const btne = document.getElementById('subtn');
  btne.addEventListener('click', () => {
    const newPageUrlc = 'subscription/index.html'; // replace with the URL of your new HTML file
    window.open(newPageUrlc, '_blank');
  });
});