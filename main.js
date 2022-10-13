// https://developer.mozilla.org/en-US/docs/Web/API/Document
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
// get the boxes. we have only one `.inner-box` and `.outer-box` each.
// this is safe.
const innerBox = document.querySelector('.inner-box')
const outerBox = document.querySelector('.outer-box')
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
// const htmlCollection = document.getElementsByClassName('inner-box)


// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
// https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
innerBox.addEventListener('click', (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
    // https://developer.mozilla.org/en-US/docs/Web/API/Element
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext
    event.target.innerHTML = "DEF"
    window.alert('I\'m a inner box')
})

const outerCallback = () => {
    window.alert('I\'m a outer box')
}

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture
// install event listeners to `.outer-box`, one into capturing phase to run
// the callback before the one of `.inner-box`, the other one into bubbling
// phase to run the callback after the one of `.inner-box`.
outerBox.addEventListener('click', outerCallback, true)
outerBox.addEventListener('click', outerCallback, false)
