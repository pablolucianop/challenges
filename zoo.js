class Animal {
  constructor(name) {
    this.name = name
    this.id = Date.now()
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  speak(speech) {
    if (typeof speech == 'undefined' && typeof this.sound == 'undefined') {
      return
    }
    if (typeof this.sound == 'undefined') {
      console.log(speech)
      return
    }
    if (typeof speech == 'undefined' || speech === '') {
      console.log(this.capitalizeFirstLetter(this.sound))
      return
    }
    console.log(speech.split(' ').join(` ${this.sound} `) + ` ${this.sound}`)
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name)
    this.sound = 'roar'
  }
}

class Tiger extends Animal {
  constructor(name) {
    super(name)
    this.sound = 'grrr'
  }
}

let lion = new Lion('Leo')
lion.speak('Monkeys are ok')
//will log 'Monkeys roar are roar ok roar'

let tiger = new Tiger('Tomy')
tiger.speak('I want my breakfast')
//will log 'I grrr want grrr my grrr breakfast grrr'

//when an animal have nothing to say, but want to speak anyways
tiger.speak()
//will log 'grrr'

//this is a translation function, from any animal to universal
//It could be included in Animal class
let translateToUniversal = (speech) => {
  let universalspeech = speech
    .split(' ')
    .filter((word, index) => {
      if (index % 2 === 0) {
        return word
      }
    })
    .join(' ')
  return universalspeech
}
const somespeech = 'I chirp am chirp a chirp bird chirp'

console.log(translateToUniversal(somespeech))
//will log 'I am a bird'
