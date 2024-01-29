let data = [23, 46, 54, 12, 25, 44, 33, 26]
// for (let i = 0; i < data.length; i++){
//     document.write(`Array ${i}  is ${data[i]} <br>`)
// }

// let x = 3;
// document.write(data[x]);


// function getElement() {
//     let index = document.getElementById("element").value;
//     if (index < data.length) {
//         alert(data[index])
//     }
//     else {
//         alert("out of scope man")
//     }
// } 


function getElement() {
    let index = document.getElementById("element").value;
    if (index < data.length && typeof parseInt(index)==="number" ) {
        alert(data[index])
    }
    else {
        alert("out of scope man")
    }
} 