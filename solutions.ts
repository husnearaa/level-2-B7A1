// Solution - 1

const filterEvenNumbers = (num:number[]):number[]=>{

  const filteredNumber = num.filter((number)=>number%2===0)

  return filteredNumber

}



// Solution - 2

const reverseString = (data:string):string=>{

  const reversedString = data.split('').reverse().join("")


  return reversedString

 
}



// Solution - 3

type StringOrNumber = string | number
const checkType =(data:StringOrNumber):string=>{

  if(typeof data==='string'){
    return 'String'
  }else{
    return "Number"
  }

}




// Solution - 4

const getProperty = <X,Y extends keyof X>(user:X,key:Y)=>{
  return user[key]
}





// Solution - 5

interface Book{
  title:string;
  author:string;
  publishedYear: number
}
interface returnBook extends Book{
   isRead:boolean
}

const toggleReadStatus = (book:Book):returnBook=>{
  const newBook = {...book,isRead:true}
  return newBook
}



// Solution - 6

class Person {
  name:string;
  age:number

  constructor(name:string,age:number){
    this.name= name
    this.age=age
  }
}

class Student extends Person{
  grade:string

  constructor(name:string,age:number,grade:string){
    super(name,age)
    this.grade=grade
  }
  getDetails(){
    return Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}
  }
}







// Solution - 7

const getIntersection = (numArr1:number[],numArr2:number[]):number[]=>{

  const finalArray = []

  for (let item of numArr1){
    if(numArr2.includes(item)){
      finalArray.push(item)
    }
  }

  return finalArray

}



