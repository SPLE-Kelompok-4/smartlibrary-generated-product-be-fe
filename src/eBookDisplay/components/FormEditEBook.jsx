/*
    Generated on 08/05/2025 by UI Generator PRICES-IDE
    https://amanah.cs.ui.ac.id/research/ifml-regen
    version 3.9.0
*/
import React, { useEffect } from "react";
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
import { notifyError, notifySuccess } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormEditEBook = ({ 
  eBookData,
  isLoading
}) => {
  const { 
    control, 
    handleSubmit,
    reset
  } = useForm();
  
  const navigate = useNavigate();
  
  // Initialize form with eBook data when it's loaded
  useEffect(() => {
    if (eBookData) {
      reset(eBookData);
    }
  }, [eBookData, reset]);
  
  const updateEBook = (data) => {
    const cleanData = cleanFormData(data);
    saveEBook({
      ...cleanData,
      id: eBookData.id // Ensure we're updating the correct eBook
    })
    .then(({ data: { data } }) => {
      navigate(`/ebook`);
      notifySuccess(`EBook updated successfully!`);
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
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
        title="Edit EBook" 
        onSubmit={handleSubmit(updateEBook)}
        vas={[]}
        formFields={[
          <Controller
            key="eBookTitle"
            name="eBookTitle"
            control={control}
            rules={{ required: "Harap masukkan ebook title" }} 
            render={({ field, fieldState }) => (
              <InputField
                label="EBook Title"
                placeholder="Masukkan ebook title"
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
            rules={{ required: "Harap masukkan ebook author" }} 
            render={({ field, fieldState }) => (
              <InputField
                label="EBook Author"
                placeholder="Masukkan ebook author"
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
            rules={{ required: "Harap masukkan ebook isbn" }} 
            render={({ field, fieldState }) => (
              <InputField
                label="EBook ISBN"
                placeholder="Masukkan ebook isbn"
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
                label="EBook description"
                placeholder="Masukkan ebook description"
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
                placeholder="Masukkan ebook release date"
                type="date"
                fieldState={fieldState}
                {...field}
                isRequired={false}
              />
            )}
          />,
        ]}
        itemsEvents={[
          <Button key="Update" type="submit" variant="primary">Update EBook</Button>,
          <Button 
            key="Cancel" 
            variant="secondary" 
            onClick={() => navigate('/ebook')}
          >
            Cancel
          </Button>
        ]}
      />
    </div>
  );
};

export default FormEditEBook;