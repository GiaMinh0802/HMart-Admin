import React, { useEffect } from "react"
import { Table } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { getOrder } from "../features/order/orderSlice"

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Product Name",
        dataIndex: "name",
    },
    {
        title: "Brand",
        dataIndex: "brand",
    },
    {
        title: "Count",
        dataIndex: "count",
    },
    {
        title: "Color",
        dataIndex: "color",
    },
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Date",
        dataIndex: "date",
    }
]

const ViewOrder = () => {
    const location = useLocation()
    const userId = location.pathname.split("/")[3]

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrder(userId))
    }, [userId])

    const orderState = useSelector((state) => state.order.products)

    const data1 = []
    for (let i = 0; i < orderState.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].product.title,
            brand: orderState[i].product.brand,
            count: orderState[i].count,
            price: orderState[i].product.price,
            color: orderState[i].product.color,
            date: orderState[i].product.createdAt
        })
    }

    return (
        <div>
            <h3 className="mb-4 title">View Order</h3>
            <div>
                <Table columns={columns} dataSource={data1}/>
            </div>
        </div>
    );
}

export default ViewOrder