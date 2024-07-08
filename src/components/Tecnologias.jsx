function Tecnologias() {

  // estilos en linea con React
  const sectionStyle = { 
    backgroundColor: "darkgreen", 
    padding: "20px",
    margin: "10px",
    border: "solid 5px black"
  }


  return (
    <section style={sectionStyle}>
      <h2 style={ {backgroundColor: "darkblue"} }>Tecnologias aprendidas</h2>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>DOM</li>
        <li>Clases</li>
        <li>Testing</li>
      </ul>
    </section>
  );
}


export default Tecnologias