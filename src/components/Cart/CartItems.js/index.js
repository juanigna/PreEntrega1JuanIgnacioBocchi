import { useContext } from 'react';
import CartContext from '../../../contexts/CartContext';
import './styles.css';
const CartItems = () => {
    const { cart, deleteFromCart } = useContext(CartContext);
    return (
        <div className="cart text-center">
            {cart.length !== 0 ? (
                cart?.map((prods) => (
                    <div
                        className="card"
                        style={{ width: '18rem' }}
                        key={prods.id}
                    >
                        <img
                            className="card-img-top img-fluid"
                            src={prods.prod_img}
                            alt={prods.name}
                        />
                        <div className="card-body">
                            <h3 className="card-title">{prods.name}</h3>
                            <h3 className="card-text">${prods.price}</h3>
                            <h3 className="card-text">
                                Cantidad: {prods.cantidad}
                            </h3>
                            <h3 className="card-text">
                                Total: ${prods.price * prods.cantidad}
                            </h3>
                            <button
                                onClick={() => deleteFromCart(prods.id)}
                                className="btn btn-danger"
                            >
                                Eliminar del carrito
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="alert alert-warning">
                    No hay elementos en el carrito, agregalos!
                </div>
            )}
        </div>
    );
};

export default CartItems;
