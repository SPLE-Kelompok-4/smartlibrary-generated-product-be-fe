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
  InputField,
  Spinner,
} from "@/commons/components";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveEBook from '../services/saveEBook';
import { notifyError, notifySuccess} from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormAddEBookWithImage = () => {
  const { 
    control, 
    handleSubmit,
    watch,
  } = useForm();
  
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  
  // Watch for image changes to create preview
  const imageValue = watch("image");
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };
  
  const addEBook = (data) => {
    setIsSubmitting(true);
    const cleanData = cleanFormData(data);
    
    // Handle image file upload if needed
    if (data.image && data.image.length > 0) {
      // Create FormData for file upload
      const formData = new FormData();
      
      // Add all form fields to formData
      Object.keys(cleanData).forEach(key => {
        if (key === 'image') {
          formData.append('image', data.image[0]);
        } else {
          formData.append(key, cleanData[key]);
        }
      });
      
      // Send formData instead of JSON
      saveEBook(formData)
        .then(() => {
          navigate(`/ebook-image`);
          notifySuccess(`EBook added successfully!`);
        })
        .catch((error) => {
          console.error(error);
          notifyError("Failed to add eBook");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      // Regular JSON submission without file
      saveEBook(cleanData)
        .then(() => {
          navigate(`/ebook-image`);
          notifySuccess(`EBook added successfully!`);
        })
        .catch((error) => {
          console.error(error);
          notifyError("Failed to add eBook");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };
  
  return (
    <div>
      <Layouts.FormComponentLayout
        title="Add EBook With Image" 
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
            key="image"
            name="image"
            control={control}
            rules={{ required: "Please upload an image" }} 
            render={({ field: { onChange, value, ...field }, fieldState }) => (
              <div className="mb-4">
                <InputField
                  label="Cover Image"
                  type="file"
                  accept="image/*"
                  placeholder="Upload cover image"
                  fieldState={fieldState}
                  onChange={(e) => {
                    onChange(e.target.files);
                    handleImageChange(e);
                  }}
                  {...field}
                  isRequired={true}
                />
                {imagePreview && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 mb-1">Image Preview:</p>
                    <img 
                      src={imagePreview} 
                      alt="Cover preview" 
                      className="h-48 object-contain border rounded"
                    />
                  </div>
                )}
              </div>
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
            onClick={() => navigate('/ebook-image')}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        ]}
      />
    </div>
  );
};

export default ModifiedFormAddEBookWithImage;