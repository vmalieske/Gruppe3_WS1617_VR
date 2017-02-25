/**
 * Created by Chesire on 01.02.2017.
 */

var text = document.querySelector('#textvideo');
text.addEventListener('click', function() {
    text.play();
});

pause: function () {
    this.removeEventListeners()
},
play: function () {
    this.addEventListeners()
}

/*var scene = document.querySelector('a-scene');
var text = document.querySelector('a-video');

text.setAttribute('play', 'click');
scene.appendChild(text);
 function () {
 this.getAttribute('play');
 console.log('I was clicked!');*/
