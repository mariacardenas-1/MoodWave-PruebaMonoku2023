'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const FeelingsGraphic = ({values}) => {
  const labels = values.map(obj =>{
    return obj.name
  })
  const rate = values.map(obj =>{
    return obj.value
  })
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Frecuencia en dias',
        data: rate,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='xl:w-3/5 xl:mx-auto'>
      <div className='text-pink text-lg text-center p-5 font-bold md:text-start md:p-10 lg:p-20 md:text-2xl '>Tu Mes de Sentimientos: Un Resumen Visual</div>
      <div className='flex flex-col items-center md:flex-row md:p-10 lg:p-20 lg:pt-0 '>
        <div>
          <Doughnut data={data} />
        </div>
        <div className=''>
          <p className='p-5 text-justify text-white md:mx-auto md:w-11/12'>Experimentamos diversas emociones en la vida diaria, esenciales para nuestra identidad y relación con el mundo. Hemos registrado tus emociones del último mes y te presentamos un resumen visual. Reflexiona sobre tus estados de ánimo y cómo te sientes en diferentes momentos. Cada color representa una emoción. Utiliza esta información para tu bienestar emocional y sigue registrando tus emociones para crecer y vivir conscientemente.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeelingsGraphic;