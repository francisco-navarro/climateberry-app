import { DeviceOptions, thingShadow } from "aws-iot-device-sdk";
import { Injectable } from "@angular/core";
import { Constants } from "../../config/constants";

@Injectable()
export class AwsIotService {
  private awsDeviceOptions: DeviceOptions = {
    keyPath: Constants.CERT_PATH + '/climateberry-client.private.key',
   certPath: Constants.CERT_PATH + '/climateberry-client.cert.pem',
     caPath: Constants.CERT_PATH + '/root-CA.crt',
   clientId: Constants.AWS_IOT_CLIENT_ID,
       host: Constants.AWS_IOT_HOST
  };


  constructor() {
    // Creamos una sombra
    console.log(this.awsDeviceOptions);
  }
}