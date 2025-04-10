const myObj = {
    js : 'javascript',
    cpp : 'c++',
    rb: 'ruby',
    swift : 'swift'
}

for (const key in myObj) {
    console.log(`${key} is shortcut for ${myObj[key]}`)
}


//forin gives keys as number in array 

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key)
    console.log(programming[key])
}


//maps are not iterable in forin
const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "French")
map.set('IN', "India")

console.log(map)

for (const key in map) {       // to print seprate values in key value form
    console.log(key)
}

