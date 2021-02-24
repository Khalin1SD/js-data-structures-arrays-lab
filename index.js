// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {

drivers.push(name)

}

function destructivelyPrependDriver(name) {

drivers.unshift(name) 

}

function destructivelyRemoveLastDriver() {

drivers.splice(-1,1) 

}

function destructivelyRemoveFirstDriver() {

drivers.splice(0,1) 

}

function appendDriver(name) {

const driversNew = drivers.slice()
driversNew.push(name) 

return driversNew

}

function prependDriver(name) {

const driversNew = drivers.slice()
driversNew.unshift(name) 
return driversNew

}

function removeLastDriver(name) {

const driversNew = drivers.slice()
driversNew.splice(-1, 1) 

return driversNew

}

function removeFirstDriver(name) {

const driversNew = drivers.slice()
driversNew.splice(0, 1) 

return driversNew

}



