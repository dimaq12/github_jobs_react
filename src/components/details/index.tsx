import * as React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { detailsGet } from './../../state/store/details/actions'
import ReactMarkdown from 'react-markdown'

interface DetailsComponentProps extends RouteComponentProps<{id: string}> {
    getJobDetails(id: string): any;
    jobId: string;
    data: JobData | {};
}

class DetailsComponent extends React.PureComponent<DetailsComponentProps, {}> {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getJobDetails(id)
    }

    render() {
        const  jobDetails  = this.props.data;

        return (
            <div>
                <ReactMarkdown source={jobDetails.description}/>
            </div>);
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
