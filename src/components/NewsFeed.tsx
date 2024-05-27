import React from 'react'

function NewsFeed() {
  return (
    <div>
        <div>
            <div>
                <ul>
                    <li style={{display: 'inline-block'}}>
                        <div>
                            <h1 style={{font: 'Times-Roman', color: '#EB3B15', fontWeight: 'bolder', fontSize: 30}}>
                                LATEST NEWS
                                <img style={{height: 400, width: 'auto'}} src="src\assets\8cf2de649147e8f3f705d07d0e2c2e62.png"/>
                            </h1>
                        </div>
                    </li>
                    <li style={{display: 'inline-block'}}>
                        <div>
                            <h2 style={{font: 'Times-Roman', color: '#EB3B15', fontWeight: 'bolder', fontSize: 30}}>
                                POPULAR NEWS
                            </h2>
                        </div>
                        <div>
                            <p style={{font: 'Times-Roman', fontWeight: 'bolder', fontSize: 15, marginBottom: 30}}>
                                Sample Text Sample Text Sample Text Sample TextSample Text
                                Sample Text Sample Text Sample Text Sample Text Sample Text
                                Sample Text Sample Text Sample Text Sample Text  
                            </p>
                        </div>
                        <div>
                            <p style={{font: 'Times-Roman', fontWeight: 'bolder', fontSize: 15, marginBottom: 30}}>
                                Sample Text Sample Text Sample Text Sample TextSample Text
                                Sample Text Sample Text Sample Text Sample Text Sample Text
                                Sample Text Sample Text Sample Text Sample Text  
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NewsFeed