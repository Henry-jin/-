import React from 'react';
import { Menu } from 'antd';

// const { SubMenu } = Menu;

import { PieChartOutlined } from '@ant-design/icons';
class MenuList extends React.Component {
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <Menu
          // defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          // openKeys
          // selectedKeys
          inlineCollapsed={this.props.collapsed}
        >
          {
            this.props.menu.map((val: any) => {
              return <Menu.Item key={val.id} icon={<PieChartOutlined />}>{val.text}</Menu.Item>
            })
          }
        </Menu>
      </div>
    )
  }
}



export default MenuList