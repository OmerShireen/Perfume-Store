import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: loadCartFromLocalStorage(),
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload.id);
            localStorage.setItem("cart", JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem("cart");
        },
        remove_one_Item: (state, action) => {
            const itemIndex = state.items.findIndex(i => i.id === action.payload.id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity -= 1;
                if (state.items[itemIndex].quantity <= 0) {
                    state.items.splice(itemIndex, 1);
                }
            }
            localStorage.setItem("cart", JSON.stringify(state.items));
        }
    },
});

export const { addToCart,remove_one_Item, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
