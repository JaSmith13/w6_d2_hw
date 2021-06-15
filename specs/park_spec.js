const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let park
    let newDino
    beforeEach(function () {
      park = new Park('Triassic Park')
      park.dinosaurs = [
        new Dinosaur('Trex', 'carnivore', 1000),
        new Dinosaur('Triceratops', 'herbivore', 800),
        new Dinosaur('Stegosaurus', 'herbivore', 500),
        new Dinosaur('Raptor', 'Carnivore', 500)
      ]

      newDino = new Dinosaur('Pterodactyl', 'Carnivore', 800)
      newDino2 = new Dinosaur('Triceratops', 'herbivore', 750)

    })

    it('should have a name', function () {
      const actual = park.name
      assert.strictEqual(actual, 'Triassic Park')  
    });
    
    it('should have a ticket price', function () {
      const actual = park.ticketPrice
      assert.strictEqual(actual, 50)
    });
      
    it('should have a collection of dinosaurs', function () {
      const actual = park.dinosaurs
      assert.deepStrictEqual(actual, [
        new Dinosaur('Trex', 'carnivore', 1000),
        new Dinosaur('Triceratops', 'herbivore', 800),
        new Dinosaur('Stegosaurus', 'herbivore', 500),
        new Dinosaur('Raptor', 'Carnivore', 500)
      ]
      )
    });

    it('should be able to add a dinosaur to its collection', function () {
      park.addDino(newDino)
      const actual = park.dinosaurs.length
      assert.strictEqual(actual, 5)
    });


    it('should be able to remove a dinosaur from its collection', function () {
      park.removeDino('Raptor')
      const actual = park.dinosaurs.length
      assert.strictEqual(actual, 3)
    });

    it('should be able to find the dinosaur that attracts the most visitors', function () {
      const actual = park.topDino()
      assert.strictEqual(actual, park.dinosaurs[0] )
    });

    it('should be able to find all dinosaurs of a particular species', function () {
      park.addDino(newDino2)
      const actual = park.findTypeOfDino('Triceratops')
      assert.deepStrictEqual(actual,[
        new Dinosaur('Triceratops', 'herbivore', 800), 
        new Dinosaur('Triceratops', 'herbivore', 750)])
    });

    it('should be able to calculate the total number of visitors per day', function () {
      const actual = park.totalGuestsPerDay()
      assert.strictEqual(actual, 2800)
    });

    it('should be able to calculate the total number of visitors per year', function () {
      const actual = park.totalGuestsPerYear()
      assert.strictEqual(actual, (2800 * 365))
    });

    it('should be able to calculate total revenue for one year', function () {
      const actual = park.annualProfit()
      assert.strictEqual(actual, ((2800 * 365) * 50))
    });

});
