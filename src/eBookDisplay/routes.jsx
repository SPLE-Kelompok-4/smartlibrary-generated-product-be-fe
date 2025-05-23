/*
    Generated on 08/05/2025 by UI Generator PRICES-IDE
    https://amanah.cs.ui.ac.id/research/ifml-regen
    version 3.9.0
*/
import React from 'react';
import EBookDisplayPage from './containers/EBookDisplayPage'
import AddEBookPage from './containers/AddEBookPage'
import EditEBookPage from './containers/EditEBookPage'

const eBookDisplayRoutes = [
{ 
    path: "/ebook",
    element: <EBookDisplayPage />,
},
{ 
    path: "/ebook/add",
    element: <AddEBookPage />,
},
{ 
    path: "/ebook/edit/:id",
    element: <EditEBookPage />,
}
]

export default eBookDisplayRoutes