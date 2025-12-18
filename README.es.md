# Star Wars Blog en React — Galaxia de Personajes, Planetas y Más

Este proyecto es un **blog interactivo de Star Wars** desarrollado con **React**, donde puedes explorar películas, personajes, planetas, naves, vehículos y especies del universo de Star Wars, y añadir tus favoritos a una lista personal.

---

## Detalles importantes

- Toda la aplicación se renderiza dinámicamente mediante **componentes de React**.
- Se utiliza **`useState`**, **`useEffect`** y un **reducer global** (`useGlobalReducer`) para gestionar:
  - Datos de películas, personajes, planetas, especies, naves y vehículos.
  - Lista de favoritos.
  - Mensajes de estado y manejo de errores.
- La aplicación se conecta a la **API SWAPI** y a imágenes de referencia alojadas en GitHub para mostrar datos e imágenes actualizadas.
- El diseño utiliza **CSS personalizado** y **Bootstrap**, con estilo oscuro y detalles visuales inspirados en Star Wars.

---

## Funcionalidades principales

### 1. Explorar categorías
- El **Home** muestra un **acordeón** con las categorías:
  - Especies
  - Naves
  - Películas
  - Personajes
  - Planetas
  - Vehículos
- Cada categoría carga dinámicamente sus datos desde la API y los muestra en tarjetas interactivas.

### 2. Ver detalles de un elemento
- Al hacer clic en cualquier tarjeta se abre la página **Details** con información completa:
  - Imágenes de alta calidad (con reemplazo si no están disponibles).
  - Datos específicos según la categoría (por ejemplo, episodio y director para películas, género y altura para personajes, capacidad de carga para vehículos, etc.).
  - Botón para añadir el elemento a favoritos.

### 3. Gestión de favoritos
- Desde cualquier tarjeta o página de detalles, puedes **añadir elementos a favoritos**.
- Hay un control para evitar duplicados.
- La **Navbar** muestra un contador de favoritos y un menú desplegable para:
  - Ver todos los favoritos.
  - Eliminar cualquier favorito con un solo clic.

### 4. Navegación
- Navegación dinámica con **React Router**:
  - `/` → Home con todas las categorías.
  - `/details/:category/:uid` → Página de detalles de cualquier elemento.
  - Rutas directas para cada categoría: `/films`, `/people`, `/planets`, `/species`, `/starships`, `/vehicles`.
- Manejo de rutas inválidas con un **componente Error**.

---

## Cómo usar la aplicación

1. Abre la aplicación en tu navegador.
2. Explora las diferentes categorías desde el Home o la Navbar.
3. Haz clic en cualquier tarjeta para ver **detalles completos** de películas, personajes, planetas, naves, vehículos o especies.
4. Añade elementos a **favoritos** desde la tarjeta o la página de detalles.
5. Accede a tus favoritos desde la Navbar y elimina los que ya no quieras.

---

## Posibles mejoras
- Añadir una fuente que cumpla con al temática del blog, ya que la actual no posee números estilizados
- Añadir **búsqueda** en cada categoría para manejar grandes cantidades de datos.
- Incorporar **animaciones** en las tarjetas y detalles.