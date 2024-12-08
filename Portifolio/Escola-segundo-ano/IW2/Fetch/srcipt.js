function doSomething() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Other things to do before completion of the promise
        console.log("Did something");
        // The fulfillment value of the promise
        resolve("https://pokeapi.co/api/v2/pokedex/1/");

        reject("error promisse");

      }, 2000);
    });
  }
// url == resolve

  const listOfIngredients = [];

doSomething()
.then(   (url) => {
    // `return` keyword now included in front of fetch call.
    console.log(fetch(url));

    return fetch(url)
    .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });

  })
// error == reject
  .catch( (error) => {
    console.warn(error);
  })

  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients will now contain data from fetch call.
  });
