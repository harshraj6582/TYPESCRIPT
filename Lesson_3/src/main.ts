let stringArr = ['one' , 'hey' , 'Dave']

let guitars = ['starts' , 'Less ' , 2003]

let mixedData = ['EVH' , 1984 ]

stringArr[0] = "Harsh "
stringArr.push("Hey This Is Harsh raj ")

guitars[0] = 1984 
guitars.unshift("Jim ")

let myTuple : [string , number , boolean ] = ['Dave' , 42 , true  ]


let myObj : object 
myObj = []
console.log(myObj)

type Guitarist = {
    name : string ,
    active?: boolean , 
    albums : (string |number) []
}

let evh : Guitarist = {
    name : "Harsh ",
  
    albums : [1984 , 5500 , "OUUK5"]
}

const greetGuitar = (guitarist: Guitarist) =>{
    return `Hello ${guitarist.name}`
}

console.log(greetGuitar(evh))

