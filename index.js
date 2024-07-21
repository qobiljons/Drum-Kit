let buttons = document.querySelectorAll('.drum')

let sounds = document.querySelectorAll('audio')



for (var i = 0; i < buttons.length; i++) {
    let audio = new Audio(sounds[i].src);
    console.log(audio);
    buttons[i].addEventListener('mouseenter', function (){
    audio.play()})
}



