//  Variables
const int PulseSensorSignalPin = A1;  // Pulse Sensor PURPLE WIRE connected to ANALOG PIN 0
const int LED13 = 13;                 //  The on-board Arduion LED
int PulseSignal;                      // holds the incoming raw data. Signal value can range from 0-1024
const int Threshold = 550;            // Determine which Signal to "count as a beat", and which to ingore.
const int GSRSensorSignalPin = A0;    // GSR Sensor YELLOW WIRE connected to ANALOG PIN 1
int GSRSignal = 0;                    // GSR signal, value can range from 0-524
int gsr_average = 0;


// The SetUp Function:
void setup() {
  pinMode(LED13, OUTPUT);  // pin that will blink to your heartbeat!
  Serial.begin(9600);      // Set's up Serial Communication at certain speed.
}


// The Main Loop Function
void loop() {
  long sum = 0;
  for (int i = 0; i < 10; i++)  //Average the 10 measurements to remove the glitch in GSR measure
  {
    GSRSignal = analogRead(GSRSensorSignalPin);
    sum += GSRSignal;
    delay(5);
  }
  gsr_average = sum / 10;
  Serial.print(gsr_average);  // Send nudes
  Serial.print(' ');          // Split data

  PulseSignal = analogRead(PulseSensorSignalPin);  // Read the PulseSensor's value.
                                                   // Assign this value to the "Signal" variable.

  Serial.println(PulseSignal);  // Send the Signal value to Serial Plotter.


  if (PulseSignal > Threshold) {  // If the signal is above "550", then "turn-on" Arduino's on-Board LED.
    digitalWrite(LED13, HIGH);
  } else {
    digitalWrite(LED13, LOW);  //  Else, the sigal must be below "550", so "turn-off" this LED.
  }


  delay(10);
}