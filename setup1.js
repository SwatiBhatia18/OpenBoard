let ctool = "pencil" ;
let canvasBoard = document.querySelector("canvas");
let tool = canvasBoard.getContext("2d");
let body = document.querySelector("body");
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
// canvas dimesnions set karne ke baad jo changes karoge wahi reflect
tool.strokeStyle = "red";
