let dropButteredToastOnFloor = (success, failure) => {
    console.log("oh no, I dropped my toast!");
    setTimeout( function(){
        var drop = Math.random();
        if (drop < 0.5) {
            console.log("Landed butter-side up!")
            success();
        } else {
            console.log("Landed butter-side down...")
            failure();
        }
        }, 2000);
 }

//my code starts here
function dropToastPromisified () {
    return new Promise((resolve, reject)=> {
        dropButteredToastOnFloor(resolve, reject)
    })
}


//ends above this line

 dropToastPromisified()
  .then(()=>{
    alert('Whew, that was close!');
  }).catch(()=>{
    alert('Well shucks, there goes my toast...');
  });

let drop = Math.random();

if (drop < 0.5) {
  console.log("Landed butter-side up!");
  success();
} else {
  console.log("Landed butter-side down...");
  failure();
}