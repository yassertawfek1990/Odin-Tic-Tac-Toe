// function Book(title, author,  pages,read){
//     this.title = title;
//     this.author = author;
//     this.pages=pages;
//     this.read=read

//     this.info = function(){
//         console.log(`${this.title} by ${this.author},${this.pages} pages,${this.read}`)
//     }
// }

// let library = []

// function addBookToLibrary(title, author,  pages,read) {
//     // do stuff here
//     let newBook = new Book(title, author,  pages,read)
//     newBook.info()
//     library.push(newBook)
//   }

// let form = document.getElementById("forma")
// let buts = document.getElementsByTagName("button")
// let butt = document.querySelector(".buto");
// let f = document.querySelector("#buto")
// console.log(butt); // Correct variable name
// console.log(f)
// form.addEventListener("submit",e=>{
//     const title = document.getElementById("title");
//     const author = document.getElementById("author");
//     const pages = document.getElementById("pages");
//     const read = document.getElementById("read");
//     console.log(e)
//     addBookToLibrary(title.value, author.value,  pages.value,read.value)
//     title.value = ""
//     author.value = ""
//     pages.value = ""
//     read.value = ""
//     e.preventDefault()
//     console.log(library)
//     show(library)
    
    
// })

// let d = document.querySelector(".display")

// let show = function(library){
//     d.innerHTML = '';
// library.forEach(book=>{
//     let div = document.createElement("div")
//     let el = document.createElement("ul")
//     let li;
//     Object.entries(book).forEach(([key,value]) =>{
        
//         if(typeof(value)!=="function"){
//             if (key === "read"){
//                 li = document.createElement("li")
//                 li.setAttribute("class", key)
//                 let s = document.createElement("span")
//                 s.textContent = `${value}`;
//                 li.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}:`;
//                 li.appendChild(s)
//                 let red = document.createElement("button")
//                 red.setAttribute("class", "red");
//                 red.textContent = "Read"
//                 red.style.marginLeft = "5px"
//                 li.appendChild(red)
//                     }
//             else {
//                 li = document.createElement("li")
//                 li.setAttribute("class", key)
//                 li.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`;

//             }
//         }
        
//         el.appendChild(li)
//         div.appendChild(el)
//     })
//     let rem = document.createElement("button")
//     rem.setAttribute("class", "rem");
//     rem.textContent = "Delete"
//     div.appendChild(rem)
    

//     d.appendChild(div)
// })
// let del = document.querySelectorAll(".rem");
//     console.log(del)
//     del.forEach(b=>{
//     b.addEventListener("click",e=>{
//         console.log(e)
//         console.log(b.textContent)
//         let title = b.parentElement.querySelector(".title")
//         library = library.filter(b=>{
//             b.title!== title
//         })
//         b.parentElement.remove()}
        
//     )
   
// })
// let r = document.querySelectorAll(".red");
// console.log(r)
// r.forEach(ww=>{
// ww.addEventListener("click",e=>{
//     console.log(e)
//     console.log(ww.textContent)
//     let s = ww.previousElementSibling;
//     console.log(s)
//     console.log(ww.parentElement)
//     console.log(ww.parentElement.parentElement)
//     let title = ww.parentElement.parentElement.querySelector(".title")
//     console.log(title.textContent.slice(7))
//     s.textContent.toLocaleLowerCase() == "no"?s.textContent = "Yes":s.textContent = "No"
//     library = library.map(b=>{
//         // console.log()
//         if (b.title === title.textContent.slice(7)){ 
//             console.log(b.title)
//             b.read = s.textContent
//             }
//         return b
        
//     })
//     // let x = library
//     console.log(library)

// })    
// }
    
    
// )
// }
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
let message = document.querySelector(".message")
function showPopup(text) {
    popup.style.display = "block";
    overlay.style.display = "block";
    message.textContent =text
}

function closePopup() {//this will reload the page
    // popup.style.display = "none";
    // overlay.style.display = "none";
    location.reload()
}
let counter = 0;

let buts = document.querySelectorAll(".buto")
let div = document.querySelectorAll(".main")
buts.forEach(b=>{
    b.addEventListener("click",()=>{
        counter%2 === 0 ?b.textContent = "X":b.textContent = "O"
        b.disabled = true;
        
        counter%2 === 0 ?b.style.color = '#21d024':b.style.color = '#d021ad'
        if (counter%2 !== 0){div[0].style.backgroundColor = '#21d024';
            div[1].style.backgroundColor = 'white';
        }
        else {div[1].style.backgroundColor = '#d021ad';
            div[0].style.backgroundColor = 'white';
        } 
        console.log(buts[0].textContent) 
        console.log(buts[1].textContent) 
        console.log(buts[2].textContent) 
        // if (buts[0].textContent == "X" &&  buts[1].textContent == "X" &&  buts[2].textContent == "X"){alert("Player One wins") }
        counter++  
        if (
            buts[0].textContent == "X" &&  buts[1].textContent == "X" &&  buts[2].textContent == "X" ||
            buts[0].textContent == "X" &&  buts[4].textContent == "X" &&  buts[8].textContent == "X" ||
            buts[0].textContent == "X" &&  buts[3].textContent == "X" &&  buts[6].textContent == "X" ||
            buts[2].textContent == "X" &&  buts[5].textContent == "X" &&  buts[8].textContent == "X" ||
            buts[2].textContent == "X" &&  buts[4].textContent == "X" &&  buts[6].textContent == "X" ||
            buts[6].textContent == "X" &&  buts[7].textContent == "X" &&  buts[8].textContent == "X" ||
            buts[3].textContent == "X" &&  buts[4].textContent == "X" &&  buts[5].textContent == "X" 
            ) {showPopup("Player One wins")}
            else if (
            buts[0].textContent == "O" && buts[1].textContent == "O" && buts[2].textContent == "O" || 
            buts[0].textContent == "O" && buts[4].textContent == "O" && buts[8].textContent == "O" ||
            buts[0].textContent == "O" && buts[3].textContent == "O" && buts[6].textContent == "O" ||
            buts[2].textContent == "O" && buts[5].textContent == "O" && buts[8].textContent == "O" ||
            buts[2].textContent == "O" && buts[4].textContent == "O" && buts[6].textContent == "O" ||
            buts[6].textContent == "O" && buts[7].textContent == "O" && buts[8].textContent == "O" ||
            buts[3].textContent == "O" && buts[4].textContent == "O" && buts[5].textContent == "O" 
            ) {showPopup("Player two wins")}
            else if (counter >=9 ) {showPopup("its a tie")}
            
            
    })
        
})
