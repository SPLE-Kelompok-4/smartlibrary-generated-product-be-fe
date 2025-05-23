/*
  Generated on 08/05/2025 by UI Generator PRICES-IDE
  https://amanah.cs.ui.ac.id/research/ifml-regen
  version 3.9.0
*/
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { Button, Spinner, Modal } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import getListEBook from '../services/getListEBook'
import deleteEBook from '../services/deleteEBook'
import { notifySuccess, notifyError } from "@/commons/utils/toaster";

const EBookCardPageWithPrice = props => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [listEBook, setListEBook] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingEBook, setDeletingEBook] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const { setTitle } = useContext(HeaderContext);
  
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data: listEBook } = await getListEBook();
      setListEBook(listEBook.data);
    } catch (error) {
      console.error("Failed to fetch eBooks:", error);
      notifyError("Failed to load eBooks");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  useEffect(() => {
    setTitle("EBooks with Prices");
  }, []);
  
  const handleEditClick = (id) => {
    navigate(`/ebook-price/edit/${id}`);
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
        fetchData();
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
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };
  
  const renderEBookCards = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center p-8">
          <Spinner size="lg" />
        </div>
      );
    }
    
    if (!listEBook || listEBook.length === 0) {
      return (
        <div className="text-center p-8 text-gray-500">
          No eBooks found. Add some eBooks to get started.
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listEBook.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold">{book.eBookTitle}</h3>
              <p className="text-gray-600">By {book.eBookAuthor}</p>
              <p className="text-sm text-gray-500 mt-2">ISBN: {book.iSBN}</p>
              {book.description && (
                <p className="text-sm mt-2 line-clamp-2">{book.description}</p>
              )}
              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-green-600">
                  {book.price ? formatPrice(book.price) : 'Free'}
                </span>
                {book.releaseDate && (
                  <span className="text-xs text-gray-500">
                    Released: {new Date(book.releaseDate).toLocaleDateString()}
                  </span>
                )}
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => handleEditClick(book.id)}
                >
                  Edit
                </Button>
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => handleDeleteClick(book)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <Layouts.ViewContainerLayout
      buttons={
        <Layouts.ViewContainerButtonLayout>
          <Link to={`/ebook-price/add`}>
            <Button className="p-2" variant="primary">
              Add EBook
            </Button>
          </Link>
        </Layouts.ViewContainerButtonLayout>
      }
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-6">EBook Collection with Prices</h2>
        {renderEBookCards()}
      </div>
      
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
    </Layouts.ViewContainerLayout>
  );
};

export default EBookCardPageWithPrice;