import ThumbnailDescription from "../components/Thumbnail-Description";

import house from "../assets/house.png";

import './Projects.css'

function Projects() {

    // maybe make the description take the thumbnail as the argument

    return (
        <div className='Projects'>
            <div className='projectTitle'>
                Projects
            </div>

            <div className='thumbnailContainer'>
                <ThumbnailDescription name='Hermitrade' imgUrl={house} thumbnailDescription='Blockchain Marketplace' className='projectCard' />
                <ThumbnailDescription name='Lost in Gravity' imgUrl={house} thumbnailDescription='Gravity Manipulation Horror FPS' className='projectCard' />
                <ThumbnailDescription name='Survive the Night' imgUrl={house} thumbnailDescription='Top Down Zombie Shooter' className='projectCard' />
                <ThumbnailDescription name='Personal Website' imgUrl={house} thumbnailDescription='Project Portfolio (This!)' className='projectCard' />
            </div>
        </div>

    );
}

export default Projects;