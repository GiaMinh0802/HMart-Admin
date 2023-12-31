import { React, useEffect } from "react"
import CustomInput from '../components/CustomInput'
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import * as yup from "yup"
import { useFormik } from "formik"
import { createCategory, getACategory, resetState, updateACategory } from "../features/category/categorySlice"

let schema = yup.object().shape({
    title: yup.string().required("Category Name is Required"),
})

const AddCategory = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const getCategoryId = location.pathname.split("/")[3]
    const navigate = useNavigate()
    const newCategory = useSelector((state) => state.category)

    const { isSuccess, isError, isLoading, createdCategory, categoryName, updatedCategory } = newCategory

    useEffect(() => {
        if (getCategoryId !== undefined) {
            dispatch(getACategory(getCategoryId))
        } else {
            dispatch(resetState())
        }
    }, [getCategoryId])

    useEffect(() => {
        if (isSuccess && createdCategory) {
            toast.success("Category Added Successfullly!")
        }
        if (isSuccess && updatedCategory) {
            toast.success("Category Updated Successfullly!")
            navigate("/admin/list-category");
        }
        if (isError) {
            toast.error("Something Went Wrong!")
        }
    }, [isSuccess, isError, isLoading])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: categoryName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getCategoryId !== undefined) {
                const data = { id: getCategoryId, categoryData: values }
                dispatch(updateACategory(data))
                dispatch(resetState())
            } else {
                dispatch(createCategory(values))
                formik.resetForm()
                setTimeout(() => {
                    dispatch(resetState())
                }, 300);
            }
        },
    })

    return (
        <div>
            <h3 className="mb-4 title">
                {getCategoryId !== undefined ? "Edit" : "Add"} Category
            </h3>
            <div className="">
                <form onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Category"
                        onCh={formik.handleChange("title")}
                        onBl={formik.handleBlur("title")}
                        val={formik.values.title}
                        id="brand"
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>
                        {getCategoryId !== undefined ? "Edit" : "Add"} Category
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory