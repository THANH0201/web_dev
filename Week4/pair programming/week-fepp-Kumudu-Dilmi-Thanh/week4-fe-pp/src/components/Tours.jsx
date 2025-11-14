import { useState } from 'react';
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

function Tours() {
  const [toursData, setToursData] = useState(tours);

  // delete tour
  const removeTour = (id) => {
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);
  };

  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      
      <div className="section-center featured-center">
        {toursData.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
          

        ))}

      
    </div>
    </section >
  );
};

export default Tours;
