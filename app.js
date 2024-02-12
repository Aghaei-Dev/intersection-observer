// // ++++++++++++++++++++++++++ changing color cube +++++++++++++++++++++++++++++
// const numSteps = 20.0

// let boxElement
// let boxText
// let prevRatio = 0.0
// let increasingColor = 'rgb(40 40 190 / ratio)'
// let decreasingColor = 'rgb(190 40 40 / ratio)'

// // Set things up
// window.addEventListener(
//   'load',
//   (event) => {
//     boxElement = document.querySelector('#box')
//     boxText = document.querySelector('.vertical')
//     createObserver()
//   },
//   false
// )

// function createObserver() {
//   let observer

//   let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: buildThresholdList(),
//   }

//   observer = new IntersectionObserver(handleIntersect, options)
//   observer.observe(boxElement)
// }

// function buildThresholdList() {
//   let thresholds = []
//   let numSteps = 20

//   for (let i = 1.0; i <= numSteps; i++) {
//     let ratio = i / numSteps
//     thresholds.push(ratio)
//   }

//   thresholds.push(0)
//   return thresholds
// }

// function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry.intersectionRatio)
//     if (entry.intersectionRatio > prevRatio) {
//       boxText.textContent = 'we are going down'
//       entry.target.style.backgroundColor = increasingColor.replace(
//         'ratio',
//         entry.intersectionRatio
//       )
//     } else {
//       boxText.textContent = 'we are going Up'

//       entry.target.style.backgroundColor = decreasingColor.replace(
//         'ratio',
//         entry.intersectionRatio
//       )
//     }

//     prevRatio = entry.intersectionRatio
//   })
// }

// ++++++++++++++++++++++++++ cards +++++++++++++++++++++++++++++

const cards = document.querySelectorAll('.card')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
    })
  },
  {
    threshold: 0.5,
  }
)
cards.forEach((card) => {
  observer.observe(card)
})
