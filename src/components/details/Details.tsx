import * as React from 'react';
//import { Link } from 'react-router-dom'
import { Col, Row, Divider, Alert } from "antd";
import './Details.scss';
import ReactMarkdown from 'react-markdown'

interface JobItemComponentProps{
    jobDetails: JobData
}

export const DetailsJobComponent = ({jobDetails}: JobItemComponentProps) =>

    (
        <Col span={24}>
            <Row>
                <Col span={24}> 
                    <div>
                        <span>{ jobDetails.location }</span>/<span>{ jobDetails.type }</span>
                    </div>
                    <h2>{jobDetails.title}</h2>
                    <Divider />
                </Col>
                <Col span={24}>
                    <Row>
                        <Col span={14}>
                            <ReactMarkdown source={jobDetails.description}/>
                        </Col>
                        <Col span={10}>
                            <div>
                                <img style={{width: '100%'}} src={jobDetails.company_logo}></img>
                            </div>
                            <Alert 
                                className="alerts"
                                message={jobDetails.company}
                                description={<a href={jobDetails.company_url}>{jobDetails.company_url}</a>}
                                type="warning"
                            />
                            <Alert
                                className="alerts"
                                message="How to apply"
                                description={
                                    <ReactMarkdown source={jobDetails.how_to_apply}/>
                                }
                                type="warning"
                            />
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
            <Divider />
        </Col>
    )