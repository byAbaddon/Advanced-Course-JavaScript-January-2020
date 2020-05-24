function timeToWalk(...arg) {
  let [steps, meters, speed] = [...arg]

  let minute = ~~(steps * meters / 500)
  let allTime = (steps * meters / speed / 1000 * 60)
  let second = ((minute + allTime) * 60).toFixed()
  let time = new Date(0, 0, 0, 0, 0, second)
  console.log(time.toString().split(' ')[4].substr(0, 8));
}

// timeToWalk(4000, 0.60, 5)
// timeToWalk(2564, 0.70, 5.5)