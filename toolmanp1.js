let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let options = document.querySelectorAll(".size-container");
// identify -> click  -> again click

pencil.addEventListener("click",function(e){
      if(ctool == "pencil")
      {
          // second click
          // options show 
          options[0].style.display = "flex";
          
      }
      else
      {
          ctool = "pencil";
          tool.strokeStyle = "red";
          for(let i=0;i<options.length;i++)
          {
               options[i].style.display = "none";
          }
          tool.lineWidth = pencilSize;
      }
       
})
eraser.addEventListener("click",function(e){
      if(ctool == "eraser")
      {
          // second click par size options will be shown 
          options[1].style.display = "flex";
      }
      else
      {
          //first click par tool change 
          ctool = "eraser";
          tool.strokeStyle = "white";
          // koi aur clicked aur usko options visible to wo remove ho jaaye 
          for(let i=0;i<options.length;i++)
          {
                  options[i].style.display = "none";
          }
          tool.lineWidth = eraserSize;

      }
})
rect.addEventListener("click",function(e){
      if(ctool == "rect")
      {
          options[2].style.display = "flex";
      }
      else
      {
          ctool = "rect";
          tool.strokeStyle = "red";
          for(let i=0;i<options.length;i++)
          {
               options[i].style.display = "none";
          }
          tool.lineWidth = rectSize;
      }
})
line.addEventListener("click",function(e){
      if(ctool == "line")
      {
          options[3].style.display = "flex";
      }
      else
      {
          ctool = "line";
          tool.strokeStyle = "red";
          for(let i=0;i<options.length;i++)
          {
               options[i].style.display = "none";
          }
          tool.lineWidth = lineSize;
      }
})

//color change

let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");
redColor.addEventListener("click", function () {
    tool.strokeStyle = "red";
})
greenColor.addEventListener("click", function () {
    tool.strokeStyle = "green";
})
blueColor.addEventListener("click", function () {
    tool.strokeStyle = "blue";
})

//size change 

let pencilSize = 5;
let eraserSize = 5;
let rectSize = 5;
let lineSize = 5;
//let options = document.querySelectorAll(".size-container");
options[0].addEventListener("click",function(e){
            // console.log(e.target); // give the tags which is clicked actually 
            // within the currentTarget i.e to whom event click is assigned 
            // console.log(e.currentTarget); // give the tag to whom event is assigned 
            
            let sizeArray = ["size1" , "size2" , "size3" , "size4"];
            let classArray = e.target.classList;
            let firstClass = classArray[0];
            let test = sizeArray.includes(firstClass);
            if(test)
            {
                if(firstClass == "size1")
                {
                    pencilSize = 5;
                }
                else if(firstClass == "size2")
                {
                    pencilSize = 10;
                }
                else if (firstClass == "size3")
                {
                    pencilSize = 15;
                }
                else
                {
                    pencilSize = 20;
                }
            }
            console.log(pencilSize);
            tool.lineWidth = pencilSize;
})
options[1].addEventListener("click",function(e){
    
    let sizeArray = ["size1" , "size2" , "size3" , "size4"];
    let classArray = e.target.classList;
    let firstClass = classArray[0];
    let test = sizeArray.includes(firstClass);
    if(test)
    {
        if(firstClass == "size1")
        {
            eraserSize = 5;
        }
        else if(firstClass == "size2")
        {
            eraserSize = 10;
        }
        else if (firstClass == "size3")
        {
            eraserSize = 15;
        }
        else
        {
            eraserSize = 20;
        }
    }
    console.log(eraserSize);
    tool.lineWidth = eraserSize;
})
options[2].addEventListener("click",function(e){
    let sizeArray = ["size1" , "size2" , "size3" , "size4"];
    let classArray = e.target.classList;
    let firstClass = classArray[0];
    let test = sizeArray.includes(firstClass);
    if(test)
    {
        if(firstClass == "size1")
        {
            rectSize = 5;
        }
        else if(firstClass == "size2")
        {
            rectSize = 10;
        }
        else if (firstClass == "size3")
        {
            rectSize = 15;
        }
        else
        {
            rectSize = 20;
        }
    }
    console.log(rectSize);
    tool.lineWidth = rectSize;
})
options[3].addEventListener("click",function(e){

    let sizeArray = ["size1" , "size2" , "size3" , "size4"];
    let classArray = e.target.classList;
    let firstClass = classArray[0];
    let test = sizeArray.includes(firstClass);
    if(test)
    {
        if(firstClass == "size1")
        {
            lineSize = 5;
        }
        else if(firstClass == "size2")
        {
            lineSize = 10;
        }
        else if (firstClass == "size3")
        {
            lineSize = 15;
        }
        else
        {
            lineSize = 20;
        }
    }
    console.log(lineSize);
    tool.lineWidth = lineSize;
})