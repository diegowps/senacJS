/**
@author Diego
//exercicio if else 
luz de cortesia
*/
//variaveis
int ldr;
pinMode(13, OUTPUT);
Serial.begin(9600);




void loop()
ldr = ana
Serial.println(ldr);
if (ldr < 650) {
    digitalWrite(13, 1);
  } else {
    digitalWrite(13, 0);
  }
}


void setup() {

  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:

}
