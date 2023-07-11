import { useState } from "react";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import Product from "../components/Product";



const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading ] = useState();
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
      console.log(data);
      console.log(res);

    }
    catch(error){
      console.log("error")
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  }, [])
 

  return (
    <div>
      {
        loading ? <Spinner/> : 
        posts.length > 0 ?
        (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">{posts.map((post) =>  (
          <Product key={post.id} post={post}/> 
        ) )
      }
          </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
        
      }
    </div>

  );
};

export default Home;
