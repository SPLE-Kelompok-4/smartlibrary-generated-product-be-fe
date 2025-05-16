/*
	Generated on 16/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal,Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const invalidTable = ({ listCommunityContent,
	}) => {
  const { checkPermission } = useAuth();
  
  
  
  
  
  
  return (
  <>
    <Layouts.ListComponentTableLayout
  	  items={[listCommunityContent]}
  	  itemsAttrs={[
          {
            id: "communityContentauthor",
            condition: "",
            label: "CommunityContent author",
  		  featureName: "author",
            editable: false
          }
  ]}
  	/>
  </>
  )
};

export default invalidTable;
