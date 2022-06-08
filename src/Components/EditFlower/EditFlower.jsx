import { TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";

const EditFlower = () => {
  const { productDetails, getProductsDetails, editProduct } =
    useContext(productContext);

  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getProductsDetails(id);
  }, []);

  const [inpValues, setInpValues] = useState(productDetails);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSave = (e) => {
    e.preventDefault();
    editProduct(id, inpValues);
    navigate("/list");
  };

  return (
    <div className="containerAdd">
      <div className="siteBarInp">
        <h2>Product addition</h2>
        <form className="siteBar-inputs" onSubmit={(e) => handleSave(e)}>
          <TextField
            id="basic"
            label="Title"
            variant="standard"
            value={inpValues.title}
            name="title"
            onChange={(e) => handleChange(e)}
          />
          <TextField
            id="desc"
            label="Description"
            defaultValue="Default Value"
            value={inpValues.description}
            onChange={(e) => handleChange(e)}
            name="description"
            variant="standard"
          />
          <TextField
            id="imgINPC"
            label="Image URL"
            name="img"
            value={inpValues.img}
            onChange={(e) => handleChange(e)}
            variant="standard"
          />
          <TextField
            id="price"
            label="Price"
            type="number"
            value={inpValues.price}
            onChange={(e) => handleChange(e)}
            name="price"
            variant="standard"
          />
          <TextField 
            id="basic" 
            label="Category" 
            variant="standard" 
            value={inpValues.category}
            name="category"
            onChange={(e) => handleChange(e)}/>
          <div className="save-btn">
            <button onClick={handleSave}>Save</button>
          </div>
        </form>
      </div>
      <div className="mainBlock"></div>
    </div>
  );
};

export default EditFlower;
