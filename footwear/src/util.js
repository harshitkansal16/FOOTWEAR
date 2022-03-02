import axios from "axios";

export const sendData = (detail) => {

    const data = {
      "username": `${detail.username}`,
      "image": `${detail.image}`,
      "title": `${detail.title}`,
      "price": `${detail.price}`
    }

    axios.post("http://localhost:5000/cart", data);

    return true;
}
