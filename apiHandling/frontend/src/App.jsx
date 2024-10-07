import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // const[products,error,loading] = customReactQuery('/api/products')

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    // not use promise use async await so in useEffect use iife--(Immediately Invoked Function Expression)
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get('/api/products?search=' + search, {
          signal: controller.signal
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request cancled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    //clearup
    return () => {
      controller.abort();
    };
  }, [search]);

  // if (error) {
  //   return <h1>Something Wend Wrong</h1>;
  // }
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>api handling in react</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Somthing went wrong</h1>}

      <h2>Number of products are : {products.length} </h2>
    </>
  );
}

export default App;

const customReactQuery = (urlPath) => {
  return [products, error, loading];
};
