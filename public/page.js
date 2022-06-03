$("#gg").css("background-color","pink")
var socket = io();

socket.on("position", function(msg){
  posX  = msg[0];
  posY = msg[1];
  $("#gg").css("left",+posX+"px");
  $("#gg").css("top",+posY+"px");
})

socket.on('chat message', function(msg) {
  $("h1").text(posX+" "+posY);
  if(Number(msg) == 2){
    posX +=1;
  }
  if(Number(msg) == 4){
    posX -=1;
  }

  if(Number(msg) == 1){
    posY -=1;

  }
  if(Number(msg) == 3){
    posY +=1;

  }
  if(Number(msg) == 23){
    posX +=1;
    posY +=1;

  }
  if(Number(msg) == 12){//Listo
    posX +=1;
    posY -=1;

  }
  if(Number(msg) == 14){//listo
    posX -=1;
    posY -=1;

  }
  if(Number(msg) == 34){
    posX -=1;
    posY +=1;
  }
  if(posX>-500 & posX<500 & posY>-400 & posY<300){
    $("#gg").css("left",+posX+"px");
    $("#gg").css("top",+posY+"px");
  }
  socket.emit("position",[posX,posY]);
});

$(document).keypress(function(event) {
  if(event.key == "s"){
    posY +=5;
  }
  if(event.key == "w"){
    posY -=5;
  }
  if(event.key == "d"){
    posX +=5;
  }
  if(event.key == "a"){
    posX -=5;
  }
  if(posX>-500 & posX<500 & posY>-400 & posY<300){
    $("#gg").css("left",+posX+"px");
    $("#gg").css("top",+posY+"px");
  }
});
