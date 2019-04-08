import * as React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";

interface DetailsComponentProps extends RouteComponentProps<{}> {
    
}

class DetailsComponent extends React.PureComponent<DetailsComponentProps, {}> {
    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                Details
            </div>);
    }
}

export default withRouter(DetailsComponent)