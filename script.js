//fånga upp talen med id längre ner i koden 




//fånga upp knappen
let btn = document.getElementById("btn");
//fångar upp option

//fånga upp vilket typ av alternativ vi har 
let add = document.getElementById("add");

let sub = document.getElementById("sub");

let multip = document.getElementById("multip");

let dela = document.getElementById("dela");


// UL list Skapar den utanför knappen som vi ska bara ha en ul!
let ul = document.createElement("ul");
document.body.append(ul);



//vad som händer när man trycker på knappen.
btn.addEventListener("click", function(){

    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value; //tar id

    tal1 = Number.parseInt(input1); // omvandlar string till nummer istället
    tal2 = Number.parseInt(input2);

    let opt =document.getElementById("mathOption").value; //vilket val alternativ
    
    var li =document.createElement("li"); //Skapar en li för varje nytt tal som är framtaget

    ul.appendChild(li);
    
    switch(opt){
        case "add":         
            svar = tal1 + tal2;
            li.appendChild(document.createTextNode(svar));
            break;
        
        case "sub":
            svar = tal1 - tal2;
            li.appendChild(document.createTextNode(svar));
            break;

        case "multip": 
            svar = tal1 * tal2;
            li.appendChild(document.createTextNode(svar));
            break;
        
        case "dela":
            svar = tal1 / tal2;
            li.appendChild(document.createTextNode(svar));
            break;

        default:
            li.appendChild(document.createTextNode("Felaktig inmatning försök igen!")); //kommer inte nå denna men bra för säkerhetens skull!
            break;
    }
    


})






