import React from 'react';
// import Emoji component
import Emoji from './Emoji';
// import imgs from assets folder
import LambdaLogo from '../assets/lambdalogo.png';
import GithubLogo from '../assets/githublogo.png';

// Head functionial component returning jsx
function Head() {
    return(
        <div className="container">
            <div className="header">
                <img src={LambdaLogo} alt="Lambda Logo" />
                <div className="s">
                    <Emoji symbol="❤️" label="heart" />'s
                </div>
                <img src={GithubLogo} alt="Github Logo" />

            </div>
        </div>
    )
}
// export Head component
export default Head;