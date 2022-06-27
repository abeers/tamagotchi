- Create a header/heading to welcome the user
- Create a button to start the game
  - What happens when I click the button?
  - Welcome message should become hidden
  - Show the main game/tamagotchi
  - Do we need two pages?
    - Yes or no
    - Single-page applications vs. multiple-page applications
  - Start/Initialize the game
    - Create a tamagotchi/pet
      - Properties
        - Hunger
        - Tiredness
        - Boredom
        - Age
        - Status/Living?
      - Methods
        - Feed
        - Sleep
        - Play
        - Age?
    - Start some timers to increment the properties (setInterval? setTimeout?)
      - Hunger increments every 6 seconds
      - Tiredness: 4 seconds
      - Boredom: 3 seconds
      - Age: 5 seconds
  - Buttons to perform actions
    - Call methods for tamagotchi
    - Consider menu buttons
  - What happens if we fail to take care of the tamagotchi?
    - If the tamagotchi reaches maximum levels of any of the properties, the game is over
      - Hunger: 25
      - Tiredness: 20
      - Boredom: 50
      - Age: 100
    - If the tamagotchi dies, game over message 



const MAX_AGE = 90
const MAX_HUNGER = 25
const MAX_BOREDOM = 50

const playButton = document.querySelector('#play-button')

playButton.classList
playButton.classList
playButton.classList
playButton.classList

if (age > MAX_AGE) {
  tamagotchi.die()
}

if (age > MAX_AGE) {
  gameOver()
}