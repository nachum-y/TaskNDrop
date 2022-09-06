
function makeId(length = 5) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}


function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}



const getColor = () => {
    const colors = [
        '#227f4c',
        '#3ac874',
        '#9cd325',
        '#c9b641',
        '#ffcb00',
        '#784bd1',
        '#a25ddc',
        '#0486c0',
        '#65cbff',
        '#bb3354',
        '#f8168a',
        '#f85ac4',
        '#fb642e',
        '#fdab3d',
        '#7e5347',
        '#c4c4c4',
        '#808080'
    ]

    return colors[utilService.getRandomInt(0, colors.length)]
}


export const utilService = {
    makeId,
    getRandomInt,
    getColor,
}