function makeContactMain () {
    const content = document.querySelector('#content')
    const previousMain = document.querySelector('.main')
    const main = document.createElement('main')

    main.classList.add('main')
    main.classList.add('contact')

    const contactContainer = document.createElement('form')
    contactContainer.classList.add('contact-container')

    const restaurantName = document.createElement('h2')
    restaurantName.textContent = 'Eat Gluten Not Meat'
    
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const list = document.createElement('ul')
    list.classList.add('list')
    for (let i = 0; i < 7; i++) {
        const bullet = document.createElement('li')
        bullet.classList.add('bullet')
        bullet.classList.add(`${i}`)
        bullet.textContent = `${weekdays[i]}: 10am - 11pm`
        if(weekdays[i] === 'Sunday') bullet.textContent = `${weekdays[i]}: closed`
        list.appendChild(bullet)
    }

    const localisationInfo = document.createElement('p');
    localisationInfo.innerHTML = 'ul. dwudziesta pierwsza/37</br> 02-137, Nibylandia'

    contactContainer.append(restaurantName, list, localisationInfo)
    main.appendChild(contactContainer)
    content.replaceChild(main, previousMain)
}

export default makeContactMain