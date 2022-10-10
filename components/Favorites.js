import { useState, useEffect } from 'react';
import Title from 'components/ui/Title';
import Products from './api/products.json';
import ProductItem from 'components/ui/ProductItem'

export default function Favorites() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products);
    }, [])

    return (
        <div className="container mx-auto ">
            <Title>Favoriler</Title>
            <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-11 2xl:grid-cols-12">
                {products.length && products.map(product => <ProductItem key={product.id} product={product} />)}
            </div>
        </div>
    )
}