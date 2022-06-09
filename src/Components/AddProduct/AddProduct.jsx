import { TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { productContext } from "../../Context/ProductContext";
import "./AddProduct.css"
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initObj = {
    title: "",
    description: "",
    img: "",
    price: 0,
    category: ""
  };


const AddProduct = () => {
    const { addProduct } = useContext(productContext);
    const [inpValues, setInpValues] = useState(initObj);

    const alertToastify = () => {
        toast.error("Заполните все поля!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      };

    const handleChange = (e) => {
        let obj = {
          ...inpValues,
          [e.target.name]: e.target.value,
        };
        setInpValues(obj);
        console.log(obj);
    };
    
    const clearInput = () => {
        setInpValues(initObj);
    };
    
    const handleSave = (e) => {
        if (
          inpValues.title.trim() === "" ||
          inpValues.description.trim() === "" ||
          inpValues.img.trim() === "" ||
          inpValues.price.toString().trim() === ""
        ) {
          alertToastify();
          return;
        }
        e.preventDefault();
        addProduct(inpValues);
        clearInput();
    };

    return (
        <div className='containerAdd' >
            <div className='siteBarInp'>
            <h2>Product addition</h2>
                <form className='siteBar-inputs' onSubmit={(e) => handleSave(e)}>
                    
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
                        variant="standard"/>
                    <TextField 
                        id="imgINPC" 
                        label="Image URL" 
                        name="img"
                        value={inpValues.img}
                        onChange={(e) => handleChange(e)}
                        variant="standard" />
                    <TextField
                        id="price"
                        label="Price"
                        type="number"
                        value={inpValues.price}
                        onChange={(e) => handleChange(e)}
                        name="price"
                        variant="standard"/>
                    <TextField 
                        id="basic" 
                        label="Category" 
                        variant="standard" 
                        value={inpValues.category}
                        name="category"
                        onChange={(e) => handleChange(e)}/>
                        <div className='save-btn'>
                        <button onClick={handleSave}>Save</button>
                        </div>
                </form>
            </div>
            <div className='mainBlock'>
                
            </div>
        </div>
    );
};

export default AddProduct;