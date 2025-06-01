/*
Generated on 01/06/2025 by UI Generator PRICES-IDE
https://amanah.cs.ui.ac.id/research/ifml-regen
version 3.8.0
*/
import React, { useEffect, useState, useContext } from "react";
import { Button, Spinner } from "@/commons/components";
import * as Layouts from "@/commons/layouts";
import { Link } from "react-router";
import { HeaderContext } from "@/commons/components";
import { useAuth } from "@/commons/auth";

import getWishlistItem from "../services/getWishlistItem";
import editWishlistItem from "../services/editWishlistItem";
import deleteWishlistItem from "../services/deleteWishlistItem";
import WishlistCard from "../components/WishlistCard";

const CardWishlistPage = (props) => {
  const { checkPermission } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { setTitle } = useContext(HeaderContext);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data: response } = await getWishlistItem();
        setWishlistItems(response.data || []);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setTitle("Card Wishlist Page");
  }, []);

  const handleEdit = async (wishlistItemId, newItemName) => {
    try {
      setIsLoading(true);
      await editWishlistItem(wishlistItemId, { itemName: newItemName });

      setWishlistItems((prev) =>
        prev.map((item) =>
          item.wishlistItemId === wishlistItemId
            ? { ...item, itemName: newItemName }
            : item
        )
      );
    } catch (error) {
      console.error("Error updating item:", error);
      alert("Gagal mengupdate item");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (wishlistItemId) => {
    try {
      setIsLoading(true);
      await deleteWishlistItem(wishlistItemId);

      setWishlistItems((prev) =>
        prev.filter((item) => item.wishlistItemId !== wishlistItemId)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Gagal menghapus item");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layouts.ViewContainerLayout
      buttons={
        <Layouts.ViewContainerButtonLayout>
          <Link to={`/wishlist/add`}>
            <Button className="p-2" variant="primary">
              Add Wishlist Item
            </Button>
          </Link>
        </Layouts.ViewContainerButtonLayout>
      }
    >
      <div style={{ padding: "20px" }}>
        <h2>List Wishlist Item</h2>

        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            {wishlistItems.map((item, index) => (
              <WishlistCard
                key={item.wishlistItemId || index}
                wishlistItem={item}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </Layouts.ViewContainerLayout>
  );
};

export default CardWishlistPage;
