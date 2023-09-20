function solution(inputArray) {
  var ant=-1000,res=0;
  for(let i=0;i<inputArray.length;i++){
          if(ant<(inputArray[i]*inputArray[i+1])){
              ant=inputArray[i]*inputArray[i+1];
          }   
  }
  return ant;
}