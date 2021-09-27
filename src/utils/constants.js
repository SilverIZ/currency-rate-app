const apiKey = "8f7f70b77b3f5601145822714cd5b08d";
const apiUrl = "http://api.exchangeratesapi.io/";
const currency = "CAD, IDR, JPY, CHF, USD";
const res =
  apiUrl +
  "v1/latest?access_key=" +
  apiKey +
  "&symbols=" +
  currency +
  "&format=1";

export { res };
