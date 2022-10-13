# HTML/CSS/JS Hello World!
Draw some boxes and text and let them have style using CSS.

## Elements
Use generic `<div>` tag for block-level element and use generic `<span>` tag
for inline-level elements.

## CSS Classes
### `.border-box`
Used to style all block-level elements having `<div>` tag.
### `.center-aligned-text`
Used to align content/text horizontally and vertically centered.
### `.inline-block-item`
Used for all elements to occupy the space equally/horizontally side by side.
### `.outer-box`
Used to align child elements horizontally and vertically centered.
### `.inner-box`
Descendant of `.outer-box`. Used for the element to have its own style.
### `.formatted-text`
Used to style text.

## Using DOM manipulation API
* two boxes side by side
    * one, add overflowed multiline text in the box and cut the test overflowed
    * the other one, add overflowed multiline text in the box and show vertical
      scroll bar
* two boxes overlapped
    * change color when mouse is moved into the inner most box
    * when clicking the inner box
        * change color
        * show alert message - the following order
            1. it's outer box
            2. it's inner box
            3. it's outer box
        * change the text content
