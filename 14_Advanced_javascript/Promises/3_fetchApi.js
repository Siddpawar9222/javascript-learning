const fetchData = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/carts`);
    console.log(response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/*
-fetch is a built-in JavaScript function that is used to make network requests and retrieve data from a specified URL. It's commonly used to fetch resources from a server, like fetching data from an API or loading web pages.
-fetch function itself returns a promise that represents the completion of the network request.
 */
