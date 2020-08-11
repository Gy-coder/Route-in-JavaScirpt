const div1 = document.createElement('div')
div1.innerHTML = `1`

const div2 = document.createElement('div')
div2.innerHTML = `2`

const div3 = document.createElement('div')
div3.innerHTML = `3`

const div4 = document.createElement('div')
div4.innerHTML = `4`

const routeTable = {
    '#1': div1,
    '#2': div2,
    '#3': div3,
    '#4': div4
}

route()

function route() {
    let number = window.location.hash
    console.log(number)
    if (!number) {
        number = '1'
    }
    let div = routeTable[number]
    if (!div) {
        div = document.querySelector(`#div404`)
    }
    const app = document.querySelector(`#app`)
    div.style.display = 'block'
    app.innerHTML = ``
    app.appendChild(div)
}

window.addEventListener('hashchange', () => {
    route()
})