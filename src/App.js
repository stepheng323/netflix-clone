import React, { useState } from 'react';
import './App.css';
import Hero from './Hero';
import logo from './netflix.png';
import tv from './tv.png';
import mobile from './mobile.jpg';
import devicePile from './device-pile.png';
import boxshot from './boxshot.png';

function App() {
	const [open, setOpen] = useState(false);
	return (
		<div className='App'>
			<section className='landing'>
				<div className='filter'>
					<header className='header'>
						<img id='logo' alt='logo' src={logo} />
						<button className='btn'>Sign In</button>
					</header>
					<Hero />
				</div>
			</section>
			<div className='filter'>
				<div className='divide' />

				<section className='feature'>
					<div className='tv-text'>
						<h2 className='big-heading'>Enjoy on your TV.</h2>
						<p className='medium-heading'>
							Watch on Smart TVs, Playstation, Xbox,
							<br /> Chromecast, Apple TV, Blu-ray players,
							<br /> and more.
						</p>
					</div>
					<div>
						<img className='tv' alt='tv' src={tv} />
						<div className='tv-video'>
							<video width='380' autoPlay loop muted>
								<source
									type='video/mp4'
									src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
								></source>
							</video>
						</div>
					</div>
				</section>
				<div className='divide' />
				<section className='feature'>
					<div className='mobile'>
						<img className='tv' alt='tv' src={mobile} />
					</div>
					<div className='mobile-overlay'>
						<img className='boxshot' alt='boxshots' src={boxshot} />
						<div className='mobile-text'>
							<p style={{ fontWeight: 'bold', marginBottom: 5 }}>
								Stranger Things
							</p>
							<p style={{ color: '#0071eb', fontSize: '11' }}>Downloading...</p>
						</div>
						<img
							alt='animation'
							className='mobile-animation'
							src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif'
						/>
					</div>

					<div className='tv-text'>
						<h2 className='big-heading'>
							Download your shows
							<br /> to watch offline.
						</h2>
						<p className='medium-heading'>
							Save your favorites easily and always have
							<br /> something to watch.
						</p>
					</div>
				</section>

				<div className='divide' />
				<section className='feature'>
					<div className='tv-text'>
						<h2 className='big-heading'>Watch everywhere.</h2>
						<p className='medium-heading'>
							Stream unlimited movies and TV shows on <br />
							your phone, tablet, laptop, and TV without
							<br /> paying more.
						</p>
					</div>
					<div>
						<img className='tv' alt='tv' src={devicePile} />
						<div className='tv-video2'>
							<video width='300' autoPlay loop muted>
								<source
									type='video/mp4'
									src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
								></source>
							</video>
						</div>
					</div>
				</section>
				<div className='divide' />
				<div className='faq-container'>
					<h1>Frequently asked questions</h1>
					<div className='faq'>
						<div className='faq-header'>
							<p onClick={() => setOpen(!open)}>
								What is Netflix?
							</p>
						</div>
						{open && (
							<div className='faq-content'>
								<p>
									Netflix is a streaming service that offers a wide variety of
									award-winning TV shows, movies, anime, documentaries, and more
									on thousands of internet-connected devices.
								</p>
								<p>
									You can watch as much as you want, whenever you want without a
									single commercial – all for one low monthly price. There's
									always something new to discover and new TV shows and movies
									are added every week!
								</p>
							</div>
						)}
					</div>
					<div className='faq'>
						<div className='faq-header'>
							<p onClick={() => setOpen(!open)}>How much does Netflix cost?</p>
						</div>
						{open && (
							<div className='faq-content'>
								<p>
									Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
									streaming device, all for one fixed monthly fee. Plans range
									from ₦2,900 to ₦4,400 a month. No extra costs, no contracts.
								</p>
							</div>
						)}
					</div>
					<div className='faq'>
						<div className='faq-header'>
							<p onClick={() => setOpen(!open)} >Where can i watch?</p>
						</div>
						{open && (
							<div className='faq-content'>
								<p>
									Watch anywhere, anytime, on an unlimited number of devices.
									Sign in with your Netflix account to watch instantly on the
									web at netflix.com from your personal computer or on any
									internet-connected device that offers the Netflix app,
									including smart TVs, smartphones, tablets, streaming media
									players and game consoles.
								</p>
								<p>
									You can also download your favorite shows with the iOS,
									Android, or Windows 10 app. Use downloads to watch while
									you're on the go and without an internet connection. Take
									Netflix with you anywhere.
								</p>
							</div>
						)}
					</div>
					<div className='faq'>
						<div className='faq-header'>
							<p onClick={() => setOpen(!open)}>How do i cancel?</p>
						</div>
						{open && (
							<div className='faq-content'>
								<p>
									Netflix is flexible. There are no pesky contracts and no
									commitments. You can easily cancel your account online in two
									clicks. There are no cancellation fees – start or stop your
									account anytime.
								</p>
							</div>
						)}
					</div>
					<div className='faq'>
						<div className='faq-header'>
							<p onClick={() => setOpen(!open)}>What can i watch on netflix?</p>
						</div>
						{open && (
							<div className='faq-content'>
								<p>
									Netflix has an extensive library of feature films,
									documentaries, TV shows, anime, award-winning Netflix
									originals, and more. Watch as much as you want, anytime you
									want.
								</p>
							</div>
						)}
					</div>
					<div className='search hero-text'>
						<input id='big-search' placeholder='Email address' type='text' />
						<button className='btn search-btn'>Get Started &gt; </button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
