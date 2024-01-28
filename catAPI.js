// Fetching the data from catAPI

async function catfetching() {
  const catApiResponse = await fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=20",
    {
      headers: {
        Accept: "application/json",
        "x-api-key":
          "live_rhBsiwO4Q39NmB048nnxtkTnNlQnUWqS1CyEA62lxTSTVoNaIL5fSePzwQajVOmG",
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
  // Selecting the grid container
  const gridContainer = document.getElementById("grid-container");

  // Clear the grid container before adding new items
  gridContainer.innerHTML = "";

  // Loop through the cats data
  catsData.forEach((cat) => {
    // Create a grid item for each cat
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    // Create and append the image element
    const image = document.createElement("img");
    image.src = cat.url;
    image.alt = "Cat Breed Image";
    gridItem.appendChild(image);

    // Create a container for the cat information
    const infoContainer = document.createElement("div");

    // Create and append the name element
    const name = document.createElement("h3");
    name.textContent = cat.breeds[0].name;
    infoContainer.appendChild(name);

    // Create and append the origin element
    const origin = document.createElement("h4");
    origin.textContent = "Origin: " + cat.breeds[0].origin;
    infoContainer.appendChild(origin);

    // Create and append the life span element
    const lifeSpan = document.createElement("p");
    lifeSpan.textContent = "Life-span: " + cat.breeds[0].life_span;
    infoContainer.appendChild(lifeSpan);

    // Create and append the temperament element
    const temperament = document.createElement("p");
    temperament.textContent = "Temperament: " + cat.breeds[0].temperament;
    infoContainer.appendChild(temperament);

    // Create and append the description element
    const description = document.createElement("p");
    description.textContent = "Description: " + cat.breeds[0].description;
    infoContainer.appendChild(description);

    // Append the info container to the grid item
    gridItem.appendChild(infoContainer);

    // Add the grid item to the grid container
    gridContainer.appendChild(gridItem);
  });
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
