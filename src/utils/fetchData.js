import axios from "axios";

const API = "https://5fc9346b2af77700165ae514.mockapi.io/simpsons";

export const fetchData= async ()=> {
    return await axios
    .get(API)
    .then((res) => res.data)
}