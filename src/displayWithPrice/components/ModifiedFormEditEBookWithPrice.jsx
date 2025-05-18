/*
  Generated on 08/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  Button,
  InputField,
  Spinner,
} from "@/commons/components";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveEBook from '../services/saveEBook';
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormEditEBookWithPrice = ({ 
  eBookData,
  isLoading
}) => {
  const { 
    control, 
    handleSubmit,
    reset
  } = useForm();
  
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with eBook data when it's loaded
  useEffect(() => {
    if (eBookData) {
      reset(eBookData);
    }
  }, [eBookData, reset]);
  
  const updateEBook = (data) => {
    setIsSubmitting(true);
    const cleanData = cleanFormData(data);
    
    saveEBook({
      ...cleanData,
      id: eBookData.id // Ensure we're updating the correct eBook
    })
      .then(() => {
        navigate(`/ebook-price`);
        notifySuccess(`EBook updated successfully!`);
      })
      .catch((error) => {
        console.error(error);
        notifyError("Failed to update eBook");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Spinner size="lg" />
      </div>
    );
  }
  
  return (
    <div>
      <Layouts.FormComponentLayout
        title="Edit EBook With Price" 
        onSubmit={handleSubmit(updateEBook)}
        vas={[]}
        formFields={[
          <Controller
            key="eBookTitle"
            name="eBookTitle"
            control={control}
            rules={{ required: "Please enter eBook title" }} 
            render={({ field, fieldState }) => (
              <InputField
                label="EBook Title"
                placeholder="Enter eBook title"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          
          <Controller
            key="eBookAuthor"
            name="eBookAuthor"
            control={control}
            rules={{ required: "Please enter eBook author" }} 
            render={({ field, fieldState }) => (
              <InputField
                label="EBook Author"
                placeholder="Enter eBook author"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          
          <Controller
            key="iSBN"
            name="iSBN"
            control={control}
            rules={{ required: "Please enter eBook ISBN" }} 
            render={({ field, fieldState }) => (
              <InputField
                label="EBook ISBN"
                placeholder="Enter eBook ISBN"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
          
          <Controller
            key="description"
            name="description"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="EBook Description"
                placeholder="Enter eBook description"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
          
          <Controller
            key="releaseDate"
            name="releaseDate"
            control={control}
            render={({ field, fieldState }) => (
              <InputField
                label="EBook Release Date"
                placeholder="Enter eBook release date"
                type="date"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
          
          <Controller
            key="price"
            name="price"
            control={control}
            rules={{ required: "Please enter eBook price" }} 
            render={({ field, fieldState }) => (
              <InputField
                label="EBook Price"
                placeholder="Enter eBook price"
                type="number"
                fieldState={fieldState}
                {...field}
                isRequired={true}
              />
            )}
          />,
        ]}
        itemsEvents={[
          <Button 
            key="Update" 
            type="submit" 
            variant="primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner size="sm" /> : "Update eBook"}
          </Button>,
          <Button 
            key="Cancel" 
            variant="secondary" 
            onClick={() => navigate('/ebook-price')}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        ]}
      />
    </div>
  );
};

export default ModifiedFormEditEBookWithPrice;