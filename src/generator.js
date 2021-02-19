console.log("learning");
function *helloGenaratorFunction() {
    yield 2019;
    return "hello genratorFunction";
    yield 20120;
}
const result =  helloGenaratorFunction();
console.log(result.next());
console.log(result.next());
console.log(result.next());
