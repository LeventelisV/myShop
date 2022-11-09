import axios from "axios"
import { useEffect,useState } from "react";


const useFetch = () => {

    const [products, setProducts] = useState([]);  
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    'https://fakestoreapi.com/products');

                let initialCategories = response.data.map(product => product.category);
                initialCategories = new Set(initialCategories);
                setCategories([...initialCategories]);
                setProducts(response.data);
                setError(null);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false)
            }
        }
        getData()
    }, []);
    return {products,error,loading,categories}
}

export default useFetch
