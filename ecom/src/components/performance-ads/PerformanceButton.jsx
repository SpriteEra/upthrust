import React from 'react'

const PerformanceButton = ({ text = "Scale Your PPC", btncss }) => {
    return (
        <div>
            <span className={`${btncss}`}>{text}</span>
        </div>
    )
}

export default PerformanceButton