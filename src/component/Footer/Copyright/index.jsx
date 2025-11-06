import { Col, Row } from 'antd'
import React from 'react'

const Copyright = () => {
    const year = new Date().getFullYear()
    return (
        <div className='container py-2' >
            <Row>
                <Col span={24} >
                    <div className="text-center text-black mb-0">&copy; {year} MalikRehman. All Rights Reserved.</div>
                </Col>
            </Row>
        </div>
    )
}

export default Copyright