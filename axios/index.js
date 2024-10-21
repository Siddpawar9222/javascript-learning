import axios from "axios";

console.log("Hello World!");
const BASE_URL = "https://jsonplaceholder.typicode.com";

const response = async () => {
  try {
    const { status, data } = await axios.get(`${BASE_URL}/kkkkk`);
    // console.log(
    //   "******************************SUCCESS******************************"
    // );
    console.log(status);
    console.log(data);
  } catch (error) {
    // console.log(
    //   "******************************ERROR******************************"
    // );
    console.log(error);
    if (error.response) {
      const { status, statusText } = error.response;
      console.log(`Error Status: ${status}, Message: ${statusText}`);
      return { status, statusText };
    } else if (error.request) {
      console.log("Request was made but no response received", error.request);
      return {
        status: 0,
        statusText: "Request was made but no response received",
      };
    } else {
      console.log(
        "Error occurred while setting up the request:",
        error.message
      );
      return {
        status: 0,
        statusText: "Error occurred while setting up the request:",
      };
    }
  }
};

const main = async () => {
    const result =  await response(); 
    console.log(result);
};


main();






