  /* accordian javascript*/

  let acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
      acc[i].onclick = function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }


  /*scroll top*/
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollTopBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  let scrollTopBtn = document.getElementById('scrollTopBtn');
  scrollTopBtn.addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
  });
