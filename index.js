let a = 10;
function fun1() {
    a = 40;
    if ( a == 40){
        let a = 10
        setTimeout(() => console.log('a', a), 0, a)
    }
}
a = 30;

fun1();
