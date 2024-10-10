import React from 'react'
import ImageIcon from '@mui/icons-material/AddLocationAlt';

const Statehandling = () => {

    function message()
    {
        open('https://maps.google.com/')
    }
    return (
        <div>
            <span onMouseOver={message}>
                <ImageIcon/>
            </span>
        </div>
  )
}

export default Statehandling