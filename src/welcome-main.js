
function makeWelcomeMain () {
    const content = document.getElementById('content')
    const previousMain = document.querySelector('.main')

    
    const main = document.createElement("main");
    main.classList.add('main')
    main.classList.add('welcome')

    const welcomeCntr = document.createElement("div");
    welcomeCntr.classList.add('welcome-cntr')

    const welcomeMsg = document.createElement("h2");
    welcomeMsg.classList.add('welcome-msg')
    welcomeMsg.textContent = 'Eat Gluten Not Meat'

    main.append(welcomeCntr)
    welcomeCntr.appendChild(welcomeMsg)

    content.replaceChild(main, previousMain)
    console.log(main)
    console.log(previousMain)
}

export default makeWelcomeMain