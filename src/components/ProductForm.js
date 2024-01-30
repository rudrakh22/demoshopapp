import {useState} from 'react';
import './ProductForm.css';

function ProductForm(props){

    const [newTitle,setTitle]=useState('');
    const [newDate,setDate]=useState('');

    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);
    }

    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const productData={
            title:newTitle,
            date:newDate,
        };
        // console.log(productData);
        props.onSaveProduct(productData);
        setDate('');
        setTitle('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-product_controls'>
            <div className='new-product_control'>
                <label>Title</label>
                <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-product_control'>
                <label>Date</label>
                <input type="date" value={newDate} min="2023-01-01" max="2023-12-12" onChange={dateChangeHandler}></input>
            </div>
            <div className='new-product_control'>
                <button type="submit" className='new-product_button'>Add Product</button>
            </div>
            </div>

        </form>
    )
}

export default ProductForm;