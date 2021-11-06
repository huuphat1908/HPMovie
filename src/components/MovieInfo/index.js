import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

//api
import API from '../../API';

//components
import Thumb from '../Thumb';
import Rate from '../Rate';
import Modal from '../Modal';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

//image
import NoImage from '../../images/no_image.jpg';

//styles
import { Wrapper, Content, Text } from './MovieInfo.styles';

//context
import { Context } from '../../context';

const MovieInfo = ({ movie }) => {
    const [user] = useContext(Context);
    const [showTrailer, setShowTrailer] = useState(false);

    const handleRating = async (value) => {
        const rating = await API.rateMovie(user.sessionId, movie.id, value);
        console.log(rating);
    }

    const toggleTrailer = () => {
        setShowTrailer(!showTrailer);
    }

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                    }
                    clickable={false}
                    alt='movie-thumb'
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>

                    <div className='rating-directors'>
                        <div>
                            <h3>RATING</h3>
                            <div className='score'>{movie.vote_average}</div>
                        </div>
                        <div className='director'>
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key='director.credit_id'>{director.name}</p>
                            ))}
                        </div>
                    </div>
                    <button className='watch-trailer' onClick={toggleTrailer}>
                        Watch trailer
                    </button>
                    {showTrailer &&
                        <Modal active={showTrailer} callback={toggleTrailer}>
                            <iframe src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                                    width='100%'
                                    height='100%'
                                    title='trailer'
                                    allowFullScreen />
                        </Modal>
                    }
                    <div>
                        {user &&
                            <div>
                                <p>Rate Movie</p>
                                <Rate callback={handleRating} />
                            </div>
                        }
                    </div>
                </Text>
            </Content>
        </Wrapper>
    )
};

MovieInfo.propTypes = {
    movie: PropTypes.object,
}

export default MovieInfo;