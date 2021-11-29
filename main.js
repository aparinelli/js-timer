var $play = $('#play'),
    $resume = $('#resume'),
    hoursInput = document.getElementById('hoursInput'),
    minsInput = document.getElementById('minsInput'),
    secsInput = document.getElementById('secsInput'),
    beep = document.getElementById('beep.mp3');

var hours, mins, secs, totalSecs, secsLeft, loop;
var loopCheck = false;

$play.click(() => {
    secs = (isNaN(int(secsInput.value))) ? 0 : int(secsInput.value);
    mins = (isNaN(int(minsInput.value))) ? 0 : int(minsInput.value);
    hours = (isNaN(int(hoursInput.value))) ? 0 : int(hoursInput.value);
    if (loopCheck !== false) {
        stop()
    } else if (loopCheck === false) {

        totalSecs = hours * 3600 + mins * 60 + secs
        secsLeft = totalSecs;
        loop = setInterval(clock, 1000)

        loopCheck = true
        $play.text('STOP')
    }
})

function clock() {
    // 1. display sketch human readable HHMMSS
    // 2. if secsLeft == 0 ? stop
    // 3. secsLeft--

    sketchDisplay()
    timerDisplay()
    if (secsLeft == 0) {
        stop()
        beep.play()

        let playCount = 1;
        beep.addEventListener('ended', function () {
            if (playCount < 3) {
                this.play()
            }
            playCount++
        })
    } else {
        secsLeft--;
    }
}

function timerDisplay() {
    secs = secsLeft % 60
    mins = Math.floor(secsLeft / 60) % 60
    hours = Math.floor(secsLeft / 3600) % 60

    $('#monitor').text(
        (hours < 10 ? "0" + hours : hours) +
        ":" +
        (mins < 10 ? "0" + mins : mins) +
        ":" +
        (secs < 10 ? "0" + secs : secs)
    )
}

function stop() {
    clearInterval(loop)
    loopCheck = false;
    $play.text('PLAY')

}