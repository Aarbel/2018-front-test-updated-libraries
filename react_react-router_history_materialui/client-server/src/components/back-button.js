import React from 'react';
import history from '../history'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import BackIcon from 'material-ui/svg-icons/hardware/keyboard-backspace';
    
export const BackButton = () => {
    
    const goBack = () => {
        history.goBack()
    }

    const style = {
        'position': 'absolute',
        'top': '5rem',
        'left': '1rem',
        'zIndex': '1',
    }

    return (
        <FloatingActionButton onClick={goBack}
                              style={style}>
            <BackIcon />
        </FloatingActionButton>
    )

}