let buttons = document.querySelectorAll('.drum')

function makeSound(key){
    switch (key) {
        case "W":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "A":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();    
            break
        case "S":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();    
            break
        case "D":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();    
            break
        case "J":
            let snare = new Audio('sounds/crash.mp3');
            snare.play();    
            break
        case "K":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();    
            break
        case "L":
            let crash = new Audio('sounds/snare.mp3');
            crash.play();    
            break
            
        default:
            console.log(innerHTML)
    }
}


function focusOn(key){
    let keys = ["W", "A", "S", "D", "J", "K", "L"]
    if (keys.includes(key)){
        return true
    }
}

function removeFocusClass() {
    setTimeout(() => {
        document.activeElement.blur(); 
    }, 200); 
}


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseenter', function (){
        let innerHTML = this.innerHTML
        makeSound(innerHTML)
    })
}   


document.addEventListener("keydown", function(event){
    let key = event.key.toLocaleUpperCase()
    makeSound(key)
    if (focusOn(key)){    
        let drumElement = document.querySelector(`.${key}`)
        drumElement.focus();
        removeFocusClass();
    }
})
