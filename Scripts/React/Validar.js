class Validacion extends React.Component {

    constructor(props) {

        super(props);

        this.state = { text: " " };    //Estado

    }


    //Añadir al estao el valor del input
    cambiarTexto(e) {


        this.setState({ text: e.target.value });

    }

    //Ejecutar la función de pasarcompuesto
    pasarDatosFuncionCompuesto() {


        const salida = comprobarCompuesto(elementosDisponibles, this.state.text);


        if (typeof salida === "number") {

            alert("Has obtenido " + salida + " puntos.");

            //Actualiza el estado
            this.props.funcionAlPulsar(salida);

        }
    }

    //Lo que devulve
    render() {

        return (

            <div>
            <table className="Zona_Verificacion">

                <tbody>

                    <tr>

                        <td>

                            Inserte el compuesto:

                        </td>

                    </tr>

                    <tr>
                        <td>
                            <input onChange={this.cambiarTexto.bind(this)} />

                        </td>

                    </tr>

                    <tr>

                        <td>
                            {/*Boton */}
                            <button className="myButton" onClick={this.pasarDatosFuncionCompuesto.bind(this)}>Validar</button>

                        </td>

                    </tr>

                </tbody>
            </table>

            </div>


        )



    }

}