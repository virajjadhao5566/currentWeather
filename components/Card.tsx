import React from 'react'

const Card = ({ data , city }) => {
    if(!data) return <p>Loading...</p>
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://img.freepik.com/premium-psd/sunny-rainy-cloudy-day-weather-forecast-icon-illustration_47987-10695.jpg" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">City : {city}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Temperature : {data.main.temp_max}</span>
            </div>
        </div>

    )
}

export default Card
