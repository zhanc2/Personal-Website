import './Thumbnail.css'

function Thumbnail(props) {
    return (
        <button className='card' onClick={props.onClick}>
            <h2 className='thumbnailTitle'>
                {props.name}
            </h2>
            <img src={props.url} className='thumbnailImage' alt='' />
            <div className='description'>
                {props.description}
            </div>
        </button>
    );
}

export default Thumbnail