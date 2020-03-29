// Node_modules
import React from 'react';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Controller, Scene } from 'react-scrollmagic';
// import { Tween, Timeline } from 'react-gsap';
// Locals
import './Home.css';
// Components

class Home extends React.Component {
	constructor() {
		super();
		this.imagesLeft = ['html', 'css', 'javascript', 'react'];
		this.imagesRight = ['graphql', 'nodejs', 'java', 'mongodb'];
	}

	componentDidMount() {}

	render() {
		return (
			<div className="Home">
				{/* <div className="Skills" /> */}
				<ul>
					<li><a href="/projects/2048">2048</a></li>
					<li><a href="/projects/dna">DNA</a></li>
					<li><a href="/projects/four-in-a-row">four in a row</a></li>
					<li><a href="/projects/tic-tac-toe">tic tac toe</a></li>
					<li><a href="https://d21yheehhfoll5.cloudfront.net">Blockwallet</a></li>
					<li><a href="https://d3igi0be8yuebj.cloudfront.net">Beer Market</a></li>
					<li><a href="https://d1wp0ua4gaj68.cloudfront.net">App Api Spotify</a></li>
				</ul>
			</div>
		);
	}
}

export default Home;

/**
 				<Controller>
					<Scene duration={1000} triggerHook="onLeave" triggerElement=".panel-presentation" pin indicators>
						{progress => (
							<section className="panel panel-presentation">
								<Timeline
									totalProgress={progress * 2}
									paused
									target={
										<h2 className="my-name">Fabrice Jauvat</h2>
									}
								>
									<Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
									<Tween from={{ y: '15vh' }} to={{ y: '5vh' }} />
									<Tween from={{ x: '-9vw' }} to={{ x: '-5.5vw' }}>
										<div className="my-mail">
											<a href="mailto:fjauvat@gmail.com">
												<span><FontAwesomeIcon icon={faEnvelope} /></span>
												<span>fjauvat@gmail.com</span>
											</a>
										</div>
									</Tween>
								</Timeline>
								<Timeline totalProgress={progress} paused>
									<Tween from={{ x: '0vw', y: '30vh' }} to={{ x: '-60vw', y: '28vh' }}>
										<h1 className="my-background-text">Développeur Fullstack JS</h1>
									</Tween>

									</Timeline>
									</section>
								)}
							</Scene>

							<Scene duration={1000} triggerHook="onLeave" triggerElement=".panel-skills" pin indicators>
								{progress => (
									<section className="panel panel-skills">
										{console.log('Oncenter SCene 2', progress)}

										{
											this.imagesLeft.map(imgName => (
												// <React.Fragment>
												// <div key={imgName}>
												<Timeline key={imgName} totalProgress={progress} paused>
													<Tween duration={5} from={{ x: '0vw' }} to={{ x: '10vw' }} totalProgress={progress} paused>
														<div className="my-skill">
															<div><img src={`/img/icons/technos/${imgName}.png`} alt={imgName} className="my-skill__img" />
															</div>
															<div />
														</div>
													</Tween>
													<Tween from={{ x: '100vw' }} to={{ x: '90vw' }} totalProgress={progress} paused>
														<div className="my-skill">
															<div><img src={`/img/icons/technos/${imgName}.png`} alt={imgName} className="my-skill__img" />
															</div>
															<div />
														</div>
													</Tween>
												</Timeline>
												// </div>
												// </React.Fragment>
											))
										}


									</section>
								)}
							</Scene>
						</Controller>
 */
