/**
 Estudo da estrutura de controle if
 @author Diego
 @author Leone
 */

//variaveis (numericas (numeros inteiros))
int botao1, botao2;

void setup() {
  pinMode(13, OUTPUT);
  pinMode(3, INPUT_PULLUP);  // botao 1
  Serial.begin(9600);        //habilita a comunicação serial arduino <-> PC
  // put your setup code here, to run once:
}

void loop() {
  //digitalWrite(13, 1); //0: desligado 1: ligado
  botao1 = digitalRead(3);
  Serial.println(botao1);

  if (botao1 == 0) {
    digitalWrite(13, 1);
  } else {
    digitalWrite(13, 0);
  }
  // put your main code here, to run repeatedly:
}
