import * as React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { search, setPage } from './../../state/store/search/actions'

import { Row, Col, Layout, Button, Pagination } from 'antd';
const { Content } = Layout;

import { JobItemComponent } from './JobItem';
import SearchForm from "./search-form"
interface SearchComponentProps extends RouteComponentProps<{}> {
    data: JobData[];
    page: number;
    onSubmit(): any;
    setPage(page: number): any;
}

class SearchComponent extends React.PureComponent<SearchComponentProps, {}> {
    componentDidMount() {
        this.props.onSubmit()
    }

    submit = () => {
        this.props.onSubmit()
    }

    render() {
        const { data } = this.props;

        const JobContent = data.length > 0 ? data.map((item, index) =>
            <JobItemComponent jobDetails={item} key={index}/>
        ): <div>Empty</div>

        return (
            <React.Fragment>
                <SearchForm onSubmit={this.submit}/>
                <Content>
                    <div style={{ background: '#fff', padding: '20px', minHeight: 'calc(100vh - 200px)' }}>
                        <Row>
                            {data.length > 0 &&
                               <Col span={24}>
                                    <Pagination current={this.props.page} onChange={this.props.setPage} total={50} />
                                </Col>
                            }
                            
                            <Col span={24}>
                                <h2>Search Results:</h2>
                            </Col>
                            <Col span={24}>
                                {JobContent}
                            </Col>
                            {data.length > 0 &&
                               <Col span={24}>
                                    <Pagination current={this.props.page} onChange={this.props.setPage} total={50} />
                                </Col>
                            }
                        </Row>
                    </div>
                </Content>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        page: state.search.page,
        data: state.search.data
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSubmit(){
            dispatch(search());
        },
        setPage(page: number){
            dispatch(setPage(page));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchComponent))
