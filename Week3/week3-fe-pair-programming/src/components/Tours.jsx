import tour1 from '../assets/images/tour-1.jpeg';
import tour2 from '../assets/images/tour-2.jpeg';
import tour3 from '../assets/images/tour-3.jpeg';
import tour4 from '../assets/images/tour-4.jpeg';
import tour5 from '../assets/images/tour-4.jpeg';
import tour6 from '../assets/images/tour-4.jpeg';
function Tours() {
  return (
    <div>
      <section className="section" id="tours">
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>
      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            {/* 1. image */}
            <img src={tour1} className="tour-img" alt="Tibet Adventure" />
            {/* 2. tourDay */}
            <p className="tour-date">august 26th, 2027</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              {/* 3. tourName */}
              <h4>Tibet Adventure</h4>
            </div>
            {/* 4. description */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cumque vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                {/* 5. location */}
                <span><i className="fas fa-map"></i></span>china
              </p>
              {/* 6. price */}
              <p>from €2100</p>
              {/* 7. duration */}
              <p>6 days</p>
            </div>
          </div>
        </article>
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour2} className="tour-img" alt="best of java" />
            <p className="tour-date">october 1th, 2027</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>best of java</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cumque vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span>indonesia
              </p>
              <p>from €1400</p>
              <p>11 days</p>
            </div>
          </div>
        </article>
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour3} className="tour-img" alt="explore hong kong" />
            <p className="tour-date">september 15th, 2027</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>explore hong kong</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cumque vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span>hong kong
              </p>
              <p>from €5000</p>
              <p>8 days</p>
            </div>
          </div>
        </article>
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour4} className="tour-img" alt="kenya highlights" />
            <p className="tour-date">december 5th, 2027</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>kenya highlights</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cumque vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span>kenya
              </p>
              <p>from €3300</p>
              <p>20 days</p>
            </div>
          </div>
        </article>
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour5} className="tour-img" alt="tour 5" />
            <p className="tour-date">january 10th, 2028</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>tour 5</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cumque vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span>location 5
              </p>
              <p>from €4000</p>
              <p>15 days</p>
            </div>
          </div>
        </article>
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour6} className="tour-img" alt="tour 6" />
            <p className="tour-date">february 20th, 2028</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>tour 6</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cumque vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span>location 6
              </p>
              <p>from €4500</p>
              <p>10 days</p>
            </div>
          </div>
        </article>
      </div>
    </section>
    </div>
  );
}

export default Tours;
