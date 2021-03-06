const generateRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const createElement = (elType, elAttrs, elProps) => {
  const newEl = document.createElement(elType)

  for (const key in elAttrs) {
    if (Object.hasOwnProperty.call(elAttrs, key)) {
      newEl.setAttribute(key, elAttrs[key])
    }
  }

  for (const key in elProps) {
    if (Object.hasOwnProperty.call(elProps, key)) {
      newEl[key] = elProps[key]
    }
  }
  return newEl
}


// create main container
const mainContainer = createElement(
  'section',
  { class: 'container', id: 'mainContainer' },
  {}
)
document.body.prepend(mainContainer)


// create button
let btnGenerateNumbers = createElement(
  'button',
  { class: 'btnGenerateNumbers', id: 'btnGenerateNumbers' },
  { innerText: 'Generate Numbers' }
)
document.body.prepend(btnGenerateNumbers)


// create event assigned to the button
btnGenerateNumbers.addEventListener('click', () => {
  let arrEvenNumbers = []
  let arrOddNumbers = []


  // generate 20 random numbers
  for (let i = 0; i < 20; i++) {
    const randomNum = generateRandomNum(1, 100)


    // check if number is even
    const even = (randomNum % 2 === 0)

    if (even) {
      arrEvenNumbers.push(randomNum)
    } else {
      arrOddNumbers.push(randomNum)
    }
  }

  // sort arrays
  arrEvenNumbers.sort((a, b) => {
    return a - b
  })
  arrOddNumbers.sort((a, b) => {
    return a - b
  })


  // check if divEvenNumbers && divOddNumbers exist and remove them if so ;)
  let divEvenNumbers = document.querySelector('#evenNumbersContainer')
  if (divEvenNumbers) {
    divEvenNumbers.remove()
  }

  let divOddNumbers = document.querySelector('#oddNumbersContainer')
  if (divOddNumbers) {
    divOddNumbers.remove()
  }


  // create even numbers container & list
  divEvenNumbers = createElement(
    'div',
    { class: 'evenNumbersContainer', id: 'evenNumbersContainer' },
    { innerHTML: '<span>Your Even Numbers!</span>' }
  )
  mainContainer.appendChild(divEvenNumbers)
  const ulEvenNumbers = createElement(
    'ul',
    { class: 'evenNumbersList', id: 'evenNumbersList' },
    {}
  )
  divEvenNumbers.appendChild(ulEvenNumbers)


  // create odd numbers container & list
  divOddNumbers = createElement(
    'div',
    { class: 'oddNumbersContainer', id: 'oddNumbersContainer' },
    { innerHTML: '<span>Your Odd Numbers!</span>' }
  )
  mainContainer.appendChild(divOddNumbers)



  const ulOddNumbers = createElement(
    'ul',
    { class: 'oddNumbersList', id: 'oddNumbersList' },
    {}
  )
  divOddNumbers.appendChild(ulOddNumbers)


  // create elements of even numbers and add it to dom
  for (const num of arrEvenNumbers) {
    const liElement = createElement(
      'li',
      { class: 'item-even-number' },
      { innerText: num }
    )
    ulEvenNumbers.appendChild(liElement)

  }

  // create elements of odd numbers and add it to dom
  for (const num of arrOddNumbers) {
    const liElement = createElement(
      'li',
      { class: 'item-even-number' },
      { innerText: num }
    )
    ulOddNumbers.appendChild(liElement)
  }
})