import ThumbnailDescription from "../components/Thumbnail-Description";

import hermitradeLogo from "../assets/project_thumbnails/hermitrade-logo.svg";
import lostingravityLogo from "../assets/project_thumbnails/lostingravity-logo.png";
import survivethenightLogo from "../assets/project_thumbnails/survivethenight-logo.png";
import reactLogo from "../assets/project_thumbnails/react-logo.png";

import './Projects.css'

function Projects() {

    // maybe make the description take the thumbnail as the argument

    return (
        <div className='Projects'>
            <div className='projectTitle'>
                Projects
            </div>

            <div className='thumbnailContainer'>
                <ThumbnailDescription className='projectCard' name='Hermitrade' imgUrl={hermitradeLogo} thumbnailDescription='Blockchain Marketplace'
                    github='https://github.com/Dissonant101/hermitrade' devpost='https://devpost.com/software/hermitrade' otherLink='hideLink'
                    description='' />
                <ThumbnailDescription className='projectCard' name='Lost in Gravity' imgUrl={lostingravityLogo} thumbnailDescription='Gravity Manipulation Horror FPS'
                    github='hideLink' devpost='https://devpost.com/software/lost-in-gravity' otherLink='https://play.unity.com/mg/other/webgl-builds-216024' other='Play Online' />
                <ThumbnailDescription className='projectCard' name='Survive the Night' imgUrl={survivethenightLogo} thumbnailDescription='Top Down Zombie Shooter'
                    github='https://github.com/zhanc2/Survive-The-Night' devpost='hideLink' otherLink='hideLink' />
                <ThumbnailDescription className='projectCard' name='Personal Website' imgUrl={reactLogo} thumbnailDescription='Project Portfolio (This!)'
                    github='https://github.com/zhanc2/zhanc2.github.io' devpost='hideLink' otherLink='hiddenLink' />
            </div>
        </div>

    );
}

export default Projects;