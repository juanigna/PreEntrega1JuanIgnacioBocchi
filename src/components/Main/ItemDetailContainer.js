import React, { useEffect } from 'react';
import stock from '../mock/stock';
import '../../App.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../api/firebase/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [productoEncontrado, setProductoEncontrado] = useState({});

    useEffect(() => {
        const collectionProd = collection(db, 'products');
        const ref = doc(collectionProd, itemId);

        getDoc(ref)
            .then((res) => {
                setProductoEncontrado({
                    id: res.id,
                    ...res.data(),
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [itemId]);

    return <ItemDetail producto={productoEncontrado} />;
};

export default ItemDetailContainer;
