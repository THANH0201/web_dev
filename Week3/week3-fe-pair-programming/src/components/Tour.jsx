const Tour = ({id, image, date, title, info, icon, location, duration, cost}) => {
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
            <span>{icon && <i className={icon}></i>}</span>{location}
          </p>
          {/* 6. price */}
          <p>from {cost}</p>
          {/* 7. duration */}
          <p>{duration}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour;
