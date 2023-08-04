import React, { useState } from 'react';
import './Thumbnail-Description.css'

import githubIcon from '../assets/github-icon.png';
import devpostIcon from '../assets/devpost-icon.png';

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
                <div className='quickThumbnailDescription'>
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
                            <ul className='socialsLinks'>
                                <li className={`socialsLinkGroup ${props.github}`}>
                                    <a href={props.github} className='socialsLink' id='githubLink'>
                                        <img id='githubIcon' className='socialsIcon' src={githubIcon} alt='' />
                                        Github
                                    </a>
                                </li>
                                <li className={`socialsLinkGroup ${props.devpost}`}>
                                    <a href={props.devpost} className='socialsLink' id='devpostLink'>
                                        <img id='devpostIcon' className='socialsIcon' src={devpostIcon} alt='' />
                                        Devpost
                                    </a>
                                </li>
                                <li className={`socialsLinkGroup ${props.otherLink}`}>
                                    <a href={props.otherLink} className='socialsLink'>
                                        {props.other}
                                    </a>
                                </li>
                            </ul>
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