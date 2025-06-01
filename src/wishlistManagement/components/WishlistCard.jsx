/*
	Generated on 01/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useState } from "react";
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams";

import { useAuth } from "@/commons/auth";
import { Button } from "@/commons/components";

import * as Layouts from "@/commons/layouts";

const WishlistCard = ({ wishlistItem, onEdit, onDelete }) => {
  const { checkPermission } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(wishlistItem.itemName);

  const handleSave = () => {
    onEdit(wishlistItem.wishlistItemId, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(wishlistItem.itemName);
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(wishlistItem.wishlistItemId);
  };

  if (isEditing) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "12px",
          backgroundColor: "white",
        }}
      >
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
        <div style={{ display: "flex", gap: "8px" }}>
          <Button onClick={handleSave} variant="primary" size="sm">
            Save
          </Button>
          <Button onClick={handleCancel} variant="secondary" size="sm">
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "12px",
        backgroundColor: "white",
      }}
    >
      <h4>{wishlistItem.itemName}</h4>
      <div
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "10px",
        }}
      >
        <Button
          onClick={() => setIsEditing(true)}
          variant="secondary"
          size="sm"
        >
          Edit
        </Button>
        <Button onClick={handleDelete} variant="danger" size="sm">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default WishlistCard;
