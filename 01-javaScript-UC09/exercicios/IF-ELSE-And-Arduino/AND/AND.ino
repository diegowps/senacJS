/**
operador lógico AND
 @author Diego
 */
 
 //variaveis (numericas (numeros inteiros))
 int botao1, botao2;
 
 //
 void setup() {
  pinMode(13, OUTPUT);
  pinMode(3, INPUT_PULLUP); // botao 1
  pinMode(2, INPUT_PULLUP); // botao 2
  Serial.begin(9600); //habilita a comunicação serial arduino <-> PC
  // put your setup code here, to run once:

}

void loop() {
  //digitalWrite(13, 1); //0: desligado 1: ligado *teste
  //entrada
  botao1 = digitalRead(3);
  botao2 = digitalRead(2);
  //Serial.println(botao1);
  //Serial.println(botao2); apresenta a leitura no terminal 0 = pressionado / 1 = livre
  //processamento/saida
  if (botao1 == 0 && botao2 == 0) {
    digitalWrite (13, 1);
  }
  else{
    digitalWrite (13, 0);
  }
  // put your main code here, to run repeatedly:


}

