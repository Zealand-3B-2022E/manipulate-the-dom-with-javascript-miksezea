//Write your Javascript code here
console.log("My Shoppinglist")

// let myElement = document.getElementById("3")
// console.log(myElement)
// myElement.setAttribute("class","unhealthy")
// myElement.removeAttribute("class")
// myElement.setAttribute("id","1000")

let list =document.getElementsByTagName("li")
// console.log(list)

let newLielement = document.createElement("li")

let newTextelement = document.createTextNode("Mælk")
newLielement.setAttribute("class","healthy")
newLielement.setAttribute("id","4")
newLielement.append(newTextelement)

document.getElementById("list").append(newLielement)

for (let index = 0; index < list.length; index++) {
    const element = list[index];

    console.log(element)

    if(element.getAttribute("class")=="healthy"){
        // element.setAttribute("class","unhealthy")
        element.removeAttribute("class")
    }
}