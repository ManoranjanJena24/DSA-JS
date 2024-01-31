let data = [];
let currentSize = data.length;
let max = 5;

function push(newVal) {
    if (currentSize >= max) {
        alert(`stack is full now we cannot add ${newVal}`)
    }
    else {
  
        data[currentSize] = newVal;
        currentSize += 1
    }
    

}

function pop(){
    if (currentSize > 0) {
        currentSize -= 1
        data.length = currentSize;
    }
    else {
        alert("The stack is alreadyt empty what should we remove")
    }
}
push(24)
push(24)
push(24)
push(23)
push(26)
push(25)
console.log(data)
pop();
pop();
console.log(data)