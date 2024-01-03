const url = "http://localhost:4000/"

const getCompound = (str) => {
    return str['compound'] !== '' ? `Состав: ${str['compound']}` : str['typeSoc']
}
const getCount = (str) => {
    return str['count'] != 0 ? "• " + str['count'] : ''
}

const rand = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min)
}

export {getCount, getCompound, rand, url}