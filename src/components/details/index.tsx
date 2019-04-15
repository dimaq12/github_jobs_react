import * as React from 'react';
import { Row, Col, Layout, Button, Pagination } from 'antd';
const { Content } = Layout;
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { detailsGet } from './../../state/store/details/actions'
import { DetailsJobComponent } from "./Details"


interface DetailsComponentProps extends RouteComponentProps<{id: string}> {
    getJobDetails(id: string): any;
    jobId: string;
    data: JobData | null;
}

class DetailsComponent extends React.PureComponent<DetailsComponentProps, {}> {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getJobDetails(id)
    }

    render() {
        const  jobDetails  = this.props.data;

        return (
            <React.Fragment>
                <Content>
                    <div style={{ background: '#fff', padding: '20px', minHeight: 'calc(100vh - 200px)', overflow: 'hidden' }}>
                        {jobDetails &&
                            <DetailsJobComponent jobDetails={jobDetails}/>
                        }
                    </div>
                </Content>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        jobId: state.details.jobId,
        data: state.details.data
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getJobDetails(id: string){
            dispatch(detailsGet(id));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsComponent))
