// setInterval(function() {
//     window.location.reload();
// }, 30000); 

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

const marquees = document.querySelectorAll(".row2 marquee");

marquees.forEach(function(marquee) {
    marquee.addEventListener("mouseover", function() {
        marquee.stop();
    });

    marquee.addEventListener("mouseout", function() {
        marquee.start();
    });
});
