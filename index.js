// Code your solution in this file!


function distanceFromHqInBlocks(n){
    const base = 42;
    const pr = n - base;
    if (pr < 0){
        return Math.abs(pr);
    } else {
        return pr;
    }
}


function distanceFromHqInFeet(n){
    return (distanceFromHqInBlocks(n) * 264);
}


function distanceTravelledInFeet(start, end){
    const rslt = end - start;
    if (rslt < 0){
        return Math.abs(rslt) * 264;
    } else {
        return rslt * 264;
    }
}

function calculatesFarePrice(start, destination){
    const dist = distanceTravelledInFeet(start, destination);
    if (dist < 400){
        return 0;
    } else if (dist >= 400 && dist <= 2000){
        return (dist - 400) * 0.02;
    } else if (dist >= 2000 && dist <= 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }
}

