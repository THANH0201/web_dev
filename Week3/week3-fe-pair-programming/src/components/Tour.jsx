const Tour = ({id, image, date, title, info, icon1, location, icon2, duration, icon3, cost}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        {/* 1. image */}
        <img src={image} className="tour-img" alt={title} />
        {/* 2. tourDay */}
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          {/* 3. tourName */}
          <h4>{title}</h4>
        </div>
        {/* 4. description */}
        <p>
          {info}
        </p>
        <div className="tour-footer">
          <p>
            {/* 5. location */}
            <span>{icon1 && <i className={icon1}></i>}</span>{location}
          </p>
          {/* 6. price */}
          <p>
            <span>{icon2 && <i className={icon2}></i>}</span>from {cost}
          </p>
          {/* 7. duration */}
          <p>
            <span>{icon3 && <i className={icon3}></i>}</span>{duration}
          </p>
        </div>
      </div>
    </article>
  )
}

export default Tour;
