import React, { useState } from 'react';
import { DatePicker, Input, Select, Button, Space, Row, Col, Card } from 'antd';
import { SearchOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;
const { Option } = Select;

const Searchbar = () => {
    const [location, setLocation] = useState('');
    const [dates, setDates] = useState([]);
    const [guests, setGuests] = useState(1);

    const handleSearch = () => {
        console.log({
            location,
            checkIn: dates?.[0]?.format('YYYY-MM-DD'),
            checkOut: dates?.[1]?.format('YYYY-MM-DD'),
            guests,
        });
        // You can navigate or fetch search results here
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f9f9f9', }} className='pt-4 pb-5' >
            <Card style={{ width: "90%", maxWidth: 850, borderRadius: '50px' }} bodyStyle={{ padding: '12px 14px'}} className='shadow-lg' >
                <Row gutter={[16, 16]} align="middle" justify="space-between" >
                    <Col xs={24} sm={6}>
                        <Input prefix={<EnvironmentOutlined />} placeholder="Where are you going?" value={location} onChange={(e) => setLocation(e.target.value)} bordered={false} size="large" />
                    </Col>

                    <Col xs={24} sm={8}>
                        <RangePicker style={{ width: '100%' }} size="large" value={dates} onChange={(values) => setDates(values || [])} disabledDate={(current) => current && current < dayjs().startOf('day')} bordered={false} />
                    </Col>

                    <Col xs={24} sm={4}>
                        <Select prefix={<UserOutlined />} value={guests} onChange={(val) => setGuests(val)} size="large" bordered={false} style={{ width: '100%' }}>
                            {[1, 2, 3, 4, 5].map((num) => (
                                <Option key={num} value={num}>
                                    {num} Guest{num > 1 && 's'}
                                </Option>
                            ))}
                        </Select>
                    </Col>

                    <Col xs={24} sm={4} style={{ textAlign: 'center' }}>
                        <Button type="primary" icon={<SearchOutlined />} size="large" shape="circle" variant='solid' color='default' onClick={handleSearch} />
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Searchbar;
