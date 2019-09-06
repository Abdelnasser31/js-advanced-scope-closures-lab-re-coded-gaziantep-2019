function produceDrivingRange(blockRange) {
  
  return function(start,end) {
    let startNumber = start.substring(0,start.indexOf('t'));
    let endNumber   = end.substring(0,end.indexOf('t'));
    let result = endNumber - (startNumber * 1 + blockRange);
    
    if(result < 0) {
      return (`within range by ${result}`);
    }else {
      return (`${-1 * result} blocks out of range`);
    }
  }
}