import './Home.css';
import backgroundVid from '../assets/website-background.mp4'

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
                <div className='aboutMePara'>Hi, my name is Charles and I'm a CS student at the University of Waterloo, graduating in 2028.
                    I love coding, both for specific problem solving, as well as for personal projects, which you can find in the 'Projects' tab above.
                    I also co-lead my school's debate club for 2 years and competed in formal British Parlimentary debate for 5 years outside of school, making it to the provincial level of competition.
                    Finally, I've been playing the clarinet and saxophone in my school bands for all 4 years. I'm self taught for piano and have been one of the piano players for my church's Sunday service for a year.
                </div>

            </div>

        </div>
    );
}

export default Home