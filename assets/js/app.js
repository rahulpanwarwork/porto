var headerToggle = document.querySelector(".porto-toggle");
var asideToggle = document.querySelector(".aside-toggle");
var asideWrapper = document.querySelector(".aside-wrapper");
var asidecontent = document.querySelector(".aside-content");
// var x = asideWrapper.classList.length;
// console.log(x);
headerToggle.addEventListener("click", showAside);
function showAside() {
  asideToggle.style.display = "inline-block";
  asideWrapper.classList.remove("d-none");
}
asideToggle.addEventListener("click", hideAside);
function hideAside() {
//   var classLen = asideWrapper.classList.length;
//   if (classLen <= 2) {
    asideToggle.style.display = "none";
    asideWrapper.classList.add("d-none");
//   }
}

window.addEventListener("click", function (e) {
  if (document.querySelector(".aside-content").contains(e.target)) {
    // Clicked in box
    console.log("click inside");
  } else {
    // Clicked outside the box
    console.log("click outside");

    // var stil = window.getComputedStyle(asideToggle).getPropertyValue("display");
    // if(stil === "none"){
    //     showAside()
    // }else if(stil === "inline-block"){
    //     hideAside();
    // } 

  }
});
