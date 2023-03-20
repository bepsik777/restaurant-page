import makeWelcomePage from "./welcome-page.js"

import makeWelcomeMain from "./welcome-main.js"

import makeMenuPage from "./menu.js"

import makeContactMain from "./contact.js"


const buttons = makeWelcomePage()
makeWelcomeMain()
// makeContactMain()

buttons.menuButton.addEventListener('click', makeMenuPage)
buttons.welcomeButton.addEventListener('click', makeWelcomeMain)
buttons.contactButton.addEventListener('click', makeContactMain)
