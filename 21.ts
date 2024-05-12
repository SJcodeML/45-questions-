// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.



//Making objects of each landmark and then will store all objects in an array[]:
type uni={
    country : string,
    capital: string,
    population: string,
    officialLanguage : string 
}

let california:uni = {
    country : "United States",
    capital: "",
    population: "",
    officialLanguage : "" , 

}

let  france:uni ={
    country : "",
    capital : "",
    population : "" ,
    officialLanguage  : "French" ,
}

let  Shangha:uni = {
    country : "China",
    capital : "",
    population : "1.412 billion",
    officialLanguage : " "
}

let countries3: any[] = [ california , france , Shangha ]
 console.log(countries3)


 


 console.log (`Its my wish to go ${california.country} . I know ${france.officialLanguage} as well .Population of ${Shangha.country} is ${Shangha.population} `)