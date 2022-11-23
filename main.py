import pymysql
import datetime
import serial
import time

# make sure the 'COM#' is set according the Windows Device Manager
ser = serial.Serial('COM3', 9800, timeout=0.1)
time.sleep(2)


class DataBase:
    def __init__(self):
        self.connection = pymysql.connect(host='195.179.238.103',
                                          user='u978607264_cokefish',
                                          password='Rody2601',
                                          db='u978607264_bd')
        self.cursor = self.connection.cursor()

    def insert_data(self, Sensor_1, Sensor_2):
        pass
        sql = f"INSERT INTO DataIoT (GSR_Sensor, Temp_Sensor, DateRead) values ({Sensor_1}, {Sensor_2}," \
              f" '{datetime.datetime.now()}')"
        try:
            self.cursor.execute(sql)
            self.commit()
        except Exception as e:
            raise

    def close(self):
        self.connection.close()

    def commit(self):
        self.connection.commit()


database = DataBase()

while True:

    line = ser.readline()  # read a byte
    if line:
        string = line.decode().split(' ')  # convert the byte string to a unicode string
        num1 = int(string[0])  # convert the unicode string to an int
        num2 = int(string[1])  # convert the unicode string to an int
        print(string)
        database.insert_data(num1, num2)
