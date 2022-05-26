$("#gg").css("background-color","pink")
var socket = io();

socket.on("position", function(msg){
  posX  = msg[0];
  posY = msg[1];
  $("#gg").css("left",+posX+"px");
  $("#gg").css("top",+posY+"px");
})

socket.on('chat message', function(msg) {

  $("h1").text(msg.split());

  if(Number(msg) == 4){
    posX +=50;
    $("#gg").css("left",+posX+"px");
  }
  if(Number(msg) == 1){
    posX -=50;
    $("#gg").css("left",+posX+"px");
  }
  if(Number(msg) == 2){
    posY -=50;
    $("#gg").css("top",+posY+"px");
  }
  if(Number(msg) == 3){
    posY +=50;
    $("#gg").css("top",+posY+"px");
  }
  if(Number(msg) == 5){
    posX +=50;
    posY +=50;
    $("#gg").css("left",+posX+"px");
    $("#gg").css("top",+posY+"px");
  }
  socket.emit("position",[posX,posY]);
});
