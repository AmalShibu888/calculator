
class Calculator
{

    constructor(calScreen){
        this.calScreen = screen;
        this.clear()
    }

    clear(){
        this.calScreen.textContent = ""
    }

    del(){
        let str = this.calScreen.textContent.slice(0,-1)
         this.calScreen.textContent = str
    }

    append(str){
        console.log(str)
        this.calScreen.textContent += str
    }
}




const numberButtons = document.querySelectorAll('.num');
const screen = document.querySelector('.screen')
const clear = document.getElementById('ac')
const deletebutton = document.querySelector('.del')
const calculator = new Calculator

numberButtons.forEach(element => {
    element.addEventListener('click' ,()=>{
        
        calculator.append(element.textContent)
    })
});

clear.addEventListener('click' ,()=>{
    
    calculator.clear()
})

deletebutton.addEventListener('click' ,()=>{
    
    calculator.del()
})