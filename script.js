let menu = document.querySelector(".menu");
      let navRight = document.querySelector(".nav-right");
    menu.addEventListener('click', () => {
      if(navRight.style.display === 'none') {
        navRight.style.display = 'flex';
      }else {
        navRight.style.display = 'none';
      }
    })