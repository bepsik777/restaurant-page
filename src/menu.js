function createMenu () {
    const content = document.getElementById('content')
    const seitanBurger = document.createElement('img')
    seitanBurger.setAttribute('src', './seitan-burger.jpeg')
    seitanBurger.classList.add('seitan-burger')
    const seitanBurgerWithFries = document.createElement('img')
    const seitanStrips = document.createElement('img')
    const partyBox = document.createElement('img')

    const main = document.querySelector('.main')

    const mainMenu = document.createElement('main')
    mainMenu.classList.add('main-menu')

    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')

    const containers = [];
    const pictureContainers = [];

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
        pictureContainer.dataset.id = container.classList[1]
        pictureContainer.classList.add('picture-container')
        const descriptionContainer = document.createElement('div')
        descriptionContainer.classList.add('description-container')
        container.appendChild(pictureContainer)
        container.appendChild(descriptionContainer)
        pictureContainers.push(pictureContainer)
    })

    pictureContainers[0].appendChild(seitanBurger)
    mainMenu.appendChild(menuContainer)

    content.replaceChild(mainMenu, main)
}

export default createMenu