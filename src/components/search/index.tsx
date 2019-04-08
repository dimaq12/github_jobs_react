import * as React from 'react';
import { withRouter, RouteComponentProps } from "react-router-dom";
import  SearchForm  from "./search-form"

interface SearchComponentProps extends RouteComponentProps<{}> {
    
}

class SearchComponent extends React.PureComponent<SearchComponentProps, {}> {
    componentDidMount() {
        
    }

    render() {
        return (
            <React.Fragment>
                <SearchForm/>
            </React.Fragment>
        );
    }
}

export default withRouter(SearchComponent)