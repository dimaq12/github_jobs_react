import * as React from 'react';
import {
    Form, Icon, Input, Button, Checkbox
  } from 'antd';

class SearchForm extends React.PureComponent {
    componentDidMount() {
        
    }


    handleSubmit(){
        console.log('handle Submit')
    }
    render() {
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item label="Job Description">
                    <Input prefix={<Icon type="highlight" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Filter by title, benefits, companies, expertise" />
                </Form.Item>
                <Form.Item label="Location">
                    <Input prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Filter by city, state, zip code or country" />
                </Form.Item>
                <Form.Item>
                    <Checkbox>Full Time Only</Checkbox>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Search
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export default SearchForm;