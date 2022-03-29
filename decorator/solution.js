

class SuperHero {
  constructor(name, power) {
    this.name = name
    this.power = power
  }
}

const SuperHeroWithSword = (superHero) => {
  //Why is this even possible? a class in js at end of the day is just an object
  superHero.hasSword = () => {
    console.log(`${superHero.name}'s power is ${superHero.power}, and he also has a sword now.`);
  }
  return superHero;
}

const SuperHeroWithSuperSpeed = (superHero) => {
  superHero.hasSuperSpeed = () => {
    console.log(`${superHero.name}'s power is ${superHero.power}, and he also has the super speed now.`);
  }
  return superHero;
}


const SuperHeroWithSpeedandSword = (superHero) => {
  superHero.hasSpeedAndSword = () => {
    console.log(`${superHero.name}'s power is ${superHero.power}, and he also has both super speed and a sword now.`);
  }
  return superHero;
}


var superhero1 = new SuperHero("Fire Man", "Fire")
SuperHeroWithSword(superhero1)
SuperHeroWithSuperSpeed(superhero1)
superhero1.hasSword();
superhero1.hasSuperSpeed();
var superhero2 = new SuperHero("Ice Man", "Ice")
SuperHeroWithSpeedandSword(superhero2);
superhero2.hasSpeedAndSword();