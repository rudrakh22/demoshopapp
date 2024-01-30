
import './NewProduct.css';
import ProductForm from './ProductForm';
function NewProduct(props){

    function saveProduct(product){
        console.log('I am inside new product');
        console.log(product);
        // calling parent function
        props.printProduct(product);
    }
    return(
        <div className="new-product">
            <ProductForm onSaveProduct={saveProduct}></ProductForm>
        </div>
    )
}


export default NewProduct;