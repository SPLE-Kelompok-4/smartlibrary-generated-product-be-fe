/*
  Generated on 08/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React, { useEffect, useState, useContext } from 'react';
import { Spinner } from "@/commons/components";
import * as Layouts from '@/commons/layouts';
import { useParams } from "react-router";
import { HeaderContext } from "@/commons/components";
import ModifiedFormEditEBookWithImage from '../components/ModifiedFormEditEBookWithImage';
import getEBookById from '../services/getEBookById';
import { notifyError } from "@/commons/utils/toaster";

const EditEBookWithImagePage = props => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [eBookData, setEBookData] = useState(null);
  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle("Edit EBook with Image");
    
    const fetchEBook = async () => {
      try {
        setIsLoading(true);
        const { data } = await getEBookById(id);
        setEBookData(data.data);
      } catch (error) {
        console.error("Failed to fetch eBook:", error);
        notifyError("Failed to load eBook data");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchEBook();
    }
  }, [id]);

  return (
    <Layouts.ViewContainerLayout>
      <Layouts.FormContainerLayout
        singularName={"EBook"}
      >
        <ModifiedFormEditEBookWithImage
          eBookData={eBookData}
          isLoading={isLoading}
          {...props}
        />
      </Layouts.FormContainerLayout>
    </Layouts.ViewContainerLayout>
  );
};

export default EditEBookWithImagePage;