import React, { useEffect, useState } from 'react';
import Item from './Item';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { db } from '../../api/firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemList = React.memo(() => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [stock, setStock] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        const collectionProd = collection(db, 'products');
        let category = categoryName || '';
        const q = query(collectionProd, where('category', '==', category));
        const prodFilters = categoryName ? q : collectionProd;
        const getProds = async () => {
            try {
                const res = await getDocs(prodFilters);

                const productos = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setProductos(productos);
                // res.forEach((prod) => {
                //     const product = {
                //         id: prod.id,
                //         ...prod.data(),
                //     };
                //
                // });
                // console.log(productos);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
            }
        };
        getProds();
    }, [categoryName]);

    return (
        <div className="d-flex ">
            {isLoading ? (
                <Spinner className="m-auto" animation="border" />
            ) : (
                <Item products={productos} />
            )}
        </div>
    );
});

export default ItemList;
// setTimeout(() => {
//     setIsLoading(false);
//     const getProducts = new Promise((resolve, reject) => {
//
//
//         resolve(filtrados);
//     }, []);
//     getProducts.then((prod) => setProductos([...prod]));
// }, 2000);
