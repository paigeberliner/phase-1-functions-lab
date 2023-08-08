function distanceFromHqInBlocks(start){ 
    return start > 42 ? start - 42 : 42 - start ;
}

function distanceFromHqInFeet(start) {
    return distanceFromHqInBlocks(start) * 264
}

function distanceTravelledInFeet (start,end){
    return end > start ? (end - start) * 264 : (start - end) * 264
}

function calculatesFarePrice(start, destination){
    const beginning = Math.max(destination, start);
    const end = Math.min(destination, start);

    if ((beginning - end)*264<400){
        return 0
    }
    else if (((beginning - end)*264>400)&&((beginning - end)*264<2000)){
        return (((beginning - end)*264)-400)*.02
    }
    else if (((beginning - end)*264>2000)&&((beginning - end)*264<2500)){
        return 25
    }
    else {
        return 'cannot travel that far'
    }
    }

