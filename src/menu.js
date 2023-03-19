function createMenu () {
    const content = document.getElementById('content')  
    
    // SEITAN BURGER
    const seitanBurger = document.createElement('img')
    seitanBurger.setAttribute('src', './seitan-burger.jpeg')
    seitanBurger.classList.add('seitan-burger')
    const seitanBurgerTitle = document.createElement('h2')
    seitanBurgerTitle.classList.add('title')
    seitanBurgerTitle.textContent = "Seitan Burger"
    const seitanBurgerDescription = document.createElement('p')
    seitanBurgerDescription.textContent = "Delicious burgers made with seitan, not chicken! main ingredients: bufallo and seitan, or seitan and bufallo."



    // SEITAN BURGER WITH FRIES
    const seitanBurgerWithFries = document.createElement('img')
    seitanBurgerWithFries.setAttribute('src', './seitan-burger-with-fries.jpeg')
    seitanBurgerWithFries.classList.add('seitan-burger-with-fries')
    const seitanBurgerWithFriesTitle = document.createElement('h2')
    seitanBurgerWithFriesTitle.classList.add('title')
    seitanBurgerWithFriesTitle.textContent = "Seitan Burger With Fries"
    const seitanBurgerWithFriesDescription = document.createElement('p')
    seitanBurgerWithFriesDescription.textContent = "The Burger with The Fries!"

    // SEITAN STRIPS
    const seitanStrips = document.createElement('img')
    seitanStrips.setAttribute('src', './seitan-strips-with-fries.jpeg')
    seitanStrips.classList.add('seitan-strips')
    const seitanStripsTitle = document.createElement('h2')
    seitanStripsTitle.classList.add('title')
    seitanStripsTitle.textContent = "Seitan Strips"
    const seitanStripsDescription = document.createElement('p')
    seitanStripsDescription.textContent = 'If you take the bun out of the equation, this is what you get. Comes with garlic sauce. And bufallo obviously.'
    
    // PARTY BOX
    const partyBox = document.createElement('img')
    partyBox.setAttribute('src', './party-box.jpeg')
    partyBox.classList.add('party-box')
    const partyBoxTitle = document.createElement('h2')
    partyBoxTitle.classList.add('title')
    partyBoxTitle.textContent = "Party Box"
    const partyBoxDescription = document.createElement('p')
    partyBoxDescription.textContent = "Same as seitan strips, but for an army."


    const main = document.querySelector('.main')

    const mainMenu = document.createElement('main')
    mainMenu.classList.add('main')
    mainMenu.classList.add('menu')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')

    const containers = [];
    const pictureContainers = [];
    const descriptionContainers = []

    for (let i = 0; i < 4; i++) {
        const container = document.createElement('div')
        container.classList.add('container')
        container.classList.add(`${i}`)
        menuContainer.appendChild(container)
        containers.push(container)
    }
    

    containers.forEach(container => {
        console.log(container)
        const pictureContainer = document.createElement('div')
        pictureContainer.classList.add('picture-container')
        const descriptionContainer = document.createElement('div')
        descriptionContainer.classList.add('description-container')
        container.appendChild(pictureContainer)
        container.appendChild(descriptionContainer)
        pictureContainers.push(pictureContainer)
        descriptionContainers.push(descriptionContainer)
    })

     
    pictureContainers[0].appendChild(seitanBurger)
    descriptionContainers[0].append(seitanBurgerTitle, seitanBurgerDescription)
    pictureContainers[1].appendChild(seitanBurgerWithFries)
    descriptionContainers[1].append(seitanBurgerWithFriesTitle, seitanBurgerWithFriesDescription)
    pictureContainers[2].appendChild(seitanStrips)
    descriptionContainers[2].append(seitanStripsTitle, seitanStripsDescription)
    pictureContainers[3].appendChild(partyBox)
    descriptionContainers[3].append(partyBoxTitle, partyBoxDescription)
    mainMenu.appendChild(menuContainer)

    content.replaceChild(mainMenu, main)
}

export default createMenu