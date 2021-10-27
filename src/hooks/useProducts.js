import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://young-wave-53752.herokuapp.com/')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);
    return [products, setProducts];
}

export default useProducts;