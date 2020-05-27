function townsToJSON(inputArr) {
  let arr = [...inputArr]
  let townsObj = [];

  for (let i = 1; i < arr.length; i++) {
    let [town, latitude, longitude] = arr[i]//.match(/[^| ]+/g)
      .split('|')
      .filter(e => e !== '')
      .map(e => e.trim())

    townsObj.push({
      Town: town,
      Latitude: +parseFloat(latitude).toFixed(2),
      Longitude: +parseFloat(longitude).toFixed(2),
    });
  }

  console.log(JSON.stringify(townsObj));
}

// townsToJSON(
//   ['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |'
//   ]
// )