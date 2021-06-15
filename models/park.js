const Park = function (name) {
    this.name = name
    this.ticketPrice = 50
    this.dinosaurs = []
}

Park.prototype.addDino = function (newDino) {
    this.dinosaurs.push(newDino)
}

Park.prototype.removeDino = function (dinoSpecies) {
    for (let dino of this.dinosaurs){
        if (dino.species === dinoSpecies){
            this.dinosaurs.splice(this.dinosaurs.indexOf(dino), 1)
        }
    }
}

Park.prototype.topDino = function () {
    let topDino = this.dinosaurs[0]
    for (let dino of this.dinosaurs){
        if(dino.guestsAttractedPerDay > topDino.guestsAttractedPerDay){
            topDino = dino
        }
    }

    return topDino   
}

Park.prototype.findTypeOfDino = function (typeOfDino) {
    let dinoTypeList = []
    for (let dino of this.dinosaurs){
        if (dino.species === typeOfDino){
            dinoTypeList.push(dino)
        }
    }
    console.log('all triceratops', dinoTypeList)
    return dinoTypeList
}

Park.prototype.totalGuestsPerDay = function () {
    let totalGuests = 0
    for (let dino of this.dinosaurs){
        totalGuests += dino.guestsAttractedPerDay
    }
    return totalGuests
}

Park.prototype.totalGuestsPerYear = function () {   
    return (this.totalGuestsPerDay()) * 365
}

Park.prototype.annualProfit = function () {
    return (this.totalGuestsPerYear() * this.ticketPrice)
}


module.exports = Park