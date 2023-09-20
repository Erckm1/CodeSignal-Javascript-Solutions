function solution(sequence) {
    let inv=0;
   
   for (let i = 1; i < sequence.length; i++) {
     if (sequence[i] <= sequence[i-1]) {
       inv++;
       if (inv > 1) return false;
       if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
     }
   }
   
   return true;
 }