import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "@/commons/components";

const ListContainerCardLayout = ({ title, isLoading, items, children }) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl prose flex flex-col">
      <h2 className="text-center sm:text-left">{title}</h2>
      <div className="not-prose">
        {isLoading ? (
          <div className="py-8 text-center">
            <Spinner />
          </div>
        ) : items?.every((collection) => collection?.length) ? (
          children
        ) : (
          <div className="py-8 text-center">
            Tidak ada data untuk ditampilkan
          </div>
        )}
      </div>
    </div>
  );
};

ListContainerCardLayout.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default ListContainerCardLayout;
