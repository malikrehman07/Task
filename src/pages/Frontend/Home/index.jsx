import React, { useState } from 'react'
import { useCallback, useEffect } from 'react';
import axios from 'axios'
import { Button, Col, Progress, Row, Spin, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/Auth';

const { Title, Paragraph } = Typography
const Home = () => {
    const [compaigns, setCompaigns] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { user } = useAuthContext()
    console.log("user", user);



    const getCompaigns = useCallback(async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");

            const res = await axios.get("http://localhost:8000/compaigns/read")
            setCompaigns(res.data.compaigns);
            console.log("compaigns", res.data);

        } catch (error) {
            window.notify("Error fetching compaigns or donations", "error");
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { getCompaigns() }, [getCompaigns])
    if (loading) return <Spin size="large" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }} />;
    return (
        <main className="container py-5 ">
            <Row gutter={[18, 18]} justify="center" className=" text-start">
                {compaigns.map((compaign) => {
                    return (
                        <Col xs={12} sm={12} md={8} lg={4} key={compaign.id}>
                            <div className="card border-0" style={{ width: "100%", height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ cursor: 'pointer' }} onClick={() => navigate(`/compaign/${compaign._id}`)} >
                                    <img src={compaign.imageUrls?.[0]} alt={compaign.title} style={{ width: "300px", height: "200px", objectFit: "cover" }} className="img-fluid rounded-4" />
                                    <div className='my-2 text-start' >
                                        <Title level={5} className='mb-0' style={{ height: "40px", overflow: 'hidden', lineHeight:'1.1', fontSize:'15px' }} >{compaign.title} in {compaign.location}</Title>
                                        <Paragraph >${compaign.amount.toLocaleString()} for {compaign.night} night</Paragraph>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </main>
    )
}

export default Home