// Fetch API returns a Promise

// fetch("https://example.com/data.json")
// .then(response => {
//     if(!response.ok) throw new Error("HTTP error " + response.status);
//     return response.json();
// })
// .then(data => {
//     console.log("Got dat: ", data);
// })
// .catch(error => {
//     console.error("Network or parsing error:", error);
// });

fetch('https://randomuser.me/api/')
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the JSON data from the response
    return response.json();
  })
  .then(data => {
    // Work with the fetched data
    console.log(data);
    // Expected output for /todos/1: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });



