import React from "react";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';

// 引入图片
import logo from "../../assets/img/Table/logo.png";

// 引入组件
import TableFrom from "./TableForm/index";
import TableRow from "./TableRow/index";

class Table extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data1: [{
                "allergens": "腰果", "size": "3.0*3.0","result":"++"
            },{
                "allergens": "牛奶", "size": "2.0*2.0","result":"+"
            },{
                "allergens": "小麦", "size": "3.0*3.0","result":"++"
            },{
                "allergens": "花生", "size": "2.0*2.0","result":"+"
            },],
            data2: [{
                "allergens": "屋尘螨", "size": "3.0*3.0","result":"++"
            },{
                "allergens": "粉尘螨", "size": "2.0*2.0","result":"+"
            },{
                "allergens": "屋尘螨", "size": "3.0*3.0","result":"++"
            },{
                "allergens": "粉尘螨", "size": "2.0*2.0","result":"+"
            },],
            // title1: {
            //     "name": "吸入类"
            // },
            // title2: {
            //     "name": "食物类"
            // },
        }
    }

    render() {
        const { Header, Content, Footer } = Layout;
        const title1="吸入类";
        const title2="食物类";
        return ( <Layout className="layout">
                <Header>
                    <div className="header-left">
                        模板1
                    </div>
                    <div className="header-right">
                        <ul>
                            <li>
                                <a href="JavaScript：；">重置</a>
                            </li>
                            <li>
                                |
                            </li>
                            <li>
                                <a href="JavaScript：；">保存</a>
                            </li>
                        </ul>
                    </div>
                </Header>
                <Content style={{ padding: '0 12px' }}>
                    <Breadcrumb style={{ margin: '10px 0' }}>

                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <div className="logo">
                            <img src={logo}/>
                        </div>
                        <TableFrom></TableFrom>
                        <TableRow data={this.state.data2} title={title1}></TableRow>
                        <TableRow data={this.state.data1} title={title2}></TableRow>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}></Footer>
            </Layout>
        );
    }
}

export default Table;