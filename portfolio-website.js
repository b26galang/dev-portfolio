let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let townTalkImgs = document.getElementsByClassName("townTalk");
  if (n > townTalkImgs.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < townTalkImgs.length; i++) {
    townTalkImgs[i].style.display = "none";
  }
  townTalkImgs[slideIndex-1].style.display = "block";
}