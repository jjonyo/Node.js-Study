const getEgg = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve('🥚'), 1000)
  })
const getChick = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve(`${egg} => 🐣`), 1000)
  })
const getChicken = (chick) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve(`${chick} => 🐤`), 1000)
  })

getEgg()
  .then(getChick)
  .catch(({ data, error }) => {
    console.log(error)
    return `${data} => 🐥 `
  })
  .then(getChicken)
  .then((chicken) => {
    console.log(chicken)
  })
  .catch((err) => console.log(err))
