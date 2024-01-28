// Fetching the data from catAPI

async function catfetching() {
  const catApiResponse = await fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10",
    {
      headers: {
        Accept: "application/json",
        "x-api-key": "CAT_API_KEY",
      },
    }
  );
  if (!catApiResponse.ok) {
    console.error(`Status: ${catApiResponse.status}`);
    console.error(`Text: ${await catApiResponse.text()}`);
    return;
  }

  // returning the parsed JSON from the response as an object
  const catsData = await catApiResponse.json();
  return catsData;
}
async function printCatData() {
  const catsData = await catfetching();
  displayCats(catsData);
  console.log(catsData);
}
printCatData(); // Call the function to execute it

function displayCats(catsData) {
  //selecting the grid container
  const gridContainer = document.getElementById("grid-container");

  // creating the grid item
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  // creating and appending the image element
  catsData.map((cat) => {
    const image = document.createElement("img");
    image.src = cat.url;
    image.alt = "Cat Breed Image";
    gridItem.appendChild(image);

    const name = document.createElement("h3");
    name.textContent = cat.breeds[0].name;
    gridItem.appendChild(name);
  });

  // Add the grid item to the grid container
  gridContainer.appendChild(gridItem);
}
// const headers = new Headers({
//   "Content-Type": "application/json",
//   "x-api-key":
//     "live_rhBsiwO4Q39NmB048nnxtkTnNlQnUWqS1CyEA62lxTSTVoNaIL5fSePzwQajVOmG",
// });

// var requestOptions = {
//   method: "GET",
//   headers: headers,
//   redirect: "follow",
// };

// fetch(
//   "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
//   requestOptions
// )
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));
