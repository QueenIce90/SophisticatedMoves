// routes.js
import React from "react";
import Homepage from "./components/Homepage";
import ServicePage from "./components/ServicePage";
import ContactForm from "./components/ContactForm";
import QuoteRequestForm from "./components/QuoteRequestForm";

const routes = [
{

    path: '/',
    element: <Homepage /> 
},
{

    path: '/services',
    element: <ServicePage />
},
{

    path: '/contact',
    element: <ContactForm />
},
{

    path: '/quote',
    element: <QuoteRequestForm/>
}

];

export default routes;
