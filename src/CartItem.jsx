import React from 'react';
import './CartItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';

function CartItem({ onContinueShopping }) {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const calculateTotalAmount = () => {
        let total = 0;

        cart.forEach((item) => {
            const { quantity, cost } = item;
            const itemCost = parseFloat(cost.substring(1));

            total += itemCost * quantity;
        });

        return total;
    };

    const handleContinueShopping = (e) => {
        onContinueShopping(e);
    };

    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    const handleIncrement = (item) => {
        dispatch(
            updateQuantity({
                name: item.name,
                quantity: item.quantity + 1,
            })
        );
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(
                updateQuantity({
                    name: item.name,
                    quantity: item.quantity - 1,
                })
            );
        } else {
            dispatch(removeItem(item.name));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    const calculateTotalCost = (item) => {
        const itemCost = parseFloat(item.cost.substring(1));

        return itemCost * item.quantity;
    };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <button
                        className="continue-shopping-button"
                        onClick={handleContinueShopping}
                    >
                        Continue Shopping
                    </button>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.name}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-image"
                                />

                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: {item.cost}</p>

                                    <div className="quantity-controls">
                                        <button
                                            onClick={() => handleDecrement(item)}
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() => handleIncrement(item)}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <p>
                                        Subtotal: $
                                        {calculateTotalCost(item).toFixed(2)}
                                    </p>

                                    <button
                                        className="remove-button"
                                        onClick={() => handleRemove(item)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>
                            Total: $
                            {calculateTotalAmount().toFixed(2)}
                        </h3>

                        <button
                            className="continue-shopping-button"
                            onClick={handleContinueShopping}
                        >
                            Continue Shopping
                        </button>

                        <button
                            className="checkout-button"
                            onClick={handleCheckoutShopping}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartItem;