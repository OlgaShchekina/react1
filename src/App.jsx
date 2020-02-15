import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content";


const items1 = [
    {
        text: 'Home',
        link: 'home-page'
    },
    {
        text: 'Products',
        link: 'prod-page'
    },
    {
        text: 'Services',
        link: 'serv-page'
    },
    {
        text: 'Prices',
        link: 'price-page',
        size: 1
    }
];
const items2 = [
    {
        text: 'FAQ',
        link: 'faq-page'
    },
    {
        text: 'Education',
        link: 'edu-page'
    },
    {
        text: 'Events',
        link: 'event-page'
    },
    {
        text: 'Privacy',
        link: 'privacy-page',

    }
];

const text = "Hello World";

function App() {
    return (
        <div className="App">
            <Header headerMenuItem={items1}/>
            <Content/>
            <Footer headerMenuItem={items1} footerMenuItem1={items2} footerText={text}/>

        </div>
    );
}

export default App;
