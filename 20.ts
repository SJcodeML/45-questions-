// // Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
//  or anything else you’d like. Write a program that creates a list containing these items.

const landmarks: string[] = [
    "Eiffel Tower",
    "Statue of Liberty",
    "Great Wall of China",
    "Pyramids of Giza",]
    

// console.log(landmarks);

//Another approach
console.log("List Of Landmarks \n")
landmarks.map((item => {
    console.log(item)
}))
