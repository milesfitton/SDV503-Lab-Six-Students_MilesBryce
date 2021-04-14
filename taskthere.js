// Task Three
/*Given an object containing counts of both likes and dislikes of a facebook post,
return a number of count for either likes or dislikes should be displayed.
This is calculated by subtracting the number of dislikes from likes.
Ex:  getCount({ likes: 13, dislikes: 0 }) -> 13
Ex:  getCount({ likes: 2, dislikes: 23 }) -> -21
Ex:  getCount({ likes: 100, dislikes: 100 }) -> 0
Note: The argument gets passed in the form of an object
Note: This object get assigned to the variable name "counts"
Note: the function body want something to operate on , which is going to be the properties 
of the object "counts" , so you access the properties of this object with dot notation 
by counts.property_1 and counts.property_2*/


 //below is the data of likes and dislikes
let counts= [
    { data: "1", status: "like"},
    { data: "2", status: "like"},
    { data: "3", status: "dislike"},
    { data: "4", status: "dislike"},
    { data: "5", status: "dislike"},
    { data: "6", status: "dislike"}
  ];
 
  //below counts the likes
 let counterLikes = 0;
 for (let i = 0; i < counts.length; i++){
if (counts[i].status === "like") counterLikes++;
 }
 console.log (counterLikes)
 

 //below counts the dislikes
 let counterDisLikes = 0;
 for (let i = 0; i < counts.length; i++) {
   if (counts[i].status === "dislike") counterDisLikes++;
 }
 console.log(counterDisLikes)

 //below counts the likes (different method - using for of)

let counterLikesAlternative = 0;
for (let obj of counts){
  if (obj.status === "like") counterLikesAlternative ++;
}
console.log(counterLikesAlternative)

//below counts the dislikes (using reduce )
let counterDisLikesReduce = counts.reduce((counterDisLikesReduce,obj) =>{
  if (obj.status === "dislike") counterDisLikesReduce += 1
  return counterDisLikesReduce;
},0);
console.log (counterDisLikesReduce)

//Below is the ES6 version of the above code
let counterEs6Reduce = counts.reduce((counterEs6Reduce,obj) =>
obj.status === "dislike" ? counterEs6Reduce += 1 : counterEs6Reduce , 0)
console.log (counterEs6Reduce)






