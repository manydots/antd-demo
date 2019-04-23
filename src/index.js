import React from 'react';
import { Button, Layout, Menu, Breadcrumb, Icon,Spin} from 'antd';
const {Header, Footer, Sider, Content} = Layout;
const { SubMenu } = Menu;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityId: 797445,
            name: '太阳'

        };

        
    }
    componentWillMount() {

        
    }
    componentDidMount() {
        //params data
       
    }
    shouldComponentUpdate() {
        return true;
    }
    onChange(){

    }
    render() {

        return (
        	<div>
                
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                      <div className="logo" />
                      <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                      </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                      <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                      </Breadcrumb>
                      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                        <Spin />
                         <Button type="primary">Primary</Button>
                      </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                      The Demo ©2019 Created by Mo.chen
                    </Footer>
                </Layout>   

            </div>
        )
    }

}

export default App;