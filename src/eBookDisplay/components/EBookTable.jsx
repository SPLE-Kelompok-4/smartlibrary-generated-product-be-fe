/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const EBookTable = ({ listEBook,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listEBook]}
  	  itemsAttrs={[
          {
            id: "eBookTitle",
            condition: "",
            label: "EBook Title",
  		  featureName: "eBookTitle",
            editable: false
          }
  ,
          {
            id: "eBookAuthor",
            condition: "",
            label: "EBook Author",
  		  featureName: "eBookAuthor",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default EBookTable;
