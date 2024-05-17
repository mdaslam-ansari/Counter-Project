const count = document.querySelector('.count')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const changeBy = document.querySelector('.changeBy')
const resetBtn = document.querySelector('.reset-btn')


console.log(changeBy)
console.log(minusBtn)
console.log(plusBtn)
console.log(count)
console.log(resetBtn)

minusBtn.addEventListener('click',() =>{
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText= countValue - changeByValue
});

plusBtn.addEventListener('click',() =>{

    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText= countValue + changeByValue
    
});

resetBtn.addEventListener('click', ()=>{
   count.innerText = 0
})
