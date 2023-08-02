import React, { useState } from 'react';
import './Thumbnail-Description.css'

function ThumbnailDescription(props) {

    const [showDescription, setShowDescription] = useState(true);

    function changeState() {
        if (showDescription) {
            setShowDescription(false);
        }
        else {
            setShowDescription(true);
        }
    }

    // use the keyframes percentage animation thing to move it to middle then enlarge or whatever

    return (
        <div className='ThumbnailDescription' onClick={changeState}>
            <button className={`blurBackground ${!showDescription && 'showBlurBackground'}`}>

            </button>

            <button className='card' onClick={changeState}>
                <div className='thumbnailTitle'>
                    {props.name}
                </div>
                <img src={props.imgUrl} className='thumbnailImage' alt='' />
                <div className='thumbnailDescription'>
                    {props.thumbnailDescription}
                </div>
            </button>


            <div className={`projectDescription ${showDescription && 'hideDescription'}`}>
                <div className='projectDescriptionCard'>
                    <button className='exitButton' onClick={changeState}>
                        ×
                    </button>

                    <div className='projectDescriptionTitle'>
                        <div className='projectName'>
                            {props.name}
                        </div>
                        <div className='projectLinks'>
                            yo this works right
                        </div>
                    </div>

                    <div className='projectDescriptionBody'>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThumbnailDescription;