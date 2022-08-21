"use strict"

// task1
// Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsi

// let n = 21;

// if(n % 3 == 0 && n % 7 ==0){
//     console.log("Hem 3-e, hemde 7-e bolunur");
// } else{
//     console.log("bolunmur");
// }

//task2
//Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 


// function factorial(n) 
// { 

//   if (n === 0)
//  {
//     return 1;
//  }
//   return n * factorial(n-1);
         
// }
// console.log(factorial(5));



//task3
//Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let number = [1, 2, 3, 4, 5, 6,7,8];

// const squareEvenNumbers = arr => arr
// .reduce((a, num) => a + (num % 2 === 0 && num ** 2), 0);

// console.log(squareEvenNumbers(number));



//task5
//Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

    
// function singleNums(){
//     let nums = [1,2,3,4,5,6,7,8];
//     let sum = 0;

//         for (let i = 0; i < nums.length; i++) {
//             if(nums[i] % 2 == 1) {
//             sum+= nums[i];
//         }
            
        
//         console.log(sum);
        
//       }
// }
// singleNums()


//task6

//Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// function doubleNums () {
//     let nums = [1,2,3,4,5,6,7,8,9,12,20];
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//      if(nums[i] % 2 == 0) {
//         sum+= nums[i];
//      }
//         console.log(sum);
//     }
// }

// doubleNums();


//task4
//Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
 
//     return (true)
//   }
 
//     alert("email ve password yanlisdir")
//     return (false)
// }




    



