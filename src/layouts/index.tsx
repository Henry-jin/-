import './index.less'
import React from 'react';
import { Layout, Button } from 'antd';
import MenuList from '@/components/menu';
const { Header, Footer, Sider, Content } = Layout
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

class Page extends React.Component {
  state = {
    collapsed: false,
    menus: [
      { id: 1, text: '待办事项' },
      { id: 2, text: 'xxs' },
      { id: 3, text: 'sssfff' },
      { id: 4, text: 'dddff' },
    ]
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout>
        <Sider>
          <div className="header_box">
              UMI3
          </div>
          <div className="menu_box">
            <MenuList collapsed={this.state.collapsed} menu={this.state.menus} />
          </div>
        </Sider>
        <Layout>
          <Header>
            {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button> */}
          </Header>
          <Content>{this.props.children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
}
export default Page;
