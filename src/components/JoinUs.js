import React from 'react'

const JoinUs = () => {
    return (
        <div>
            <div className="bg-image">
                <div className="overlay">
                    <h1 className="display-4">
                        Track Your Fitness Journey
                    </h1>
                    <p>
                        Discover the ultimate fitness companion with GymFuel. Log your workouts, set goals, and track calories burned. Stay motivated and achieve your goals with ease.
                    </p>
                    <div className="form-container">
                        <div className="trusted">
                            <img alt="Trusted icon" height="20" src="https://storage.googleapis.com/a1aa/image/hM9C9mQ1HmJZGJ9LZ90MFk2K33U7NIf3eWDnHsgJtPucdM9TA.jpg" width="20" />
                            <span>
                                Trusted by 3+ million users
                            </span>
                        </div>
                        <h2>
                            Sign Up
                        </h2>
                        <form>
                            <div className="mb-3">
                                <input className="form-control" placeholder="Kindly enter your name here" type="text" />
                            </div>
                            <div className="mb-3">
                                <input className="form-control" placeholder="Kindly enter your email here" type="email" />
                            </div>

                            <div className="mb-3">
                                <input className="form-control" placeholder="Kindly enter your password here" type="password" />
                            </div>
                            <div className="mb-3">
                                <input className="form-control" placeholder="Kindly confirm your password here" type="password" />
                            </div>
                            <button className="btn btn-danger" type="submit">
                                Confirm
                            </button>
                        </form>
                        <p className="mt-3">
                            Already have an account?
                            <a href="/#">
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinUs
