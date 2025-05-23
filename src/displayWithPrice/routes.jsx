/*
  Generated on 08/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React from 'react';

import EBookCardPageWithPrice from './containers/EBookCardPageWithPrice'
import AddEBookWithPricePage from './containers/AddEBookWithPricePage'
import EditEBookWithPricePage from './containers/EditEBookWithPricePage'

const displayWithPriceRoutes = [
  { 
    path: "/ebook-price",
    element: <EBookCardPageWithPrice />,
  },
  { 
    path: "/ebook-price/add",
    element: <AddEBookWithPricePage />,
  },
  {
    path: "/ebook-price/edit/:id",
    element: <EditEBookWithPricePage />,
  }
]

export default displayWithPriceRoutes