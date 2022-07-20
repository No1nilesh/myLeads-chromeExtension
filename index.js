let arr = []
let oldLeads = []

// // turn the arr string into an array

// arr = JSON.parse(arr)

// // push a new value to the array 

// arr.push("www.gotohell.com")

// turn array into string 
// arr = JSON.stringify(arr)


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("save-tab")

 const LeadsFromStorage = JSON.parse(localStorage.getItem("arr"))

  if (LeadsFromStorage) {
    arr = LeadsFromStorage
    render(arr)
  }

  const deleteBtn = document.getElementById("delete-btn")

deleteBtn.addEventListener("click", function() {
 
  localStorage.clear();
  arr=[]
  render(arr)
 
  
})

//  console.log(LeadsFromStorage)

inputBtn.addEventListener("click" , function() {
    arr.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("arr", JSON.stringify(arr))
    render(arr)
    
    console.log(localStorage.getItem("arr"))
})

tabBtn.addEventListener("click", function() {

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    arr.push(tabs[0].url)
    localStorage.setItem("arr", JSON.stringify(arr) )
    render(arr)
  })
  
})
function render(leads) {

    let listItems = ""
    for (let i = 0; i < leads.length; i++ ) {
    // listItems += "<li> <a target='_blank'href='" + arr[i] + "'>" + arr[i] + "</a></li>"
    // console.log(listItems)
    listItems += `
    <li>
    <a target='_blank' href="${leads[i]}">
    ${leads[i]}
    </a>
    </li>
    `
    }
    ulEl.innerHTML = listItems
}

// ulEl.innerHTML = listItems

// let canT = document.getElementById("cant")

// canT.innerHTML = "<button onclick='buy()'>BUY!</button>"

// function buy() {
//     canT.innerHTML += "<p>Thank you for buying!</p>"
// }

// const welcomeEl = document.getElementById("welcome-el")

// function greetuser(greet, name) {
//   welcomeEl.textContent = greet + ", " + name
// }
// greetuser("go to hell" , "bhagelu")

// function add(a , b) {
//  return a + b;
// }

// console.log(add(3 , 4))
// console.log(add(9, 102))

// const tabs = [
//   {url: "https://www.leinkedin.com/in/per-harald-borgen/"}
// ]


