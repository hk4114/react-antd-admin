import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import { Outlet, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd' //  Breadcrumb,
import './index.less'

const { Header, Content, Sider } = Layout // Footer,

const LayoutIndex = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <section className="container">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to={'/404'}>nav 1</Link>
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'nav 2'
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'nav 3'
              }
            ]}
          />
        </Sider>
        <Layout>
          <Header>
            {collapsed ? (
              <MenuUnfoldOutlined
                onClick={() => setCollapsed(!collapsed)}
                className="f-white"
              />
            ) : (
              <MenuFoldOutlined
                onClick={() => setCollapsed(!collapsed)}
                className="f-white"
              />
            )}
            {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: "trigger",
							onClick: () => setCollapsed(!collapsed)
						})} */}
          </Header>
          <Content>
            <Outlet></Outlet>
          </Content>
          {/* <Footer>Footer</Footer> */}
        </Layout>
      </Layout>
    </section>
  )
}

export default LayoutIndex
