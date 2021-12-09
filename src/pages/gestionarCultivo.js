import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function GestionarCultivo() {
    return (
        <div className="container">
            <div className="row">
                <h1 className="col s12">Detalles tipo de cultivo</h1>
                <TextField className="input-field col s12 l6" label="ID del cultivo" variant="outlined" />
                <TextField className="input-field col s12 l6" label="Nombre" variant="outlined" />
                <TextField className="input-field col s12" label="Descripcion" variant="outlined" />
                <Button className="col s4 push-s4" variant="contained">Guardar</Button>
            </div>
        </div>
    );
}
export default GestionarCultivo;