import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories, deleteACategory, resetState } from "../features/category/categorySlice";
import CustomModal from "../components/CustomModal";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
    },

    {
        title: "Action",
        dataIndex: "action",
    },
];

const CategoryList = () => {
    const [open, setOpen] = useState(false);
    const [CatId, setpCatId] = useState("");
    const showModal = (e) => {
        setOpen(true);
        setpCatId(e);
    }

    const hideModal = () => {
        setOpen(false);
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(resetState())
        dispatch(getCategories())
    }, [])

    const categorystate = useSelector((state) => state.category.categories);
    const data1 = [];
    for (let i = 0; i < categorystate.length; i++) {
        data1.push({
            key: i + 1,
            name: categorystate[i].title,
            action: (
                <>
                    <Link
                        to={`/admin/category/${categorystate[i]._id}`}
                        className=" fs-3 text-danger"
                    >
                        <BiEdit />
                    </Link>
                    <button
                        className="ms-3 fs-3 text-danger bg-transparent border-0"
                        onClick={() => showModal(categorystate[i]._id)}
                    >
                        <AiFillDelete />
                    </button>
                </>
            ),
        });
    }

    const deleteCategory = (e) => {
        dispatch(deleteACategory(e))
        setOpen(false);
        setTimeout(() => {
            dispatch(getCategories())
        }, 100);
    }

    return (
        <div>
            <h3 className='mb-4 title'>Categories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                hideModal={hideModal}
                open={open}
                performAction={() => {
                    deleteCategory(CatId);
                }}
                title="Are you sure you want to delete this Category?"
            />
        </div>
    )
}

export default CategoryList