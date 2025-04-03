"use client";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, MenuProps, theme } from "antd";
import Image from "next/image";
import itemsMenu from "@/lib/data/sidebarMenu";
import itemsFooter from "@/lib/data/sidebarFoter";
import { HiOutlineBell } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa";

const { Header, Sider, Content } = Layout;

function AntdLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <a href="/profile">Profile</a>,
    },
    {
      key: "2",
      label: <a href="/settings">Settings</a>,
    },
    {
      key: "3",
      label: <a href="/logout">Logout</a>,
    },
  ];
  return (
    <Provider store={store}>
      <Layout className="antd__layout">
        <Sider
          theme="light"
          className="sidebar"
          width={collapsed ? 65 : 240}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="sidebar__logo">
            {collapsed ? (
              <Image
                src="https://erp1226.dynamicsoft.uz/static/media/single_logo.6a9eeb4cbaa40628ceaa2a450c0de3f0.svg"
                alt="logo"
                width={100}
                height={50}
              />
            ) : (
              <Image
                src="https://erp1226.dynamicsoft.uz/static/media/logo.2be6ec24589168d9570ab9048c2f0f20.svg"
                alt="logo-mobile"
                width={210}
                height={60}
              />
            )}
          </div>

          <div>
            <span className="border-sidebar"></span>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              className="sidebar__menu"
              items={itemsMenu.map((item) => ({
                key: item.key,
                icon: item.icon,
                label: <span>{item.label}</span>,
              }))}
            />
          </div>

          {/* Tugmalarni pastga tushirish */}
          <div className="sidebar__footer">
            <span className="border-sidebar"></span>

            <Menu
              mode="inline"
              className="footer-menu"
              items={itemsFooter.map((item) => ({
                key: item.key,
                icon: item.icon,
                label: <span>{item.label}</span>,
              }))}
            />
          </div>
        </Sider>

        <Layout>
          <Header className="header">
            <div className="header__colapse">
              <Button
                type="text"
                className="colapse-btn"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
            </div>
            <div className="header__user">
              <div className="user-notification">
                <HiOutlineBell size={20} />
                <span className="count-notif">1</span>
              </div>
              <div className="userbox">
                <Image
                  className="user-icon"
                  src={"/images/png/header-user.png"}
                  alt="user-icon"
                  width={40}
                  height={40}
                />
                <div className="user-info">
                  <p className="info-name">Qayumov Murtazo</p>
                  <p className="info-degree">PM</p>
                </div>
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <span className="user-option">
                    <FaAngleDown />
                  </span>
                </Dropdown>
              </div>
            </div>{" "}
          </Header>
          <Content
            style={{
              marginTop: "30px",
              marginLeft: "30px",
              marginRight: "30px",
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Provider>
  );
}

export default AntdLayout;
