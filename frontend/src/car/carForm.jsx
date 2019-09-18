import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='carForm'>
        <Grid cols='12 9 10'>
            <input
                id='marca'
                className='form-control'
                placeholder='Adicione uma marca'
                onChange={props.handleChangeMarca}
                value={props.marca} ></input>

            <input
                id='modelo'
                className='form-control'
                placeholder='Adicione um modelo'
                onChange={props.handleChangeModelo}
                value={props.modelo} ></input>

            <input
                id='ano'
                className='form-control'
                placeholder='Adicione um ano'
                onChange={props.handleChangeAno}
                value={props.ano} ></input>

<h4>O carro é flex?</h4>
            <input
                type="radio"
                id="combustivel"
                onChange={props.handleChangeCombustivel}
                value="true"
                checked={props.combustivel === "true"}
            /> Sim
            <br/>
            <input
                type="radio"
                id="combustivel"
                onChange={props.handleChangeCombustivel}
                value="false"
                checked={props.combustivel === "false"}
            />  Não
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='floppy-o fa-2x' onClick={props.handleAdd}></IconButton>
            <br />
            <IconButton style='info' icon='search fa-2x'
                onClick={props.handleSearch}></IconButton>


        </Grid>
    </div>

)
