import * as React from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from "react-router-dom";
import { AppHeader } from "./components/common/header"
import { AppFooter } from "./components/common/footer"
import  Search  from "./components/search"
import  Details  from "./components/details"
import { Layout } from 'antd';

const { Sider, Content, } = Layout;

class AppComponent extends React.PureComponent<RouteComponentProps, {}> {

    render() {
        return (
            <Layout>
                <AppHeader/>
                    <Content>
                        <Switch>
                            <Route path="/" exact={true} component={Search} />
                            <Route path="/details/:id"  component={Details} />
                        </Switch>
                    </Content>
                <AppFooter/>
            </Layout>
        );
    }
}

export default withRouter(AppComponent)