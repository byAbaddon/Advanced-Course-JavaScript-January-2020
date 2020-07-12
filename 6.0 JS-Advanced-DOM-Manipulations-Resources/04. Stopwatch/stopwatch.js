function stopwatch() {

  let timeDisplay = $('#time')
  let $startBtn = $('#startBtn')
  let $stopBtn = $('#stopBtn')
  let [min, sec] = [0, 0]
  let time;

  $startBtn.on('click', function () {


   timeDisplay.text('00:00')

    $stopBtn.attr('disabled', false)
    $startBtn.attr('disabled', true)
    time = setInterval(function createTime() {
      sec += 1
      if (sec < 10) {
        return timeDisplay.text(`0${min}:0${sec}`)
      }
      if (sec > 59) {
        min++
        sec = 0
      }

      if (min < 10) {
        return timeDisplay.text(`0${min}:${sec}`)
      }
      return timeDisplay.text(`${min}:${sec}`)
    }, 1000);
  })


  $stopBtn.on('click', function () {
    $stopBtn.attr('disabled', true)
    $startBtn.attr('disabled', false)

    clearInterval(time)
    min = 0
    sec = 0

  })

}