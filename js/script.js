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
// console.log(mainContainer);

// create button
let btnGenerateNumbers = createElement(
  'button',
  { class: 'btnGenerateNumbers', id: 'btnGenerateNumbers' },
  { innerText: 'Generate Numbers' }
)
document.body.prepend(btnGenerateNumbers)
// console.log(btnGenerateNumbers);