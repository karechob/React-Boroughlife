
const LatestNewsItem = ({title, description, url, urlToImage} : {title : string, description : string, url : string, urlToImage : string}) => {
  return (
    <div>
        <div style={{maxWidth: '650px', display: 'flex', marginTop: '30px'}}>
            <img className='news-img' style={{height: '200px', width: '400px'}} src={urlToImage}/>
            <div style={{marginLeft: '20px'}}>
                <h1 style={{font: 'Times-Roman', fontWeight: 'bolder', fontSize: 30, display: 'grid'}}>
                    <a href={url}>{title}</a>
                </h1>
                <p>
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default LatestNewsItem