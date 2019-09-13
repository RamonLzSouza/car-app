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

            <input
                id='combustivel'
                className='form-control'
                placeholder='Adicione se o tipo do combustível do carro é flex'
                onChange={props.handleChangeCombustivel}
                value={props.combustivel} ></input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
            <br/>
           
            
        </Grid>
    </div>

)
