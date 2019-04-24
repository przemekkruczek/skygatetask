import axios from "axios";

const today = new Date().toISOString().substring(0, 19);
const yesterday = new Date(Date.now() - 864e5).toISOString().substring(0, 19);

export default axios.create({
  baseURL: "https://api.openaq.org/v1",
  params: {
    limit: 100,
    sort: "desc",
    order_by: "value",
    date_from: yesterday,
    date_to: today,
    has_geo: true,
    parameter: "pm25"
  }
});
