import React from 'react'
import Layout from '../layout/mylayout'

export default function RaQue({data}) {
    return (
        <div className="rounded bg-orange-300 mx-auto my-auto px-auto py-auto container">
            <p>THÔNG TIN QUẺ</p>
            <div>
                <p>
                    {data.ngay}
                </p>
            </div>
            </div>
    )
}
