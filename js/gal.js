/* Gallery javascript*/

// Get the modal
let modal = document.getElementById('myModal');
let modal2 = document.getElementById('myModal2');
let modal3 = document.getElementById('myModal3');
let modal4 = document.getElementById('myModal4');
let modal5 = document.getElementById('myModal5');
let modal6 = document.getElementById('myModal6');
let modal7 = document.getElementById('myModal7');
let modal8 = document.getElementById('myModal8');
let modal9 = document.getElementById('myModal9');

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById('myImg');
let img2 = document.getElementById('myImg2');
let img3 = document.getElementById('myImg3');
let img4 = document.getElementById('myImg4');
let img5 = document.getElementById('myImg5');
let img6 = document.getElementById('myImg6');
let img7 = document.getElementById('myImg7');
let img8 = document.getElementById('myImg8');
let img9 = document.getElementById('myImg9');

let modalImg = document.getElementById("img01");
let modalImg2 = document.getElementById("img02");
let modalImg3 = document.getElementById("img03");
let modalImg4 = document.getElementById("img04");
let modalImg5 = document.getElementById("img05");
let modalImg6 = document.getElementById("img06");
let modalImg7 = document.getElementById("img07");
let modalImg8 = document.getElementById("img08");
let modalImg9 = document.getElementById("img09");

let captionText = document.getElementById("caption");
let captionText2 = document.getElementById("caption2");
let captionText3 = document.getElementById("caption3");
let captionText4 = document.getElementById("caption4");
let captionText5 = document.getElementById("caption5");
let captionText6 = document.getElementById("caption6");
let captionText7 = document.getElementById("caption7");
let captionText8 = document.getElementById("caption8");
let captionText9 = document.getElementById("caption9");

img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt
});

img2.addEventListener("click", function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt
});

img3.addEventListener("click", function(){
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt
});

img4.addEventListener("click", function(){
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt
});

img5.addEventListener("click", function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
    captionText5.innerHTML = this.alt
});

img6.addEventListener("click", function(){
    modal6.style.display = "block";
    modalImg6.src = this.src;
    captionText6.innerHTML = this.alt
});

img7.addEventListener("click", function(){
    modal7.style.display = "block";
    modalImg7.src = this.src;
    captionText7.innerHTML = this.alt
});

img8.addEventListener("click", function(){
    modal8.style.display = "block";
    modalImg8.src = this.src;
    captionText8.innerHTML = this.alt
});

img9.addEventListener("click", function(){
    modal9.style.display = "block";
    modalImg9.src = this.src;
    captionText9.innerHTML = this.alt
});

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("closeGal")[0];
let close2 = document.getElementById("close2");
let close3 = document.getElementById("close3");
let close4 = document.getElementById("close4");
let close5 = document.getElementById("close5");
let close6 = document.getElementById("close6");
let close7 = document.getElementById("close7");
let close8 = document.getElementById("close8");
let close9 = document.getElementById("close9");

/* When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}*/
span.addEventListener("click", function() {
  modal.style.display = "none";
});

close2.addEventListener("click", function() {
  modal2.style.display = "none";
});

close3.addEventListener("click", function() {
  modal3.style.display = "none";
});

close4.addEventListener("click", function() {
  modal4.style.display = "none";
});

close5.addEventListener("click", function() {
  modal5.style.display = "none";
});

close6.addEventListener("click", function() {
  modal6.style.display = "none";
});

close7.addEventListener("click", function() {
  modal7.style.display = "none";
});

close8.addEventListener("click", function() {
  modal8.style.display = "none";
});

close9.addEventListener("click", function() {
  modal9.style.display = "none";
});
