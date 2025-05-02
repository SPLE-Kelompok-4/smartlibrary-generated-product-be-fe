import React from "react";
import BatchUpdateForm from "@/commons/components/Form/BatchUpdateForm";

const BatchUpdateFormComponentLayout = ({
  title,
  onSubmit,
  vas,
  formFields,
  itemsEvents,
}) => {
  return (
    <BatchUpdateForm title={title} onSubmit={onSubmit}>
      <div className="max-w-[100%]">
        {vas}
        {formFields}
        <div className="card-actions col-end-3 justify-start">{itemsEvents}</div>
      </div>
    </BatchUpdateForm>
  );
};

export default BatchUpdateFormComponentLayout;
