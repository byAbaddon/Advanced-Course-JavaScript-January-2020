function heroicInventory(inputArr) {
  let arr = [...inputArr]
  let collection = []

  for (const el of arr) {
    [name, level, items] = el.split(' / ')
      items = items ? items.split(', ') : []
      
  let objHeros = {name, level: +level, items: items}
    collection.push(objHeros)
  }
  console.log(JSON.stringify(collection));
}

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])


// heroicInventory([
// 'Isacc / 25 / Apple, GravityGun',
// 'Derek / 12 / BarrelVest, DestructionSword',
// 'Hes / 1 / Desolator, Sentinel, Antara'])
