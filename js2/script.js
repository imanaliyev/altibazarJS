// 26=======================================================================================

// const arr = [2, 3, 4, 5, 2, 3, 432, 3];

// arr.forEach((element, i) => (element % 2 !== 0 ? console.log(element) : null));
// 27====================================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 432, 3];

// arr.forEach((element, i) => (element % 2 === 0 ? console.log(element) : null));
// 28======================================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 432, 3];
// arr.forEach((x,i) =>(i%2 !==0 ? console.log(i):null) )
// 29==================================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 432, 3];
// arr.forEach((x,i) =>(i%2 ===0 ? console.log(i):null) )
// 30===================================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 432, 3];
// let maxnum = arr[0]
// arr.forEach((x,i)=> (arr[i]>maxnum? maxnum=arr[i] : null))
// console.log(maxnum);

// 31==========================================================================
// const arr = [2, 3, 4, 5, 2, 3, 432, 3];
// let minnum = arr[0]
// arr.forEach((x,i)=> (arr[i]<minnum? minnum=arr[i] : null))
// console.log(minnum);
// 32=================================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 432, 3];
// let maxcut = arr[0]
// arr.forEach((x,i) => x%2 === 0 && maxcut<arr[i] ? maxcut=arr[i]:null)
// console.log(maxcut);
// 33========================================================================================
// const arr = [1,1,1,1,1,1,1,1,1,4444];
// let mincut = 9999999999999999999999999999999999999999999
// arr.forEach((x,i)=> x%2 === 0 && mincut>arr[i] ? mincut = arr[i] : null)
// console.log(mincut);
// 34===================================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 431, 3];
// let maxtek = arr[0]
// arr.forEach((x,i) => x%2 !== 0 && maxtek<arr[i] ? maxtek=arr[i]:null)
// console.log(maxtek);
// 35============================================================================================================

// const arr = [2, 3, 4, 5, 2, 3, 431, 3];
// let mintek = 9999999999999999999999999999999999999999999
// arr.forEach((x,i)=> x%2 !== 0 && mintek>arr[i] ? mintek = arr[i] : null)
// console.log(mintek);
// 36===========================================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 431, 1];
// let minIndex =0;
// let minEded = arr[1];
// arr.forEach((x,i)=>{
//     if(minEded>arr[i]){
//         minEded=arr[i];
//         minIndex=i;
//     }
// })
// console.log(minEded,minIndex)
// 37===============================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 431, 1];
// let maxIndex =0;
// let maxEded = arr[1];
// arr.forEach((x,i)=>{
//     if(maxEded<arr[i]){
//         maxEded=arr[i];
//         maxIndex=i;
//     }
// })
// console.log(maxEded,maxIndex)
// 38=======================================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 431, 431, 1];
// let MaxEdedlerinSayi = 0;
// let max = arr[1];

// arr.forEach((x, i) => {
//   if (max < arr[i]) {
//     max = arr[i];
//   } else if (max == arr[i]) {
//     MaxEdedlerinSayi++;
//   }
// });
// console.log(max,MaxEdedlerinSayi);
// 39=======================================================================================================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 431, 431, 1,1];
// let MaxEdedlerinSayi = 0;
// let max = arr[1];

// arr.forEach((x, i) => {
//   if (max > arr[i]) {
//     max = arr[i];
//   } else if (max == arr[i]) {
//     MaxEdedlerinSayi++;
//   }
// });
// console.log(max,MaxEdedlerinSayi);
// 40========================================================================================================================================================================
// const arr = [2, 3, 4, 5, 2, 3, 431, 1];
// let max = arr[1];
// let index = 0
// arr.forEach((x, i) => {
//   if (arr[i] > max) {
//     max = arr[i];
//     index = i
//   }
 
// });
// firstelement = arr[0]
// arr[0] = arr[index]
// arr[index] = firstelement
// console.log(arr);
// let myArray = [12, -2, 55, 68, 80];

// const temp = myArray[0];
// myArray[0] = myArray[1];
// myArray[1] = temp;

// console.log(myArray); [-2,12,55,68,80]
