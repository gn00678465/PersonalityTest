const url =
  'https://raw.githubusercontent.com/hexschool/js-training-task/master/api/BigFive.json'

let title = {} // title
let traits = {} // 分類
const traitsArr = [{}, {}, {}, {}, {}] // 分類整理
const problemList = [] // 所有問題
const problemMap = {} // 問題對應
const descriptList = {} // 結果 sescript

const proxyFn = function (fn) {
  return new Proxy(fn, {
    get (target, key) {
      return target[key]
    },
    set (target, key, val) {
      target[key] = val
      return 1
    }
  })
}

const getAPIData = function (json) {
  title = json.name
  title.description = json.description
  traits = json.traits
  sortTraits(json.traits)
  getMap(json.problemList)
  descriptMap(json.problemList)
  getProblem(json.problemList)
}

const sortTraits = function (data) {
  Object.keys(data).forEach(lang => {
    data[lang].forEach((item, index) => {
      proxyFn(traitsArr)[index][lang] = item
    })
  })
}

const getMap = function (list) {
  const idArr = []
  traits.en.forEach(item =>
    list[item].problems.forEach(problem => proxyFn(idArr).push(problem.id))
  )
  for (let i = 0; i < idArr.length; i++) {
    proxyFn(problemMap)[i + 1] = idArr[i]
  }
}

const getProblem = function (list) {
  traits.en.forEach(item =>
    list[item].problems.forEach(problem => proxyFn(problemList).push(problem))
  )
}

const descriptMap = function (list) {
  traits.en.forEach(item => {
    proxyFn(descriptList)[item] = list[item].description
  })
}

export { url, getAPIData, descriptList, problemMap, problemList, title, traitsArr }
