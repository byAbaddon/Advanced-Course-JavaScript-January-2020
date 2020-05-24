function roadRadar(inputArr) {
  let [speed, place] = [...inputArr]
  let radarObj = {'residential': 20 ,'city': 50, 'interstate': 90 ,'motorway': 130}
  let result = 0
  let testSpeed = radarObj[place] - speed

  if (testSpeed >= 0) {
     return
  }

  testSpeed = Math.abs(testSpeed)

  if (testSpeed <= 20) {
    result = 'speeding'
  } else if (testSpeed  <= 40) {
    result = 'excessive speeding'
  } else {
    result = 'reckless driving'
  } 

  console.log(result);
}

//roadRadar([40, 'city'])         //none
//roadRadar([21, 'residential'])  //speeding
//roadRadar([120, 'interstate'])  //excessive speeding
//roadRadar([200, 'motorway'])    //reckless driving
