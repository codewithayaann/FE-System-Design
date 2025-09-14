# Routing Strategies in Single Page Applications (SPAs)

Single Page Applications (SPAs) provide a fluid, app-like user experience by dynamically updating the content on a single web page without full page reloads. **Routing** is the mechanism that enables this by managing the application's different views or "pages" and synchronizing them with the browser's URL.

-----

## 1\. Client-Side Routing: The Core of SPAs

Unlike traditional multi-page applications where the server serves a new HTML page for each URL, SPAs use **client-side routing**. This means a JavaScript library running in the browser is responsible for listening to URL changes and rendering the appropriate UI component. This approach is significantly faster and more efficient as it only fetches necessary data, not an entire new page.

### How it works:

Client-side routers use the browser's **History API** (`history.pushState()`, `history.replaceState()`) or the URL's hash fragment (`#`) to manipulate the URL without triggering a server request.

  * `history.pushState()`: Adds a new entry to the browser's history stack, changing the URL.
  * `history.replaceState()`: Replaces the current history entry.
  * `window.onpopstate`: An event listener that triggers when the user navigates back or forward.

-----

## 2\. Static Routes

**Static routes** are the simplest and most common type of route. They map a specific, unchanging URL path to a single UI component. These are ideal for pages with fixed content, such as a home page, about page, or contact page.

### Example (React Router v6)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

  * ` path="/"  `: Corresponds to the root URL.
  * `element={<Home />}`: Specifies the component to render for that path.

-----

## 3\. Dynamic Routes

**Dynamic routes**, also known as parameterized routes, allow you to create flexible URLs that can include variable data. They are crucial for displaying information about a specific item, such as a user profile or a product details page, without creating a separate route for each item.

The variable part of the URL is captured as a **route parameter** and can be accessed within the component.

### Example (React Router v6)

```jsx
// src/pages/Product.js
import { useParams } from 'react-router-dom';

function Product() {
  const { productId } = useParams();

  // Fetch product data based on productId
  // const [product, setProduct] = useState(null);
  // useEffect(() => {
  //   fetch(`/api/products/${productId}`).then(res => res.json()).then(data => setProduct(data));
  // }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
      <p>Displaying details for product ID: {productId}</p>
      {/* {product && <ProductDetailComponent product={product} />} */}
    </div>
  );
}

// In your main router file:
<Route path="/products/:productId" element={<Product />} />
```

  * `path="/products/:productId"`: The `:productId` part is a placeholder that captures a dynamic value from the URL.
  * `useParams()`: A hook that provides an object with key-value pairs of the URL parameters.

-----

## 4\. Protected Routes

**Protected routes** are a fundamental security strategy that restricts access to certain pages to authenticated users only. If a user is not logged in, they are redirected to a login page or an unauthorized access page.

This is typically achieved by creating a **wrapper component** or using a **router guard** that checks for the user's authentication status before rendering the target component.

### Example (React Router v6 with a wrapper component)

```jsx
import { Navigate } from 'react-router-dom';

// A mock authentication hook
const useAuth = () => {
  const user = { loggedIn: false }; // Replace with actual auth logic
  return user.loggedIn;
};

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/login" replace />;
  }
  return children;
};

// In your main router file:
<Routes>
  {/* Public routes */}
  <Route path="/login" element={<Login />} />
  <Route path="/" element={<Home />} />
  
  {/* Protected route */}
  <Route 
    path="/dashboard" 
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } 
  />
</Routes>
```

  * `ProtectedRoute`: This component acts as a gatekeeper.
  * `useAuth()`: This represents a custom hook or function that checks the user's login status (e.g., checks for a token in `localStorage` or a state variable).
  * `<Navigate to="/login" replace />`: The component from `react-router-dom` that performs the redirection. The `replace` prop ensures that the login page replaces the current entry in the history, preventing the user from just pressing the back button to get to the protected page.
