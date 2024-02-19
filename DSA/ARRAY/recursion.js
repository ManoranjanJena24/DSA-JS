// RE-CURSION  KHUDKOO BAAR BAAR DOHRANAA 
function Apple(x) {

    if (x < 10) {
        Apple(++x);
    }
    console.log(x + 1)
}
let data = 0;
Apple(data);