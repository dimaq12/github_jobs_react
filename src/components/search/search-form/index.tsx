import * as React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { TextField, CheckboxField } from "redux-form-antd"
import { Row, Button, Form } from 'antd';

class SearchFormComponent extends React.PureComponent<InjectedFormProps> {
    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        const formItemLayout = {
            labelCol: {
              sm: { span: 8 },
            },
            wrapperCol: {
              sm: { span: 16 },
            },
        };

        const checkboxFormItemLayout = {
            labelCol: {
              sm: { span: 19, offset: 3},
            },
            wrapperCol: {
              sm: { span: 2 },
            },
        };
                 
        return (
            <Form style={{ background: '#bae7ff', padding: '20px', borderRadius: "0, 0, 20px, 20px" }} {...formItemLayout} onSubmit={handleSubmit}>
                <Row gutter={1} type="flex" justify="center" align="middle">
                    <Field {...formItemLayout} name="description" label="Job Description" component={TextField} placeholder="Filter by title, benefits, companies, expertise"/>
                    <Field {...formItemLayout} name="location" label="Location" component={TextField} placeholder="Filter by city, state, zip code or country"/>
                    <Field {...checkboxFormItemLayout} label="Full Time" name="isFullTime" value={false} component={CheckboxField}/>
                    <Button style={{ marginLeft: 24, marginBottom: 24  }} type="primary" disabled={pristine || submitting} htmlType="submit">Submit</Button>
                </Row>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'searchForm'
})(SearchFormComponent)
