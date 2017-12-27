/*scroll top*/
// When the user scrolls down 20px from the top of the document the button will appear
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollTopBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document

document.getElementById('scrollTopBtn').addEventListener("click", function topFunction() {
  document.documentElement.scrollTop = 0;
});
