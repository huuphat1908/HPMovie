import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

//api
import API from '../../API';

//components
import MovieThumb from '../MovieThumb';
import Rate from '../Rate';
import Modal from '../Modal';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

//image
import NoImage from '../../images/no_image.jpg';
import PlayIcon from '../../images/play-icon.svg';

//styles
import { Wrapper, Content, Text } from './TVShowInfo.styles';

//context
import { Context } from '../../context';

const TVShowInfo = ({ movie }) => {
    const [user] = useContext(Context);
    const [showTrailer, setShowTrailer] = useState(false);

    const getMovieTrailerKey = () => {
        if (movie.videos.results[0]) {
            let movieTrailerKey = movie.videos.results[0].key;
            movie.videos.results.forEach(video => {
                if (video.type === 'Trailer') {
                    movieTrailerKey = video.key;
                }
            });
            return movieTrailerKey;
        }
        return null;
    }

    const handleRating = async (value) => {
        const rating = await API.rateTVShow(user.sessionId, movie.id, value);
        console.log(rating);
    }

    const toggleTrailer = () => {
        setShowTrailer(!showTrailer);
    }

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <MovieThumb
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
                    {movie.videos.results[0] ? (
                        <button className='btn-watch-trailer' onClick={toggleTrailer}>
                            Watch trailer
                            <img src={PlayIcon} alt='play-icon' />
                        </button>
                    ) : null
                    }
                    {showTrailer &&
                        <Modal active={showTrailer} callback={toggleTrailer}>
                            <iframe src={`https://www.youtube.com/embed/${getMovieTrailerKey()}`}
                                width='100%'
                                height='100%'
                                title='trailer'
                                allowFullScreen
                                frameBorder='0' />
                        </Modal>
                    }
                    {user && <Rate callback={handleRating} />}
                </Text>
            </Content>
        </Wrapper>
    )
};

TVShowInfo.propTypes = {
    movie: PropTypes.object,
}

export default TVShowInfo;