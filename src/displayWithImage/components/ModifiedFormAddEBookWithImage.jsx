/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
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
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddEBookWithImage = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  const navigate = useNavigate()
  
  return (
	<div>
	  <Layouts.FormComponentLayout
		  title="Add EBook With Image" 
		  onSubmit={handleSubmit()}
	
	    vas={[
		  ]}
	
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
		      />
	,
			  
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
		      />
	,
			  
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
		      />
	,
			  
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
		      />
	,
			  
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
		      />
	,
			  
			  <Controller
			    key="image"
		        name="image"
		        control={control}
				rules={{ required: "Harap masukkan image" }} 
		        render={({ field, fieldState }) => (
				  <InputField
		            label="image"
		            placeholder="Masukkan image"
		            fieldState={fieldState}
					{...field}
					isRequired={true}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
	    ]}
	  />
	    
	</div>
  )
}

export default ModifiedFormAddEBookWithImage
