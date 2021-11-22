var $play = $('#play'),
    $pause = $('#pause'),
    $resume = $('#resume'),
    $audio = $('#audio')[0]

var loop;
var loopCheck = false;
var timer = 0,
    secs = 0,
    mins = 0,
    hours = 0;

$play.click(() => {
    // $audio.play();
    if (loopCheck == false) {
        loop = setInterval(clock, 10)
        slider.value = 10
        sliderVal.innerHTML = 10 + "ms per loop"

        loopCheck = true;

    }
});

$pause.click(() => {
    clearInterval(loop)
    loopCheck = false;
})

$resume.click(() => {
    if (loopCheck === false) {
        loop = setInterval(clock, slider.value)
        loopCheck = true
    }
})

function clock() {
    timer++;
    secs = timer % 60
    mins = Math.floor(timer / 60) % 60
    hours = Math.floor(timer / 3600) % 24 // timer / 3600 mins = divided by 60 again
    timerDisplay()
    sketchDisplay()
}

function timerDisplay() {
    $('#monitor').text(
        (hours < 10 ? "0" + hours : hours) +
        ":" +
        (mins < 10 ? "0" + mins : mins) +
        ":" +
        (secs < 10 ? "0" + secs : secs)
    )
}

var slider = document.getElementById('intervalSlider'),
    sliderVal = document.getElementById('intervalValue');

slider.onchange = function () {
    sliderVal.innerHTML = slider.value + "ms per loop";

    clearInterval(loop)
    loop = setInterval(clock, slider.value)
    loopCheck = true;

}