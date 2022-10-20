let snap = []

function snapCrackle(maxValue){

    for(let i = 1; i <= maxValue; i++){
        if(i %2 == 1 && i %5 == 0){
            snap.push("SnapCrackle")
        } else if (i %2 == 1){
            snap.push("Snap")
        } else if (i %5 == 0){
            snap.push("Crackle")
        } else {
            snap.push(i)
        }
    }
    return snap.join(", ")
}

console.log(snapCrackle(12));