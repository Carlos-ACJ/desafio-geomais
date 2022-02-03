import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Footer } = Layout;

class MyFooter extends React.Component {

    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>desafio cadastro</Footer>
        );
    }
}

export default MyFooter;