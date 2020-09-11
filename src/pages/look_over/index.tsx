import React from 'react';
import { Drawer, List } from 'antd';
class Page extends React.PureComponent {

  render() {
    if(!this.props.item){
      return null
    }
    return <Drawer
      visible={this.props.visible}
      onClose={this.props.onClose}
      title="查看"
      destroyOnClose={true}
      width={360}
    >
      <List header="代办">
        <List.Item>{this.props.item.commission}</List.Item>
      </List>
    </Drawer>
  }
}

export default Page;