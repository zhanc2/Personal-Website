import React, { useState, useEffect } from 'react';

import './ProjectDescription.css'

function ProjectDescription(props) {

    const [showDescription, setShowDescription] = useState(false);

    function changeState() {
        if (showDescription) {
            setShowDescription(false);
        }
        else {
            setShowDescription(true);
        }
    }

    return (
        <div className={`projectDescription ${showDescription && 'hide'}`}>
            <div className='projectDescriptionCard'>
                <div className='projectDescriptionTitle'>
                    <div className='projectName'>
                        DKASJHDKAS
                    </div>
                    <div className='projectLinks'>
                        yo this works right
                    </div>
                </div>

                <div className='projectDescriptionBody'>
                    lorem ipsum yada yada lorem ipsum yada yada lorem ipsum yada yada lorem ipsum yada yada
                </div>

            </div>
        </div>
    );
}

export default ProjectDescription;