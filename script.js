console.log('Add validation!');

let totalcost = document.querySelector("#total")
let submit = document.querySelector("#submit-button")

submit.addEventListener ("click", function () {
    event.preventDefault()
    let numberdays = document.querySelector("#days").value
    let cost = (numberdays * 5)
    totalcost.textContent= "total parking cost" + " $ " +  cost ; 
})

// attempting to add an event listener so that when clicking submit button, 
// it will multiply the number of days by 5

// const days = [
// 'Sunday',
// 'Monday',
// 'Tuesday',
// 'Wednesday',
// 'Thursday',
// 'Friday',
// 'Saturday'
// ]

// const dayIndex = d.getDay()
// const dayName = [dayIndex]

// const formatted = `${dayName}, ${date} ${monthName} ${year}`
// console.log(formatted)

// I am thinking - make an array with date names. 
// admittedly not sure where to go with lines 21-25 in js, testing the code from Date Object Article in CSS Tricks
// Ideally, write code so that "If date name is Saturday or Sunday, price is $7 rather than $5"
// need to find way to apply this array to the days field (line 30 html) and submit button (line 55 html)

