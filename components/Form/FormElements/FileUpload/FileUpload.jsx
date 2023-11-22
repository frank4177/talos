import React, { useState } from "react";

const FileUpload = ({ label, setPreview, setErrorMessage }) => {

  const handleImageChange = (e) => {
    const selected = e.target?.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
        setErrorMessage("")
      };
      reader.readAsDataURL(selected);
      // setFile(selected);
    } else {
      // setError(true);
    }
  };

  return (
    <>
      {label}
      <div>
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={(e) => handleImageChange(e)}
        />
      </div>
    </>
  );
};

export default FileUpload;
