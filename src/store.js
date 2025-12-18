export const initialStore = () => {
  return {
    url: "https://www.swapi.tech/api/",
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set-films":
      return { ...store, films: action.payload };

    case "set-people":
      return { ...store, people: action.payload };

    case "set-planets":
      return { ...store, planets: action.payload };

    case "set-species":
      return { ...store, species: action.payload };

    case "set-starships":
      return { ...store, starships: action.payload };

    case "set-vehicles":
      return { ...store, vehicles: action.payload };

     case "add-fav":
      if (store.favorites.includes(action.payload)) return store;
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case "delete-fav":
      return {...store, favorites: store.favorites.filter(
          fav => fav !== action.payload
        )
      }; 

    default:
      return store;
  }
}
