/**
 * Selectors
 */
const sliderControls = document.querySelectorAll("#slider-controls > button");
const sliderContent = document.querySelectorAll("#slider-content > li");
if (sliderControls.length !== sliderContent.length) console.warn('Bad slider configuration')

function clearStyle(elements, style) {
  elements.forEach(function (value, key) {
    console.log(value, key)
    value.classList.remove(style);
  })
}

for (let i = 0; i < sliderControls.length; i++) {
  sliderControls[i].addEventListener('click', function (evt) {
    clearStyle(sliderControls, 'current');
    clearStyle(sliderContent, 'slide-current');
    sliderControls[i].classList.add('current');
    sliderContent[i].classList.add('slide-current');
  })
}
