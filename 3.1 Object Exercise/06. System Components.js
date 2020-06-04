function systemComponents(inputArr) {
  let arr = [...inputArr]
  let sysMap = new Map();

  for (const el of arr) {
    let [system, component, subComponent] = el.split(' | ')

    if (!sysMap.get(system)) {
      sysMap.set(system, new Map());
    }

    let subSet = sysMap.get(system).get(component);
    if (!subSet) {
      sysMap.get(system).set(component, []);
      subSet = sysMap.get(system).get(component);
    }

    subSet.push(subComponent);
  }

  let ident = '|||';
  let sortSystems = (a, b) => (b[1].size - a[1].size !== 0) ? b[1].size - a[1].size :
    a[0] < b[0] ? -1 :
    a[0] > b[0] ? 1 :
    null

  let result = [...sysMap]
    .sort((a, b) => sortSystems(a, b))
    .map(sys => sys[0] + '\n' + [...sys[1]]
    .sort((a, b) => b[1].length - a[1].length)
    .map(c => ident + c[0] + '\n' + ident + ident + c[1].join('\n' + ident + ident))
    .join('\n')
    ).join('\n').trim()

  console.log(result)
}

// systemComponents([
//   'SULS | Main Site | Home Page',
//   'SULS | Main Site | Login Page',
//   'SULS | Main Site | Register Page',
//   'SULS | Judge Site | Login Page',
//   'SULS | Judge Site | Submittion Page',
//   'Lambda | CoreA | A23',
//   'SULS | Digital Site | Login Page',
//   'Lambda | CoreB | B24',
//   'Lambda | CoreA | A24',
//   'Lambda | CoreA | A25',
//   'Lambda | CoreC | C4',
//   'Indice | Session | Default Storage',
//   'Indice | Session | Default Security',
// ])