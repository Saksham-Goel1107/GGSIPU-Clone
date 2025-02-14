// setInterval(function() {
//     window.location.reload();
// }, 30000); 

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

const marquees = document.querySelectorAll(".row2 marquee");

marquees.forEach(function (marquee) {
    marquee.addEventListener("mouseover", function () {
        marquee.stop();
    });

    marquee.addEventListener("mouseout", function () {
        marquee.start();
    });
});

function down() {
    const hamburger = document.getElementsByClassName("nav")[0].querySelector("nav")
    hamburger.style.alignItems = "baseline"
    hamburger.style.height = "600px"
    hamburger.style.flexDirection = "column"
    hamburger.style.gap = "20px"
    hamburger.style.padding = "20px 35px"
    hamburger.getElementsByClassName("hidden")[0].style.display = "none"
    const hiddenElements = hamburger.getElementsByTagName("a");
    for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].style.display = "block";
    }
    hamburger.getElementsByTagName("input")[0].style.display = "block"
    hamburger.getElementsByClassName("years25")[0].style.display = "block"
    document.getElementsByClassName("cross")[0].style.display = "block"
}

function up() {
    document.getElementsByClassName("cross")[0].style.display = "none"
    const hamburger = document.getElementsByClassName("nav")[0].querySelector("nav")
    hamburger.getElementsByClassName("hidden")[0].style.display = "block"
    if (window.innerWidth <= 600) {
        hamburger.getElementsByTagName("input")[0].style.display = "none"
    } else {


        hamburger.getElementsByTagName("input")[0].style.display = "block"
    }

    hamburger.getElementsByClassName("years25")[0].style.display = "none"
    const hiddenElements = hamburger.getElementsByTagName("a");
    for (let i = 0; i < hiddenElements.length; i++) {
        hiddenElements[i].style.display = "none";
    }
    hamburger.style.flexDirection = "row"
    hamburger.style.height = "100px"
    hamburger.style.padding = "0"
    hamburger.style.alignItems = "center"




}