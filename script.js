const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
  box.addEventListener('click', function () {
    boxes.forEach((b) => b.classList.remove('expanded'));
    if (!this.classList.contains('expanded')) {
      this.classList.add('expanded');
    }
  });
});