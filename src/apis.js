// API FUNCTIONS

// Random user
export const getName = async () => {

    // the given reqres API works between user ids 1 and 10
    const userId = Math.floor(Math.random() * 10 + 1)

    const user_api_url = `https://reqres.in/api/users/${userId}`
    const response = await fetch(user_api_url)
    const data = await response.json();
    return data.data.first_name;
  }
  
  // Random dessert
  export const getDesserts = async (numDesserts) => {
    const desserts = await getRandomDataAPI("dessert/random_dessert", numDesserts)

    // Map to a name and description
    return desserts.map((dessert) => {
      return {
        id: dessert.id,
        name: `${dessert.flavor} ${dessert.variety}`,
        description: `With ${dessert.topping} topping`
      }
    })
  }
  
  // Random beer
  export const getBeers = async (numBeers) => {
    const beers = await getRandomDataAPI("beer/random_beer", numBeers)
    
    // Map to a name and description
    return beers.map((beer) => {
      return {
        id: beer.id,
        name: beer.name,
        // description: `${beer.brand} ${beer.style}, ${beer.alcohol} alcohol. Hop: ${beer.hop}. Yeast: ${beer.yeast}. Malts: ${beer.malts}`
        description: `${beer.brand} ${beer.style}, ${beer.alcohol} alcohol`
      }
    })
  }
  
  // Random food
  export const getFoods = async (numFoods) => {
    const foods = await getRandomDataAPI("food/random_food", numFoods)

    // Map to a name and description
    return foods.map((food) => {
      return {
        id: food.id,
        name: food.dish,
        // description: (food.description.length > 100 ? food.description.substring(0,68) + "..." : food.description)
        description: food.description
      }
    })
  }
  
  // Generic data getter from random-data-api.com/api
  export const getRandomDataAPI = async (resource, numItems) => {
    const api_url = `https://random-data-api.com/api/${resource}?size=${numItems}`
    const response = await fetch(api_url)
    const data = await response.json();
    return data;
  }