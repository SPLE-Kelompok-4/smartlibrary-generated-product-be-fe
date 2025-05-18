/*
    Generated on 08/05/2025 by UI Generator PRICES-IDE
    https://amanah.cs.ui.ac.id/research/ifml-regen
    version 3.9.0
*/
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router";
import { useParams } from "@/commons/hooks/useParams"

import { useAuth } from '@/commons/auth';
import { Button, Modal, Spinner } from '@/commons/components';

import * as Layouts from "@/commons/layouts";
import deleteEBook from '../services/deleteEBook';
import { notifySuccess, notifyError } from '@/commons/utils/toaster';

const EBookTable = ({ 
  listEBook,
  refreshData
}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingEBook, setDeletingEBook] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleEditClick = (id) => {
    navigate(`/ebook/edit/${id}`);
  };
  
  const handleDeleteClick = (ebook) => {
    setDeletingEBook(ebook);
    setShowDeleteModal(true);
  };
  
  const confirmDelete = () => {
    if (!deletingEBook) return;
    
    setIsDeleting(true);
    deleteEBook(deletingEBook.id)
      .then(() => {
        notifySuccess("EBook deleted successfully");
        setShowDeleteModal(false);
        setDeletingEBook(null);
        if (refreshData) refreshData();
      })
      .catch((error) => {
        notifyError("Failed to delete eBook");
        console.error(error);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };
  
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setDeletingEBook(null);
  };
  
  const renderActions = (item) => (
    <div className="flex gap-2">
      <Button 
        variant="secondary" 
        size="sm" 
        onClick={() => handleEditClick(item.id)}
      >
        Edit
      </Button>
      <Button 
        variant="danger" 
        size="sm" 
        onClick={() => handleDeleteClick(item)}
      >
        Delete
      </Button>
    </div>
  );
  
  return (
  <>
    <Layouts.ListComponentTableLayout
      items={[listEBook]}
      itemsAttrs={[
        {
          id: "eBookTitle",
          condition: "",
          label: "EBook Title",
          featureName: "eBookTitle",
          editable: false
        },
        {
          id: "eBookAuthor",
          condition: "",
          label: "EBook Author",
          featureName: "eBookAuthor",
          editable: false
        },
        {
          id: "actions",
          condition: "",
          label: "Actions",
          render: renderActions
        }
      ]}
    />
    
    {/* Delete Confirmation Modal */}
    <Modal
      isOpen={showDeleteModal}
      onClose={closeDeleteModal}
      title="Confirm Delete"
    >
      <div className="p-4">
        <p>Are you sure you want to delete "{deletingEBook?.eBookTitle}"?</p>
        <p className="text-red-500 mt-2">This action cannot be undone.</p>
        
        <div className="flex justify-end gap-3 mt-6">
          <Button variant="secondary" onClick={closeDeleteModal} disabled={isDeleting}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete} disabled={isDeleting}>
            {isDeleting ? <Spinner size="sm" /> : "Delete"}
          </Button>
        </div>
      </div>
    </Modal>
  </>
  );
};

export default EBookTable;