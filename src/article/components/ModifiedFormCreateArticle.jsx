/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  RadioInputField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveArticle from '../services/saveArticle'
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormCreateArticle = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()

  const createArticle = (data) => {
    const cleanData = cleanFormData(data)
    saveArticle({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
  	notifySuccess(`Save Article berhasil!`);
    })
    .catch((error) => {
      console.error(error);
          notifyError(error);
    });
  }
  
  return (
    <div>
      <Layouts.FormComponentLayout
        title="Add New Article" 
        onSubmit={handleSubmit(createArticle)}
    
        vas={[
        ]}
    
        formFields={[
          
          <Controller
            key="author"
              name="author"
              control={control}
          rules={{ required: "Harap masukkan author" }} 
              render={({ field, fieldState }) => (
            <InputField
                  label="Author"
                  placeholder="Masukkan author"
                  fieldState={fieldState}
            {...field}
            isRequired={true}
                />
              )}
            />
    ,
          
          <Controller
            key="title"
              name="title"
              control={control}
          rules={{ required: "Harap masukkan title" }} 
              render={({ field, fieldState }) => (
            <InputField
                  label="title"
                  placeholder="Masukkan title"
                  fieldState={fieldState}
            {...field}
            isRequired={true}
                />
              )}
            />
    ,
          
          <Controller
            key="body"
              name="body"
              control={control}
          rules={{ required: "Harap masukkan body" }} 
              render={({ field, fieldState }) => (
            <InputField
                  label="body"
                  placeholder="Masukkan body"
                  fieldState={fieldState}
            {...field}
            isRequired={true}
                />
              )}
            />
    ,
          
    
        ]}
    
         itemsEvents={[
				<Button key="Create Article" type="submit" variant="primary">Create Article</Button>
	    ]}
      />
      
        
    </div>
    )
}

export default ModifiedFormCreateArticle
