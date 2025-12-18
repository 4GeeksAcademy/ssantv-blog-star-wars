# Star Wars Blog in React — Galaxy of Characters, Planets, and More

This project is an **interactive Star Wars blog** developed with **React**, where you can explore movies, characters, planets, ships, vehicles, and species from the Star Wars universe, and add your favorites to a personal list.

---

## Important Details

- The entire application is dynamically rendered using **React components**.
- **`useState`**, **`useEffect`**, and a **global reducer** (`useGlobalReducer`) are used to manage:
  - Data on movies, characters, planets, species, ships, and vehicles.
  - Favorites list.
  - Status messages and error handling.
- The application connects to the **SWAPI API** and reference images hosted on GitHub to display up-to-date data and images.
- The design uses **custom CSS** and **Bootstrap**, with a dark style and visual details inspired by Star Wars.

---

## Main features

### 1. Explore categories
- The **Home** page displays an **accordion** with the following categories:
  - Species
  - Ships
  - Movies
  - Characters
  - Planets
  - Vehicles
- Each category dynamically loads its data from the API and displays it in interactive cards.

### 2. View details of an item
- Clicking on any card opens the **Details** page with complete information:
  - High-quality images (with replacements if unavailable).
  - Category-specific data (e.g., episode and director for movies, gender and height for characters, load capacity for vehicles, etc.).
  - Button to add the item to favorites.

### 3. Favorites management
- From any card or details page, you can **add items to favorites**.
- There is a control to avoid duplicates.
- The **Navbar** displays a favorites counter and a drop-down menu to:
  - View all favorites.
  - Remove any favorite with a single click.

### 4. Navigation
- Dynamic navigation with React Router:
  - `/` → Home with all categories.
  - `/details/:category/:uid` → Details page for any item.
  - Direct routes for each category: `/films`, `/people`, `/planets`, `/species`, `/starships`, `/vehicles`.
- Handling invalid routes with an **Error component**.

---

## How to use the application

1. Open the application in your browser.
2. Explore the different categories from the Home or Navbar.
3. Click on any card to see **full details** about movies, characters, planets, starships, vehicles, or species.
4. Add items to **favorites** from the card or the details page.
5. Access your favorites from the Navbar and remove those you no longer want.

---

## Possible improvements
- Add a font that matches the blog's theme, as the current one does not have stylized numbers.
- Add **search** to each category to handle large amounts of data.
- Incorporate **animations** into the cards and details.