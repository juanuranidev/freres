import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {
  return (
    <section className='about'>
      <motion.div
        initial={{  x:-100, opacity: 0  }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ ease: "linear", duration: 0.25 }}>
        <div className='about_content'>
          <div className='about_content_div'>
            <h2 className='about_content_h2'>FRÈRES SIGNIFICA HERMANOS</h2>
            <p className='about_content_p'>Somos dos emprendedores que, desde 2017, soñamos con hacer de nuestra marca la predilecta de quienes buscan un básico duradero, combinable y de alta calidad.</p>
          </div>
          <div className='about_content_div'>
            <h2 className='about_content_h2'>NUESTRA MISIÓN</h2>
            <p className='about_content_p'>Buscamos convertirnos en la primera elección de aquellos que quieren vestirse bien y sentirse cómodos con sus prendas.</p>
          </div>
        </div>
        <p className='about_p'>De pies a cabeza, queremos que tengas diferentes alternativas para que te encuentres vestido siempre acorde a la ocasión.</p>
        <img className='about_img' src={'https://freres.ar/wp-content/uploads/2021/08/IMG_1647-scaled-uai-1440x960.jpg'} alt="Images de encargados de Freres"/>
      </motion.div>
    </section>
  );
}

export default About;