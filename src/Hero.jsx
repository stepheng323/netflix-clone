import React from 'react';

const Hero = () => {
	return (
		<section>
      <div className="hero">
			<div className='hero-text'>
				<div style={{textAlign: 'center'}} className="big-heading">
				<h1 className="">Unlimited movies, TV</h1>
				<h1 className="">shows, and more.</h1>

				</div>
				<p className="medium-heading">Watch anywhere. Cancel anytime.</p>
				<p className="small-heading">
					Ready to watch? Enter your email to create or restart your membership.
				</p>
			</div>
      <div className="search hero-text">
        <input id="big-search" placeholder="Email address" type="text"/>
        <button className="btn search-btn">Get Started &gt; </button>
      </div>
      </div>
		</section>
	)
};

export default Hero;
