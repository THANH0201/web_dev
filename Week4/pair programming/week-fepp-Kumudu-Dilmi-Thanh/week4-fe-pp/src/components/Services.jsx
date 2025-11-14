import { useState } from 'react';
import { services } from '../data';
import Title from './Title';
import Service from './Service';

function Services() {
  const [servicesData, setServicesData] = useState(services);
  // delete service
  const removeService = (id) => {
    const newServices = servicesData.filter((service) => service.id !== id);
    setServicesData(newServices);
  };
  
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => (
          <Service {...service} key={service.id} removeService={removeService} />
        ))}
      </div>
    </section>
  );
}

export default Services;
