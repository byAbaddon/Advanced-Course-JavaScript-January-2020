function arenaTier(inputArr) {
  let arr = [...inputArr]
  let warriorsObj = {}
  let warScore = {}

  while (arr.length > 1) {
    let [gladiator, technique, skill] = arr.shift().split(' -> ')
    skill = Number(skill)

    if (gladiator.length < 10) { // no battle

      if (!warriorsObj[gladiator]) {
        warriorsObj[gladiator] = {}
        warScore[gladiator] = skill
      } else {
        warScore[gladiator] += skill
      }

      var nestedWarriorObj = warriorsObj[gladiator]

      if (!nestedWarriorObj[technique]) {
        nestedWarriorObj[technique] = skill
      } else {
        if (nestedWarriorObj[technique] < skill) {
          nestedWarriorObj[technique] = skill
        }

        warriorsObj[gladiator] = nestedWarriorObj
      }

    } else {
      let [gladiatorOne, gladiatorTwo] = gladiator.split(' vs ')
      try {
        obj1 = Object.keys(warriorsObj[gladiatorOne])
        obj2 = Object.keys(warriorsObj[gladiatorTwo])
        for (let i = 0; i < obj1.length; i++) {
          if (obj1[i] === obj2[0]) {
            if (warriorsObj[gladiatorOne][obj1[i]] > warriorsObj[gladiatorTwo][obj2[0]]) {
              delete warriorsObj[gladiatorTwo]
            } else {
              delete warriorsObj[gladiatorOne]
            }
          }
        }
      } catch (error) {}

    }
  }


  for (const key in warriorsObj) {
    let sum = 0;
    let outsideObj = warriorsObj[key];
    for (const insideKey in outsideObj) {
        sum += outsideObj[insideKey];
    }
    outsideObj['sum'] = sum;
}


Object.entries(warriorsObj)
    .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
    .forEach(element => {
        console.log(`${element[0]}: ${element[1].sum} skill`);
        delete element[1].sum;
        Object.entries(element[1])
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(element => {
                console.log(` - ${element[0]} <!> ${element[1]}`);
            });
    });
// warriorsObj = Object.entries(warriorsObj).sort((a, b) => (a.length - b.length) ? 1 : -1)

// console.log(warriorsObj);

//   warScore = Object.entries(warScore)
//   .sort((a, b)=> a[0].localeCompare(b[0]))
//   .sort((a, b) => b[1] - a[1])

//   for (const el of warScore) {
//     console.log(`${el[0]}: ${el[1]} skill`);

// //console.log(warriorsObj[el[0]]);

  

//   }


}

arenaTier(
  [
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
  ]
  // [
  //   'Pesho -> Duck -> 400',
  //   'Julius -> Shield -> 150',
  //   'Gladius -> Heal -> 200',
  //   'Gladius -> Support -> 250',
  //   'Gladius -> Shield -> 250',
  //   'Pesho vs Gladius',
  //   'Gladius vs Julius',
  //   'Gladius vs Gosho',
  //   'Ave Cesar'
  // ]
)




function solve(input) {
  let obj = {};

  for (const line of input) {
      if (line === 'Ave Cesar') {
          break;
      }
      let element = line.split(' ');
      if (element[1] === '->') {
          let theLine = line.split(' -> ');
          let gladiator = theLine[0];
          let technique = theLine[1];
          let skillAmount = Number(theLine[2]);
          if (!obj.hasOwnProperty(gladiator)) {
              obj[gladiator] = {};
          }
          if (!obj[gladiator].hasOwnProperty(technique)
              || obj[gladiator][technique] < skillAmount) {
              obj[gladiator][technique] = skillAmount;
          }
      } else if (element[1] === 'vs') {
          let theLine = line.split(' vs ');
          let gladiator1 = theLine[0];
          let gladiator2 = theLine[1];
          if (obj.hasOwnProperty(gladiator1)
              && obj.hasOwnProperty(gladiator2)) {
              let gladiator1Techniques = (obj[gladiator1]);
              let gladiator2Techniques = (obj[gladiator2]);
              for (const key in gladiator1Techniques) {

                  if (gladiator2Techniques.hasOwnProperty(key)) {
                      if (gladiator1Techniques[key] > gladiator2Techniques[key]) {
                          delete obj[gladiator2];
                      } else if (gladiator1Techniques[key] < gladiator2Techniques[key]) {
                          delete obj[gladiator1];
                      }
                  }
              }
          }
      }
  }
  for (const key in obj) {
      let sum = 0;
      let outsideObj = obj[key];
      for (const insideKey in outsideObj) {
          sum += outsideObj[insideKey];
      }
      outsideObj['sum'] = sum;
  }
  console.log(obj);

  Object.entries(obj)
      .sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
      .forEach(element => {
          console.log(`${element[0]}: ${element[1].sum} skill`);
          delete element[1].sum;
          Object.entries(element[1])
              .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
              .forEach(element => {
                  console.log(` - ${element[0]} <!> ${element[1]}`);
              });
      });
}