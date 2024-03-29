import axios from "axios";
import fetchJsonp from "fetch-jsonp";

export interface AirlineData {
  site: string;
  code: string;
  alliance: string;
  logoURL: string;
  name: string;
  phone: string;
}

export const Api = {
  async getAll(): Promise<AirlineData[]> {
    const data = await fetchJsonp(
      "http://kayak.com/h/mobileapis/directory/airlines/homework",
      {
        jsonpCallback: "jsonp",
      }
    );
    const response = await data.json();
    return response;
  },
};
