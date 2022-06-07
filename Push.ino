//VARIABLES X,Y
int x1;
int y1;

void setup(){
  Serial.begin(9600);
}

void loop(){
  x1 = analogRead(A0);//SE LEE VALOR DEL EJE X
  y1 = analogRead(A1);//SE LEE VALOR DEL EJE Y

  //DE ACUERDO A LA POSICIÓN DEL JOSTICK DENTRO DEL X O Y
  //SE IMPRIME LA UBICACIÓN CORRESPONDIENTE
  if (x1>450 && x1 < 550 && y1>450 && y1<550){
      
  }else  if ( x1< 600 &&x1>500&& y1<50){
     Serial.println("1"); //POSICION DEL JOYSTICK: ARRIBA
     
  }else if (x1>800 && y1<100){
     Serial.println("12"); //POSICION DEL JOYSTICK: ARRIBA A LA DERECHA
     
  }else  if ( x1>800 && y1<600){
     Serial.println("2"); //POSICION DEL JOYSTICK: DERECHA 
     
  }else if (x1>800 && y1>800){
     Serial.println("23"); //POSICION DEL JOYSTICK: ABAJO Y A LA DERECHA
     
  }else if (x1>450 && y1>800){
     Serial.println("3"); //POSICION DEL JOYSTICK: ABAJO
     
  }else if (x1< 100 && y1 >800) {
    Serial.println("34"); //POSICION DEL JOYSTICK: ABAJO A LA IZQUIERDA
    
  } else if (x1<100 && y1> 450){
     Serial.println("4"); // POSICION DEL JOYSTICK: IZQUIERDA
     
  }else if (x1 <100 && y1 <100) {
    Serial.println("14"); // POSICION DEL JOYSTICK: ARRIBA A LA IZQUIERDA
  }  
  delay(5); 
}
