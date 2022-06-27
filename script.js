// Constant values
const AGE_INCREMENT = 500
const HUNGER_INCREMENT = 600
const TIREDNESS_INCREMENT = 400
const BOREDOM_INCREMENT = 300

const MAX_AGE = 100
const MAX_HUNGER = 25
const MAX_TIREDNESS = 20
const MAX_BOREDOM = 50

// State Variables
let age
let hunger
let tiredness
let boredom

// Cached element references
const startGameButton = document.querySelector('#start-game-button')
const welcomeMessageContainer = document.querySelector('#welcome-message-container')
const mainGameContainer = document.querySelector('#main-game-container')
const ageTracker = document.querySelector('#age-tracker')
const hungerTracker = document.querySelector('#hunger-tracker')
const tirednessTracker = document.querySelector('#tiredness-tracker')
const boredomTracker = document.querySelector('#boredom-tracker')
const feedButton = document.querySelector('#feed-button')
const sleepButton = document.querySelector('#sleep-button')
const playButton = document.querySelector('#play-button')
const cheatCode = document.querySelector('#cheat')

// Functions
const setGameView = function () {
  welcomeMessageContainer.classList.add('hide')
  mainGameContainer.classList.remove('hide')

  ageTracker.innerText = age
  hungerTracker.innerText = hunger
  tirednessTracker.innerText = tiredness
  boredomTracker.innerText = boredom
}

const setGameOverView = function () {
  // You probably want to add a game over view rather than go back to the welcome view
  welcomeMessageContainer.classList.remove('hide')
  mainGameContainer.classList.add('hide')
}

const resetStateVariables = function () {
  age = 0
  hunger = 0
  boredom = 0
  tiredness = 0
}

const handleFeedClick = function () {
  if (hunger > 0) {
    hunger--
  }
  
  hungerTracker.innerText = hunger
}

const handleSleepClick = function () {
  if (tiredness > 0) {
    tiredness = 0
  }

  tirednessTracker.innerText = tiredness
}

const handlePlayClick = function () {
  if (boredom > 0) {
    boredom -= 5
  }

  boredomTracker.innerText = boredom
}

const startIntervals = function () {
  const ageInterval = setInterval(() => {
    age++
    console.log(age)

    if (age > MAX_AGE) {
      endGame()
    }
    ageTracker.innerText = age
  }, AGE_INCREMENT)

  const hungerInterval = setInterval(() => {
    hunger++
    console.log(hunger)
    if (hunger > MAX_HUNGER) {
      endGame()
    }
    hungerTracker.innerText = hunger
  }, HUNGER_INCREMENT)

  const tirednessInterval = setInterval(() => {
    tiredness++
    console.log(tiredness)
    if (tiredness > MAX_TIREDNESS) {
      endGame()
    }
    tirednessTracker.innerText = tiredness
  }, TIREDNESS_INCREMENT)

  const boredomInterval = setInterval(() => {
    boredom++
    console.log(boredom)
    if (boredom > MAX_BOREDOM) {
      endGame()
    }
    boredomTracker.innerText = boredom
  }, BOREDOM_INCREMENT)

  const endGame = function() {
    clearInterval(ageInterval)
    clearInterval(hungerInterval)
    clearInterval(tirednessInterval)
    clearInterval(boredomInterval)
    setGameOverView()
  }
}

const init = function () {
  resetStateVariables()
  setGameView()
  startIntervals()
}

// Attach event listeners
startGameButton.addEventListener('click', init)
feedButton.addEventListener('click', handleFeedClick)
sleepButton.addEventListener('click', handleSleepClick)
playButton.addEventListener('click', handlePlayClick)
cheatCode.addEventListener('click', () => console.log('You win!'))
