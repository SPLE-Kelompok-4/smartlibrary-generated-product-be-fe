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

const ModifiedFormEditEBookWithImage = ({ 
  eBookData,
  isLoading
}) => {
  const { 
    control, 
    handleSubmit,
    reset,
    watch,
  } = useForm();
  
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState(eBookData?.image || null);
  
  // Initialize form with eBook data when it's loaded
  useEffect(() => {
    if (eBookData) {
      reset(eBookData);
      setImagePreview(eBookData.image);
    }
  }, [eBookData, reset]);
  
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
    }
  };
  
  const updateEBook = (data) => {
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
      
      // Ensure we're updating the correct eBook
      formData.append('id', eBookData.id);
      
      // Send formData instead of JSON
      saveEBook(formData)
        .then(() => {
          navigate(`/ebook-image`);
          notifySuccess(`EBook updated successfully!`);
        })
        .catch((error) => {
          console.error(error);
          notifyError("Failed to update eBook");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      // Regular JSON submission without new file, but include existing image
      saveEBook({
        ...cleanData,
        id: eBookData.id,
        image: eBookData.image // Keep existing image
      })
        .then(() => {
          navigate(`/ebook-image`);
          notifySuccess(`EBook updated successfully!`);
        })
        .catch((error) => {
          console.error(error);
          notifyError("Failed to update eBook");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
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
        title="Edit EBook With Image" 
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
            key="image"
            name="image"
            control={control}
            render={({ field: { onChange, value, ...field }, fieldState }) => (
              <div className="mb-4">
                <InputField
                  label="Cover Image"
                  type="file"
                  accept="image/*"
                  placeholder="Upload new cover image"
                  fieldState={fieldState}
                  onChange={(e) => {
                    onChange(e.target.files);
                    handleImageChange(e);
                  }}
                  {...field}
                  isRequired={false}
                />
                {imagePreview && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 mb-1">Current Image:</p>
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

export default ModifiedFormEditEBookWithImage;