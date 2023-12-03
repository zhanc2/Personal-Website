import ThumbnailDescription from "../components/Thumbnail-Description";

import hermitradeLogo from "../assets/project_thumbnails/hermitrade-logo.svg";
import lostingravityLogo from "../assets/project_thumbnails/lostingravity-logo.png";
import survivethenightLogo from "../assets/project_thumbnails/survivethenight-logo.png";
import reactLogo from "../assets/project_thumbnails/react-logo.png";
import upsetAviansLogo from "../assets/project_thumbnails/upset-avians.png"

import './Projects.css'

function Projects() {

    // maybe make the description take the thumbnail as the argument

    return (
        <div className='Projects project-animated-background'>
            <div className='projectTitle'>
                Projects
            </div>

            <div className='thumbnailContainer'>
                <ThumbnailDescription className='projectCard' name='Upset Avians' imgUrl={upsetAviansLogo} thumbnailDescription='3D Remake of Angry Birds'
                    github='https://github.com/zhanc2/Survive-The-Night' devpost='hideLink' itchio='https://zhanc2.itch.io/upset-avians' youtube='https://www.youtube.com/watch?v=y_NBjyNjpgo' otherLink='hideLink'
                    description={`Upset Avians is a 3D remake of the classic game "Angry Birds" by Rovio. Use a slingshot to launch birds with various abilities to take down the structures that the pigs are hiding in!\n\nThis project was made using Unreal Engine 4. The voxel models were made with MagicaVoxel and the sprites and UI were made with Paint.net.\n\nThis was my first time using Unreal Engine, so I used Blueprints. I had a lot of fun designing models and sprites with voxels and coding with blueprints was something I'd never done before. Some features I hope to add in the next realease include animations for models and more levels.`} />
                <ThumbnailDescription className='projectCard' name='Survive the Night' imgUrl={survivethenightLogo} thumbnailDescription='Top Down Zombie Shooter'
                    github='https://github.com/zhanc2/Survive-The-Night' devpost='hideLink' itchio='hideLink' youtube='hideLink' otherLink='hideLink'
                    description={`Survive the Night is a top down, pixel art based, singleplayer zombie shooter game. The goal is to fend off waves of zombie until daybreak, using the coins dropped by defeating zombies to upgrade your weaponry and keep yourself healthy.\n\nThis game was made using the Python graphics library Pygame. I also created the art for the players, zombies, particles, and UI.\n\nThis was one of my first full coding projects that I did, having coded it in the summer a year after I started programming with a "real" coding language (I had experimented with Scratch before). Previously, I had done a few smaller scale beginner projects, such as a calculator and trivia game, so this was a new challenge for me. The main challenge I had was working with the graphics and creating the art.`} />
                <ThumbnailDescription className='projectCard' name='Hermitrade' imgUrl={hermitradeLogo} thumbnailDescription='Blockchain Marketplace'
                    github='https://github.com/Dissonant101/hermitrade' devpost='https://devpost.com/software/hermitrade' itchio='hideLink' youtube='hideLink' otherLink='hideLink'
                    description={`Hermitrade is a blockchain based electronics marketplace webapp. Using Etherium through the MetaMask extension as the method of payment, users can put their electronics up for sale on the website. Then, others can conduct the transaction through Metamask and personally arrange the physical details of the sale.\n\nThe front of the project was made using React, Typescript, and Tailwind CSS, while the smart contracts used Solidity. There is no backend because the user directly interacts with the blockchain instead of a centralized server.\n\nThis project was created for the first in-person hackathon I attended (Jamhacks 6), which was also the first hackathon that I submitted a completed project for. I was tasked with building the front-end of the website. While I did have some experience with HTML, CSS, and JS, I had to learn React, Typescript, and Tailwind CSS throughout the 36 hours of coding.`} />
                <ThumbnailDescription className='projectCard' name='Lost in Gravity' imgUrl={lostingravityLogo} thumbnailDescription='Gravity Manipulation Horror FPS'
                    github='hideLink' devpost='https://devpost.com/software/lost-in-gravity' itchio='hideLink' youtube='https://www.youtube.com/watch?v=ypzJ4RV_xF8' otherLink='https://play.unity.com/mg/other/webgl-builds-216024' other='Play Online'
                    description={`Lost in Gravity is a first person horror game with a unique twist: the ability to manipulate gravity at will. The objective is to navigate the dark maze that the player is placed in, avoid and defeat enemy robots that chase the player, and collect all 15 gems. The player is able to flip the direction of gravity at the press of a button, leading to new and exciting ways to play a well documented genre.\n\nThis game was created using the Unity game engine, along with Blender for creating the 3D models and FLStudio for the soundtrack and sound effects.\n\nThis project was created for a coding challenge (Highlander Engineering Challenge) over the course of a week. Out of the team of 3, I was in charge of the UI, enemy pathfinding and behavior, and player movement. I also created some features that didn't end up in the final version, such as lasers that the player would have to maneuver around. This was my first time using the Unity game engine as well as C#.`} />
                <ThumbnailDescription className='projectCard' name='Personal Website' imgUrl={reactLogo} thumbnailDescription='Project Portfolio (This!)'
                    github='https://github.com/zhanc2/zhanc2.github.io' devpost='hideLink' itchio='hideLink' youtube='hideLink' otherLink='hiddenLink'
                    description={`The website you're currently reading from! This website was created using React with JavaScript.`} />
            </div>
        </div>

    );
}

export default Projects;