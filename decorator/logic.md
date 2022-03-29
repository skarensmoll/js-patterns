# Exercise
The code below implements the functionality that customizes superheroes
for a game. If you study the code below, you’ll see that every superhero has a
power. However, you can also create superheroes that have the following in
addition to the power:

a sword

super speed

a sword and super speed

Existing Code

```js
class SuperHero {
  constructor(name,power) {
    this.name = name
    this.power = power
  }
}

class SuperHeroWithSword extends SuperHero{
  constructor(name,power){
    super(name,power)
    this.sword = true
  }
  hasSword(){
    return `${this.name}'s power is ${this.power}, and he also has a sword now.`
  }
}

class SuperHeroWithSuperSpeed extends SuperHero{
  constructor(name,power){
    super(name,power)
    this.superSpeed = true
  }
  hasSuperSpeed(){
    return `${this.name}'s power is ${this.power}, and he also has the super speed now.`
  }
}


class SuperHeroWithSpeedandSword extends SuperHero{
  constructor(name,power){
    super(name,power)
    this.speedAndSword = true
  }
  hasSpeedAndSword(){
    return `${this.name}'s power is ${this.power}, and he also has both super speed and a sword now.`
  }
}

var superhero1 = new SuperHeroWithSword("Fire Man", "Fire")
console.log(superhero1.hasSword())

var superhero2 = new SuperHeroWithSuperSpeed("Fire Man", "Fire")
console.log(superhero2.hasSuperSpeed())

var superhero3 = new SuperHeroWithSpeedandSword("Ice Man", "Ice")
console.log(superhero3.hasSpeedAndSword())

```

Output:

```
Fire Man's power is Fire, and he also has a sword now.
Fire Man's power is Fire, and he also has the super speed now.
Ice Man's power is Ice, and he also has both super speed and a sword now.
```

### Challenge/Problem

What happens if we have a new superhero with a new power?

we will end up with several subclasses SuperHeroWithXray, SuperHeroWithSuperStrength

How can we fix this?


