const Service = ({ icon, title, text, details,id,removeService }) => {
  const handleDelete = () => {
    removeService(id); // Pass the item's ID to the parent component for deletion
  };
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
        {details && <p className='service-details'>{details}</p>}

        <button onClick = {handleDelete}>
          remove
        </button>
      </div>
    </article>
  )
}
export default Service