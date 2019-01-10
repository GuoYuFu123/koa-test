async function testAsync() {
    return 'hello async'
}
function getA(){
    return 'A'
}
function getB() {
    return 'B'
}
async function test() {
    const A = await getA()
    const B = await getB()
    console.log(A,B)
}
function testLongTime() {
    return new Promise((res)=> {
        setTimeout(() => {
            res('Long time')
        }, 1000);
    })
}
async function testL() {
    const a = await testLongTime()
    console.log(a)
}
test()
const result = testAsync()
console.log(result)
testL()
console.log('me')
/**
 *
Promise { 'hello async' }
me
A B
Long time
 */