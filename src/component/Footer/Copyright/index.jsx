import { Col, Row } from 'antd'
import React from 'react'

const Copyright = () => {
    const year = new Date().getFullYear()
    return (
        <div className='custom-container py-2' >
            <div className='row' >
                <div className='col-12' >
                    <div className="text-center text-black mb-0">&copy; {year} MalikRehman. All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default Copyright