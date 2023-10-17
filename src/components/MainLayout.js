import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { Layout, Menu, Button, theme } from 'antd';
import { AiOutlineDashboard, AiOutlineUser, AiOutlineBgColors, AiOutlinePicRight, AiOutlinePicLeft } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'
import { BsCartPlus, BsCart, BsFileEarmark, BsFileEarmarkPlus, BsBoxes } from 'react-icons/bs'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { FaClipboardList } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const avatar = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>HM</span>
            <span className='lg-logo'>HMart</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === "signout") {

            } else {
              navigate(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <MdOutlineLibraryBooks className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <BsCartPlus className='fs-4' />,
                  label: 'Add Product',
                },
                {
                  key: 'list-product',
                  icon: <BsCart className='fs-4' />,
                  label: 'List Product',
                },
                {
                  key: 'brand',
                  icon: <BsFileEarmarkPlus className='fs-4' />,
                  label: 'Add Brand',
                },
                {
                  key: 'list-brand',
                  icon: <BsFileEarmark className='fs-4' />,
                  label: 'List Brand',
                },
                {
                  key: 'category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Add Category',
                },
                {
                  key: 'list-category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'List Category',
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Add Color',
                },
                {
                  key: 'list-color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'List Color',
                },
              ]
            },
            {
              key: 'orders',
              icon: <BsBoxes className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'enquiries',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className='d-flex justify-content-between ps-2 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            className='fs-4'
            type="text"
            icon={collapsed ? <AiOutlinePicRight /> : <AiOutlinePicLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-4 align-items-center">
            <div className='position-relative'>
              <IoIosNotifications className='fs-4'/>
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <div>
                <img src={avatar} alt="avatar" width="32" height="32" />
              </div>
              <div>
                <h5 className='mb-0'>Gia Minh</h5>
                <p className='mb-0'>vogiaminh0802@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;