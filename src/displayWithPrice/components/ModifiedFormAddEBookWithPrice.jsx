/*
  Generated on 08/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  Button,
  Form,
  InputField,
  Spinner,
} from "@/commons/components";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveEBook from '../services/saveEBook';
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddEBookWithPrice = () => {
  const { 
    control, 
    handleSubmit,
  } = useForm();
  
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const addEBook = (data) => {
    setIsSubmitting(true);
    const cleanData = cleanFormData(data);
    
    saveEBook(cleanData)
      .then(() => {
        navigate(`/ebook-price`);
        notifySuccess(`EBook added successfully!`);
      })
      .catch((error) => {
        console.error(error);
        notifyError("Failed to add eBook");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  return (
    <div>
      <Layouts.FormComponentLayout
        title="Add EBook With Price" 
        onSubmit={handleSubmit(addEBook)}
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
            key="Submit" 
            type="submit" 
            variant="primary" 
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner size="sm" /> : "Add eBook"}
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

export default ModifiedFormAddEBookWithPrice;