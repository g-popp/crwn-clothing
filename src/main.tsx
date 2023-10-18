import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './contexts/user.context.tsx';
import { ProductsProvider } from './contexts/products.context.tsx';
import { CartPovider } from './contexts/cart.context.tsx';

import App from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <ProductsProvider>
                    <CartPovider>
                        <App />
                    </CartPovider>
                </ProductsProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);
