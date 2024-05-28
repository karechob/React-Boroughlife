import React from 'react'

function NewsFeed() {
  return (
    <div>
        <div>
            <div style={{marginLeft: '350px', marginTop: '50px'}}>
                <ul style={{display: 'flex'}}>
                    <li>
                        <div>
                            <h1 style={{font: 'Times-Roman', color: '#EB3B15', fontWeight: 'bolder', fontSize: 30}}>
                                LATEST NEWS
                                <img style={{height: 'auto', width: '750px'}} src="src\assets\8cf2de649147e8f3f705d07d0e2c2e62.png"/>
                            </h1>
                        </div>
                        <div style={{width: '750px'}}>
                            <p style={{font: 'Times-Roman', fontWeight: 'bolder', fontSize: 30, marginTop: '30px'}}>
                                Title Sample
                            </p>
                            <p>
                                Sample Text Sample Text Sample Text Sample TextSample Text
                                Sample Text Sample Text Sample Text Sample Text Sample Text
                                Sample Text Sample Text Sample Text Sample Text 
                            </p>
                        </div>
                        <div style={{maxWidth: '650px', display: 'flex', marginTop: '30px'}}>
                            <img style={{height: 200, width: 'auto'}} src="src\assets\NYC-Social-Share-Image-iStock-985069044.jpg" />
                            <div style={{marginLeft: '20px'}}>
                                <p style={{font: 'Times-Roman', fontWeight: 'bolder', fontSize: 30, display: 'grid'}}>
                                    Title Sample
                                </p>
                                <p>
                                    Sample Text Sample Text Sample Text Sample TextSample Text
                                </p>
                            </div>
                        </div>
         
                    </li>
                    <li>
                        <div style={{marginLeft: '30px'}}>
                            <div style={{marginBottom: '10px'}}>
                                <h2 style={{font: 'Times-Roman', color: '#EB3B15', fontWeight: 'bolder', fontSize: 30}}>
                                    POPULAR NEWS
                                </h2>
                            </div>
                            <div>
                                <p style={{font: 'Times-Roman', fontWeight: 'bolder', fontSize: 15, marginBottom: 30, maxWidth: '450px'}}>
                                    Sample Text Sample Text Sample Text Sample TextSample Text
                                    Sample Text Sample Text Sample Text Sample Text Sample Text
                                    Sample Text Sample Text Sample Text Sample Text  
                                </p>
                            </div>
                            <div>
                                <p style={{font: 'Times-Roman', fontWeight: 'bolder', fontSize: 15, marginBottom: 30, maxWidth: '450px'}}>
                                    Sample Text Sample Text Sample Text Sample TextSample Text
                                    Sample Text Sample Text Sample Text Sample Text Sample Text
                                    Sample Text Sample Text Sample Text Sample Text  
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NewsFeed