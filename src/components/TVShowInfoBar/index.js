import React from 'react';
import PropTypes from 'prop-types';

//helpers
import { calcTime } from '../../helpers';

//styles
import { Wrapper, Content } from './TVShowInfoBar.styles';

const TVShowInfoBar = ({ episodeTime, numberOfEpisode, numberOfSeason }) => (
    <Wrapper>
        <Content>
            <div className='column'>
                <p>Episode time: {calcTime(episodeTime)}</p>
            </div>
            <div className='column'>
                <p>Number of episode: {numberOfEpisode}</p>
            </div>
            <div className='column'>
                <p>Number of season: {numberOfSeason}</p>
            </div>
        </Content>
    </Wrapper>
);

TVShowInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
}

export default TVShowInfoBar;