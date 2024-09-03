/**
  Jogo GENIUS
  @author Professor José de Assis
*/

void setup() {
  //Leds
  pinMode(2, OUTPUT);  //Verde
  pinMode(3, OUTPUT);  //Vermelho
  pinMode(4, OUTPUT);  //Azul
  pinMode(5, OUTPUT);  //Amarelo
  //Buzzer
  pinMode(6, OUTPUT);
  //Botões
  pinMode(8, INPUT_PULLUP);   //Verde
  pinMode(9, INPUT_PULLUP);   //Vermelho
  pinMode(10, INPUT_PULLUP);  //Azul
  pinMode(11, INPUT_PULLUP);  //Amarelo
}

void loop() {
  int btn1 = digitalRead(8);
  int btn2 = digitalRead(9);
  int btn3 = digitalRead(10);
  int btn4 = digitalRead(11);
  if (btn1 == 0) {
    tone(6, 262);  //Dó
    digitalWrite(2, 1);
  } else if (btn2 == 0) {
    tone(6, 294);  //Ré
    digitalWrite(3, 1);
  } else if (btn3 == 0) {
    tone(6, 330);  //Mi
    digitalWrite(4, 1);
  } else if (btn4 == 0) {
    tone(6, 349);  //Fá
    digitalWrite(5, 1);
  } else {
    noTone(6);
    digitalWrite(2, 0);
    digitalWrite(3, 0);
    digitalWrite(4, 0);
    digitalWrite(5, 0);
  }
}
