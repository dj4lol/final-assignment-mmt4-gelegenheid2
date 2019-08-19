var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var player = videojs('player');
var playBtn = $('#play');
var rewindBtn = $('#rewind')

player.on('ready', function() {

    playBtn.click(function() {

        if (!player.paused()) {
            player.pause();
        } else {
            player.play();
        }
    })

    rewindBtn.click(function() {
        var time = player.currentTime();
        player.currentTime(time - 10);
    });

});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}