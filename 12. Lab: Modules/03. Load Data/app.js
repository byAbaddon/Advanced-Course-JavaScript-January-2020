result.data = require('./data');

function sort(property) {
    return result.data.sort((a, b) => a[property].localeCompare(b[property]))
        //.sort((a, b) => a[property] - b[property])
        //WTF   TODO...
}

function filter(property, value) {
    return result.data.filter(e => e[property] === value)
}

result.sort = sort;
result.filter = filter;