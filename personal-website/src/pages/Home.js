import './Home.css';
import backgroundVid from '../assets/website-background.mp4';
import githubIcon from '../assets/github-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import devpostIcon from '../assets/devpost-icon.png';


function Home() {
    return (
        <div className="Home">
            <div className="mainTitle">
                <video src={backgroundVid} autoPlay loop muted className='background-video'></video>
                <div className="backgroundFilter">
                    <div className="title">
                        <h1 className='titleText'>
                            Charles Zhang
                        </h1>
                        <h3 className='titleText'>
                            UW CS '28 <br />
                            <a href={'https://vsemi.io/'} className='links'><b>VSemi Intern '23</b></a> | <a href={"https://www.nokia.com/about-us/careers/student-and-graduate-opportunities/canada/"} className='links'><b>Nokia Future Tech '22</b></a>
                        </h3>
                    </div>
                </div>

            </div>

            <div className='aboutMe'>
                <div className='aboutMeBox'>
                    <div className='aboutMeContainer'>
                        <div className='aboutMePara'>Hi! My name is Charles and I'm a CS student at UW, graduating in 2028.
                            I love coding, both for specific problem solving, as well as for personal projects.
                            <br /><br />I also co-lead my school's debate club for 2 years and competed in British Parlimentary debate for 5 years outside of school, making it to the provincial level of competition.
                            <br /><br />Finally, I played the clarinet and saxophone in my school bands for all 4 years. I'm self taught for piano and have been one of the piano players for my church's Sunday service for a year.
                            <br /><br />You can find me at these links below:
                        </div>
                        <div className='aboutMePic' />
                    </div>
                    <div className='linksContainer'>
                        <ul className='socialsLinks'>
                            <li className='socialsLinkGroup'>
                                <a href='https://github.com/zhanc2' className='socialsLink' id='githubLink'>
                                    <img id='githubIcon' className='socialsIcon' src={githubIcon} />
                                    Github
                                </a>
                            </li>
                            <li className='socialsLinkGroup'>
                                <a href='https://www.linkedin.com/in/charles-zhang-947038207/' className='socialsLink' id='linkedinLink'>
                                    <img id='linkedinIcon' className='socialsIcon' src={linkedinIcon} />
                                    LinkedIn
                                </a>
                            </li>
                            <li className='socialsLinkGroup'>
                                <a href='https://devpost.com/charles-zhang-waterloo' className='socialsLink' id='devpostLink'>
                                    <img id='devpostIcon' className='socialsIcon' src={devpostIcon} />
                                    Devpost
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;