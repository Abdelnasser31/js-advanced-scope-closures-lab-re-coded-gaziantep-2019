function produceDrivingRange(blockRange) {
  
  return function(start,end) {
    let startNumber = start.substring(0,start.indexOf('t'));
    let endNumber   = end.substring(0,end.indexOf('t'));
    let result = endNumber - startNumber + blockRange;
    
    if(result >= 0) {
      console.log(`within range by ${result}`);
    }else {
      console.log(`${-result} blocks out of range`);
    }
  }
}