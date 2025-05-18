/*
  Generated on 08/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import ModifiedFormAddEBookWithPrice from '../components/ModifiedFormAddEBookWithPrice'

const AddEBookWithPricePage = props => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState({
    addEBookWithPrice: false,
  });
  const { setTitle } = useContext(HeaderContext);
  
  useEffect(() => {
    setTitle("Add EBook With Price")
  }, []);

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <Layouts.ViewContainerButtonLayout>
          <Button 
            variant="secondary" 
            onClick={() => navigate('/ebook-price')}
          >
            Back to eBooks
          </Button>
        </Layouts.ViewContainerButtonLayout>
      }
    >
      <Layouts.FormContainerLayout
        singularName={"EBook"}
      >
        <ModifiedFormAddEBookWithPrice
          {...props}
        />
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  )
}

export default AddEBookWithPricePage