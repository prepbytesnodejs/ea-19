const heading=document.getElementById("heading");
const btn=document.getElementById("btn");

// you can attach  evntlistener to any element --
// inside the callback what you do // you might change the properties of other element

btn.addEventListener("click", function (event){///0

    heading.style.color="green";

    //console.log("hello button clicked")

}) // end

heading.addEventListener("mouseenter",function(event){
    heading.style.color="brown";

})

heading.addEventListener("mouseleave",function(event){
    heading.style.color="black";

})



// you have to change the color of heading element using mouseover event