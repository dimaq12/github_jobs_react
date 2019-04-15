import * as React from 'react';
import { Link } from 'react-router-dom'
import { Col, Row, Divider } from "antd";

interface JobItemComponentProps{
    jobDetails: JobData
}

export const JobItemComponent = ({jobDetails}: JobItemComponentProps) =>

    (
        <Col span={24}>
            <Row>
                <Col span={24}>
                    <Row type="flex" justify="space-between" align="middle">
                        <Col>
                            <h3><Link to={`details/${jobDetails.id}`}>{jobDetails.title}</Link></h3>
                        </Col>
                        <Col>
                            <span>{jobDetails.location}</span>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Row type="flex" justify="space-between" align="middle">
                        <Col>
                            <div><a style={{ color: 'grey'}}>{jobDetails.company}</a><span style={{ color: 'green', marginLeft: "5px" }}>- {jobDetails.type}</span></div>
                        </Col>
                        <Col>
                            <span>{jobDetails.created_at}</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Divider />
        </Col>
    )