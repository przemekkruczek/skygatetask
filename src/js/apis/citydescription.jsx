import axios from "axios";

export default axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php?exintro&explaintext",
  params: {
    format: "json",
    action: "query",
    prop: "extracts",
    redirects: 1,
    origin: "*"
  }
});
