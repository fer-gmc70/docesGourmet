document.addEventListener('DOMContentLoaded', function() {
    var stream = document.querySelector('.sliders__stream');
    var items = document.querySelectorAll('.sliders__item');
    var prev = document.querySelector('.sliders__prev');
    var next = document.querySelector('.sliders__next');
  
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.sliders__item');
    });
  
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.sliders__item');
    });
  });