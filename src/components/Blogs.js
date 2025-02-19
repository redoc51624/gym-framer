import React from 'react'

const Blogs = () => {
    return (
        <div className='content'>
            <div className="container py-5">
                <div className='section-title'>our latest blogs</div>
                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <div className="card bg-dark text-white">
                            <div className='img-container'>
                            {/* <img alt="People exercising in a gym" className="card-img" height="400" src="https://storage.googleapis.com/a1aa/image/xLKbTNW2evQrJqRQUtboxBsFqEfaD4x7eqobdyfJeG2WqjpfE.jpg" width="800" /> */}
                            </div>
                            <div className="card-img-overlay d-flex flex-column justify-content-end">
                                <span className="badge bg-danger mb-2">
                                    Exercise
                                </span>
                                <h5 className="card-title">
                                    CONQUERING CONSISTENCY: HOW TO MAKE EXERCISE A HABIT YOU LOVE
                                </h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">
                                        <i className="fas fa-calendar-alt">
                                        </i>
                                        Jun 28, 2024
                                    </small>
                                    <div className="author">
                                        <div alt="Author Benjamin" height="30" src="https://storage.googleapis.com/a1aa/image/nrQsdjvNArLMF1oEZsjNWrsl1G4O3LAiwDEs0112ATOUHTfJA.jpg" width="30" />
                                        <small className="text-muted">
                                            Benjamin
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card bg-dark text-white mb-4">
                            <img alt="Person preparing healthy food" className="card-img" height="200" src="https://storage.googleapis.com/a1aa/image/6avxGEhbdYIwB5ApBnHuuFc7h5qf6FYfsoMsRxw1Cafo6Y6nA.jpg" width="400" />
                            <div className="card-img-overlay right-card-text d-flex flex-column justify-content-end">
                                <span className="badge bg-warning text-dark mb-2">
                                    Weight loss
                                </span>
                                <h5 className="card-title">
                                    WEIGHT LOSS: A SUSTAINABLE APPROACH FOR A HEALTHIER YOU
                                </h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">
                                        <i className="fas fa-calendar-alt">
                                        </i>
                                        Jun 26, 2024
                                    </small>
                                    <div className="author">
                                        <img alt="Author Jessica" height="30" src="https://storage.googleapis.com/a1aa/image/rgQGAPR5mYKmERS0WHRDYUB2fpuERAyIZ6ieQUM4ktyWdM9TA.jpg" width="30" />
                                        <small className="text-muted">
                                            Jessica
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-dark text-white">
                            <img alt="Healthy food with vegetables and meat" className="card-img" height="200" src="https://storage.googleapis.com/a1aa/image/TnVYpiafeZmt1UaHxReM70HFNerij2BKNFQFPPOt3OX60x0PB.jpg" width="400" />
                            <div className="card-img-overlay right-card-text d-flex flex-column justify-content-end">
                                <span className="badge bg-success mb-2">
                                    Nutrition
                                </span>
                                <h5 className="card-title">
                                    FUEL YOUR FITNESS: A GUIDE TO NUTRITION FOR PEAK PERFORMANCE
                                </h5>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">
                                        <i className="fas fa-calendar-alt">
                                        </i>
                                        Jun 23, 2024
                                    </small>
                                    <div className="author">
                                        <img alt="Author David" height="30" src="https://storage.googleapis.com/a1aa/image/OZGgjmLwaeT8VSIiS91CvDfldHKkjygeIR7oeQl9Fdgz0x0PB.jpg" width="30" />
                                        <small className="text-muted">
                                            David
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
