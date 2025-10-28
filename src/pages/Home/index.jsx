import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {
    const { Title } = Typography
    const navigate = useNavigate();
    return (
        <>
            <Title level={1} className='text-center my-5' >This is a Home</Title>
            <div className="container">
                <Row gutter={[16, 16]} justify="center" align="middle">
                    <Col span={12} className='text-center' >
                        <Button type='primary' variant='solid' color='default' onClick={()=>navigate("/auth/login")} >Goto Login Page</Button>
                    </Col>
                    <Col span={12} className='text-center' >
                        <Button type='primary' variant='solid' color='default' onClick={()=>navigate("/auth/register")}>Goto Register Page</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home