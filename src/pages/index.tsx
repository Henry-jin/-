import React from 'react';
import styles from './index.less';
import { Card, Divider, Table, Drawer, Input, List, Button, Form, Popconfirm, message } from 'antd';
import { connect } from 'dva';

class Page extends React.Component {
  columns = [
    {
      title: '事项',
      dataIndex: 'commission',
      key: 'commission'
    }, {
      title: '操作',
      key: 'action',
      render: (text: any, record: any) => {
        return <>
          <a onClick={this.handleEdit.bind(this, record)}>编辑</a>
          <Divider type='vertical' />
          <Popconfirm
            title='确认删除吗?'
            onConfirm={this.handleDel.bind(this, record)}
          >
            <a>删除</a>
          </Popconfirm>

        </>
      }
    }
  ];
  state = {
    data: [
      { commission: 'xxxx' }
    ],
    pagination: {
      pageSize: 10,
      total: 10,
      current: 1,
    },
    visible: false,
    item:null
  }
  id = 3;

  handleDel = (item: any) => {
    this.props.dispatch({
      type: 'commission/delete',
      payload: { id: item.id }
    })
  }
  handleEdit = (item: any) => {
    this.setState({
      visible: true,
      item
    })
  }
  handleTableChange = (pagination: any, filters: any) => {
    this.setState({
      pagination
    })
  }
  onClose = () => {
    this.setState({
      visible: false
    })
  }
  handleAdd = () => {
    this.setState({
      visible: true
    })
  }
  onFinish = (val: any) => {
    let type = 'commission/add'
    const params = { commission: val.commission, id: this.id++ }
    if(this.state.item){
      type = 'commission/edit';
      params.id = this.state.item.id 
    }
    this.props.dispatch({
      type: type,
      payload: params
    })
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div >
        <Card
          extra={
            <>
              <a href="#">刷新</a>
              <Divider type='vertical' />
              <a onClick={this.handleAdd}>新增</a>
            </>
          }>
          <Table
            rowKey={(v) => {
              const key = v.commission + Math.random()
              return key
            }}
            columns={this.columns}
            dataSource={this.props.commission}
            onChange={this.handleTableChange}
            pagination={this.state.pagination}
          ></Table>
          <Drawer
            visible={this.state.visible}
            onClose={this.onClose}
            title="配置"
            destroyOnClose={true}
            width={360}
          >
            <Form
              onFinish={this.onFinish}
            >

              <Form.Item
                label="代办"
                name="commission"
                rules={[{ required: true, message: 'Please input your commission!' }]}
                initialValue={this.state.item? this.state.item.commission:''}
              >
                <Input placeholder="请输入代办" />
              </Form.Item>
              <div className={styles.footer}>
                <Button onClick={this.onClose} style={{ marginRight: '10px' }}>取消</Button>
                <Button type="primary" htmlType="submit">确认</Button>
              </div>
            </Form>
          </Drawer>
        </Card>
      </div >
    )
  }
}
export default connect(({ commission, loading }) => ({
  commission,
  loading
})
)(Page);


// const Products = ({ dispatch, products }:any) => {
//   function handleDelete(id:any) {
//     dispatch({
//       type: 'products/delete',
//       payload: id,
//     });
//   }
//   return (
//     <div>
//       <h2>List of Products</h2>
//       {/* <ProductList onDelete={handleDelete} products={products} /> */}
//     </div>
//   );
// };

// // export default Products;
// export default connect(({ products }) => ({
//   products,
// }))(Products);