/*
  Generated on 08/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React from 'react';

import EBookCardPageWithImage from './containers/EBookCardPageWithImage'
import AddEBookWithImagePage from './containers/AddEBookWithImagePage'
import EditEBookWithImagePage from './containers/EditEBookWithImagePage'

const displayWithImageRoutes = [
  { 
    path: "/ebook-image",
    element: <EBookCardPageWithImage />,
  },
  { 
    path: "/ebook-image/add",
    element: <AddEBookWithImagePage />,
  },
  {
    path: "/ebook-image/edit/:id",
    element: <EditEBookWithImagePage />,
  }
]

export default displayWithImageRoutes