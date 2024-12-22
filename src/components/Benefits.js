import React from 'react'

const Benefits = () => {
    return (
        <div className="content">
            <div class="container text-center py-5">
                <div class="mb-4">
                    <button class="btn btn-dark rounded-pill px-4 py-2">
                        <i class="fas fa-star">
                        </i>
                        Our Benefits
                    </button>
                </div>
                <h1 class="section-title">
                    Discover GymFluencer Benefits
                </h1>
                <p class="section-subtitle">
                    Unlock your full potential with GymFluencer your personal fitness partner for progress and motivation
                </p>
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="benefit-card text-center">
                            <i class="fas fa-users icon">
                            </i>
                            <div>
                            <h5>
                                Effortless Workout Logging
                            </h5>
                            <p>
                                Easily log your workouts and monitor your progress over time with our intuitive logging feature.
                            </p>
                            </div>
                        </div>
                        <div class="benefit-card text-center">
                            <i class="fas fa-sync-alt icon">
                            </i>
                            <div>
                            <h5>
                                Accurate Rep Counting
                            </h5>
                            <p>
                                Count your reps accurately with our app, ensuring consistency and improved performance.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <img alt="Mobile app interface showing a workout timer and a person doing dumbbell lunges" class="phone-image" height="600" src="https://storage.googleapis.com/a1aa/image/2hfipsaiKA3kECf0rI625Epe8wtAeg4MxCuByXtXmiynB01PB.jpg" width="300" />
                    </div>
                    <div class="col-md-4">
                        <div class="benefit-card text-center">
                            <i class="fas fa-cogs icon">
                            </i>
                            <div>
                            <h5>
                                Personalized Workout Plans
                            </h5>
                            <p>
                                AI-powered workout plans tailored to your fitness level, goals, and progress.
                            </p>
                            </div>
                        </div>
                        <div class="benefit-card text-center">
                            <i class="fas fa-calculator icon">
                            </i>
                            <div>
                            <h5>
                                Calorie Calculation &amp; Personalized Diet Plans
                            </h5>
                            <p>
                                Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits
