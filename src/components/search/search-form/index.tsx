import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { detailsGet } from "../../../state/store/details"
import {
    Form, Icon, Input, Button, Checkbox
  } from 'antd';

interface SearchFormComponentProps {
    data: any
    onSubmit(description: string, location: string, isFoolTime: boolean): any;
}

class SearchFormComponent extends React.PureComponent<SearchFormComponentProps, {}> {
    constructor(props: SearchFormComponentProps) {
        super(props);
        this.state = {
            description: "",
            location: ""
        }
    };

    componentDidMount() {
        
    }

    search(e: any){
        e.preventDefault()

        console.log(e)
        //this.props.onSubmit('python', 'berlin', true)
    }

    handleFieldChange(e:any) {
        const name = e.target.name;
        if (name === 'description') {
            this.setState({ description: e.target.value });
            
        } else if (name === 'location') {
            this.setState({ location: e.target.value});
        }
        else if (name === 'isfulltime') {
            this.setState({isfulltime: e.target.value });
        }
    }

    render() {
        return (
            <Form layout="inline" onSubmit={(e) => this.search(e)}>
                <Form.Item label="Job Description">
                    <Input
                        name="description"
                        prefix={<Icon type="highlight" 
                        style={{ color: 'rgba(0,0,0,.25)' }} />} 
                        placeholder="Filter by title, benefits, companies, expertise"
                        onChange={(event: React.FormEvent<HTMLInputElement>) => this.handleFieldChange(event)} />
                </Form.Item>
                <Form.Item label="Location">
                    <Input 
                        name="location"
                        prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }}/>} 
                        placeholder="Filter by city, state, zip code or country"
                        onChange={(event: React.FormEvent<HTMLInputElement>) => this.handleFieldChange(event)} />
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        name="isfulltime"
                        onChange={(event) => this.handleFieldChange(event)}>
                        Full Time Only
                    </Checkbox>
                </Form.Item>
                <Form.Item >
                    <Button 
                        type="primary"
                        htmlType="submit"
                        className="login-form-button">
                        Search
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        data: state.search.data
    };
};

const mapDispatchToProps = (dispatch:any) => {
    return {
        onSubmit(description: string, location: string, isFoolTime: boolean){
            dispatch(detailsGet(description, location, isFoolTime))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormComponent);
