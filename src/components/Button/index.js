import React from 'react';
import PropTypes from 'prop-types';

//styles
import { Wrapper } from './Button.styles';

const Button = ({ text, callback }) => (
    <Wrapper onClick={callback}>
        {text}
    </Wrapper>
);

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    callback: PropTypes.func,
}

export default Button;