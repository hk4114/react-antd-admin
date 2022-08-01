import React from 'react'
import { Outlet } from 'react-router-dom'
import { Breadcrumb, Layout, Menu } from 'antd'
import './index.less'

const { Header, Content, Footer } = Layout

const LayoutIndex = () => {
  return (
    <section className="layout">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1
              return {
                key,
                label: `nav ${key}`
              }
            })}
          />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </section>
  )
}

export default LayoutIndex
