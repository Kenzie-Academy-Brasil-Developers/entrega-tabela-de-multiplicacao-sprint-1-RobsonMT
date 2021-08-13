function multiplicationTable(num){
    let arrOutput = [];
    let b;
    let i;
  
    for(b = 0; b <= num; b++){
      arrOutput[b] = [];
  
      for(i = 0; i <= num; i++){
        arrOutput[b][i] = (b) * (i);
      }
    }
    console.table(arrOutput);
    return;
}
// multiplicationTable(10);