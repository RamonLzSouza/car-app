import React from 'react'
import IconButton from '../template/iconButton'
export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(car => (
            <tr key={car._id}>
                <td className={car.done ? 'markedAsDone' : ''}>{car.marca}</td>
                <td className={car.done ? 'markedAsDone' : ''}>{car.modelo}</td>
                <td className={car.done ? 'markedAsDone' : ''}>{car.ano}</td>
                <td className={car.done ? 'markedAsDone' : ''}>{car.combustivel}</td>
                <td>
                    <IconButton style='success' icon='check' hide={car.done}
                        onClick={() =>
                            props.handleMarkAsDone(car)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!car.done}
                        onClick={() =>
                            props.handleMarkAsPending(car)}></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!car.done}
                        onClick={() => props.handleRemove(car)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                    <th>Combustivel</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
};