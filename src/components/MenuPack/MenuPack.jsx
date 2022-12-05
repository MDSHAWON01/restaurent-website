import React, { useEffect } from 'react';
import './MenuPack.css';
import { Row, Col, Container } from 'reactstrap';
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from '../../assets/fake-data/products';
import ProductCart from '../PopularMenu/ProductCart';
import { useState } from 'react';





const MenuPack = () => {
    const [filter, setFilter] = useState('RICE-MENU');
    const [products, setProducts] = useState(riceMenuProducts);

    useEffect(() => {
        if (filter === 'RICE-MENU') {
            setProducts(riceMenuProducts)
        }
        if (filter === 'FAST-FOOD') {
            setProducts(fastFoodProducts)
        }
        if (filter === 'PIZZA') {
            setProducts(pizzaProducts)
        }
        if (filter === 'DESSERT') {
            setProducts(dessertProducts)
        }
        if (filter === 'COFFEE') {
            setProducts(coffeeProducts)
        }
    }, [filter])

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="text-center mb-4"><h3 className='menu-title'>Our Menu Pack</h3></Col>
                    <Col lg='12' className="text-center mb-5">
                        <button className={`filter-btn ${filter === 'FAST-FOOD' ? 'active-btn' : ''}`} onClick={() => setFilter('FAST-FOOD')}>Fast Food</button>
                        <button className={`filter-btn ${filter === 'RICE-MENU' ? 'active-btn' : ''}`} onClick={() => setFilter('RICE-MENU')}>Rice Menu</button>
                        <button className={`filter-btn ${filter === 'PIZZA' ? 'active-btn' : ''}`} onClick={() => setFilter('PIZZA')}>Pizza</button>
                        <button className={`filter-btn ${filter === 'DESSERT' ? 'active-btn' : ''}`} onClick={() => setFilter('DESSERT')}>Dessert</button>
                        <button className={`filter-btn ${filter === 'COFFEE' ? 'active-btn' : ''}`} onClick={() => setFilter('COFFEE')}>Coffee</button>
                    </Col>
                    {
                        products.map(item => (
                            <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'> <ProductCart item={item} /> </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    );
};

export default MenuPack;