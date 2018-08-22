const leads = [
  "Sorry I'm late, but",
  'Sorry I forgot your birthday,but',
  "I couldn't come to your wedding,",
  "You won't beleive this:",
  'This sounds crazy, but',
  'This sounds unbeleivable but',
  'Holy shit!',
  'Oh man, '
]

const perpetrators = [
  'the lord of darkness',
  'Godzilla',
  'the human centipede',
  'a tiny lizard',
  'the first page of Twilight',
  'the inventor of the slanket',
  'the director of 101 dalmations',
  'the little kid from Indiana Jones',
  'a man with six fingers on his hand',
  'Mayor McCheese',
  'Red Foreman',
  'Scrooge McDuck',
  'the Ghostbusters',
  'Diablo, the god of death',
  'Harry Potter',
  'Captain Kirk',
  'Dobby the elf',
  'Sherlock Holmes',
  'my speakers',
  'Chtulu',
  'a homeless guy',
  'a frag grenade',
  'a lady with a spandex watch',
  'a toothpick',
  'the creators of southpark'
]

const factors = [
  'tried to kill me',
  'ran me over with a tractor',
  'ate my homework',
  'tried to seduce me',
  'stole my car',
  'stole my identity',
  'beamed me up',
  'gave me knucle sandwich',
  'ate my lunch',
  'dropped kicked me into another dimension',
  'ripped a hole in the space time continuum',
  'did a moonwalk on my porsche',
  'TPed by house',
  'killed Kenny',
  'sent me to Narnia',
  'gave me a hickey',
  'set my house on fire',
  'kidnapped my lizard'
]

function getRandomItem (arr = []) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function strToArr (str) {
  if (typeof str === 'string') {
    return [str]
  }

  return str
}

function getRandomExcuse (opts = {}) {
  return `${getRandomItem(strToArr(opts.leads || leads))} ${getRandomItem(strToArr(opts.perpetrators || perpetrators))} ${getRandomItem(strToArr(opts.factors || factors))}`
}

module.exports = getRandomExcuse
