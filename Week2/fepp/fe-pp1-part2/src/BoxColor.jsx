function BoxColor(props) {
  const { r, g, b } = props;

  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`, 
  };

  return (
    <div className="box-color" style={boxStyle}>
      <p>rgb({r}, {g}, {b})</p>
      <p>#{((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}</p>
    </div>
  );
}

export default BoxColor;
