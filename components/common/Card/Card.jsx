/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import muni from '../../../src/assets/muni.jpg'


export default function CardDetails({punto}) {

    return (
        <div style={{ maxWidth: 200 }}>
            <img src={muni} alt="Municipalidad SMT" className='img-fluid'/>
            <p className='m-0 text-center mt-3' style={{fontWeight: '800'}}>Municipalidad SMT</p>
            <div className='d-flex align-items-center justify-content-center pt-4'>
                <IconButton aria-label="add to favorites">
                    <p className='m-0' style={{fontSize: '.8rem'}}>Ver Más</p>
                </IconButton>
                <IconButton aria-label="share" size='small'>
                    <ShareIcon />
                </IconButton>
            </div>
        </div>
    );
}
