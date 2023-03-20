function createPage () {
    const content = document.getElementById('content')

    const header = document.createElement("header");

    // const title = document.createElement("h1");
    // title.classList.add('title')
    // title.textContent = 'Eat Gluten Not Meat'

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add('button-container')

    const welcomeButton = document.createElement("button");
    welcomeButton.classList.add('welcome-button')
    welcomeButton.textContent = 'Welcome'

    const menuButton = document.createElement("button");
    menuButton.classList.add('menu-button')
    menuButton.textContent = 'Menu'

    const contactButton = document.createElement("button");
    contactButton.classList.add('contact-button')
    contactButton.textContent = 'Contact us'

    const main = document.createElement("main");
    main.classList.add('main')

    // const welcomeCntr = document.createElement("div");
    // welcomeCntr.classList.add('welcome-cntr')

    // const welcomeMsg = document.createElement("h2");
    // welcomeMsg.classList.add('welcome-msg')
    // welcomeMsg.textContent = 'Eat Gluten Not Meat'

    const footer = document.createElement('footer')

    const footerMsg = document.createElement('span')
    footerMsg.classList.add('by-bepsik')
    footerMsg.innerHTML = ('Made with love by <a href="#">bepsik777</a>')

    content.appendChild(header)
    content.appendChild(main)
    content.appendChild(footer)
    // header.appendChild(title)
    header.appendChild(buttonContainer)
    buttonContainer.appendChild(welcomeButton)
    buttonContainer.appendChild(menuButton)
    buttonContainer.appendChild(contactButton)
    // main.append(welcomeCntr)
    // welcomeCntr.appendChild(welcomeMsg)
    footer.appendChild(footerMsg)

    return {welcomeButton, menuButton, contactButton}
}

export default createPage