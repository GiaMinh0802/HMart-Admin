import React from 'react'
import CustomInput from '../components/CustomInput'

const AddProduct = () => {
    return (
        <div>
            <h3 className="mb-4">Add Product</h3>
            <div className="">
                <form action="">
                    <CustomInput type="text" label="Enter Product Title" />
                    <CustomInput type="text" label="Enter Description" />
                </form>
            </div>
        </div>
    )
}

export default AddProduct