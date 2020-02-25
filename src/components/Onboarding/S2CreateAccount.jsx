import React from 'react';
import { Link } from 'react-router-dom';
import onboardingPic from '../../assets/onboardingPic.png';
import ProgressBar from './ProgressBar';
function S2CreateAccount() {
	return (
		<div className="big-container">
			<ProgressBar />
			<div className="s1-parent-container">
				<div className="s1-img">
					<img src={onboardingPic} />
				</div>
				<div className="s1-getting-started">
					<h1>Create Account</h1>
					<form className="create-account-form">
						<div className="name-container">
							<input
								className="formname"
								placeholder="First Name"></input>
							<input
								className="formname"
								placeholder="Last Name"></input>
						</div>

						<input
							className="jobtitle-input"
							placeholder="Job Title"></input>
						<input placeholder="Email"></input>
						<input placeholder="Organization Name"></input>
					</form>
					<Link to="/onboarding/step-3">
						<button>Next</button>
					</Link>
				</div>
			</div>
			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<Link to="/onboarding/step-1">
						<p>Previous step</p>
					</Link>
				</span>

				<p>Continue later</p>
			</div>
		</div>
	);
}

export default S2CreateAccount;
