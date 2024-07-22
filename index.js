let buttons = document.querySelectorAll('.drum')




for (var i = 0; i < buttons.length; i++) {
    

    buttons[i].addEventListener('mouseenter', function (){
        let innerHTML = this.innerHTML
        switch (innerHTML) {
            case "D":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "J":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();    
                break
            case "K":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();    
                break
            case "L":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();    
                break
            case "A":
                let snare = new Audio('sounds/snare.mp3');
                snare.play();    
                break
            case "S":
                let kick = new Audio('sounds/kick-bass.mp3');
                kick.play();    
                break
            case "W":
                let crash = new Audio('sounds/crash.mp3');
                crash.play();    
                break
                
            default:
                console.log(innerHTML)
        }
    
    })
}



