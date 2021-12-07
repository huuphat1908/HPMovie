import React, { useState } from 'react';

//style
import { Wrapper } from './Rate.styles';

const Rate = ({ callback }) => {
    const [value, setValue] = useState(5);

    return (
        <Wrapper>
            <h3>Rate Movie</h3>
            <div>
                <input
                    type='range'
                    min='1'
                    max='10'
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
                {value}
                <button onClick={() => callback(value)}>Rate</button>
            </div>
        </Wrapper>
    )
}

export default Rate;