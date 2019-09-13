import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import CarForm from './carForm'
import CarList from './carList'

const URL = 'http://localhost:3000/api/cars'

export default class Car extends Component {

    constructor(props) {
        super(props)
        this.state = {
            marca: '',
            modelo: '',
            ano: '',
            combustivel: ''
        };

        this.handleChangeMarca = this.handleChangeMarca.bind(this)
        this.handleChangeModelo = this.handleChangeModelo.bind(this)
        this.handleChangeAno = this.handleChangeAno.bind(this)
        this.handleChangeCombustivel = this.handleChangeCombustivel.bind(this)

        this.handleAdd = this.handleAdd.bind(this)

    }

    handleChangeMarca(e) {
        this.setState({ ...this.state, marca: e.target.value })
    }
    handleChangeModelo(e) {
        this.setState({ ...this.state, modelo: e.target.value })
    }
    handleChangeAno(e) {
        this.setState({ ...this.state, ano: e.target.value })
    }
    handleChangeCombustivel(e) {
        this.setState({ ...this.state, combustivel: e.target.value })
    }

    handleAdd() {
        const marca = this.state.marca
        const ano = this.state.ano
        const modelo = this.state.modelo
        const combustivel = this.state.combustivel
        axios.post(URL, { marca, ano, modelo, combustivel })
            .then(resp => console.log("Funcionou!!"))

    }

    render() {
        return (
            <div>
                <PageHeader titulo='Carros' subtitulo='Cadastro'></PageHeader>
                <CarForm
                    marca={this.state.marca}
                    modelo={this.state.modelo}
                    ano={this.state.ano}
                    combustivel={this.state.combustivel}


                    handleAdd={this.handleAdd}

                    handleChangeMarca={this.handleChangeMarca}
                    handleChangeModelo={this.handleChangeModelo}
                    handleChangeAno={this.handleChangeAno}
                    handleChangeCombustivel={this.handleChangeCombustivel} />
                <CarList />
            </div>

        )
    }
}