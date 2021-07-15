// 1초뒤 결과를 얻는 것을 구현하기 위한 dealy 함수
const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms))

async function getEgg() {
  await delay(1000)
  return '🥚'
}

async function getChick(egg) {
  await delay(1000)
  return `${egg} => 🐣`
}

async function getChicken(chick) {
  await delay(1000)
  return `${chick} => 🐤`
}

async function getResult() {
  try {
    const egg = await getEgg()
    const chick = await getChick(egg)
    const chicken = await getChicken(chick)
    console.log(chicken)
  } catch (err) {
    console.log(err)
  }
}

getResult()
