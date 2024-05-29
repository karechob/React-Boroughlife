
const TopNewsItem = ({title, url} : {title : string, url : string}) => {
  return (
    <div>
        <div style={{maxWidth: '650px', display: 'flex', marginTop: '30px'}}>
            <div style={{marginLeft: '20px'}}>
                <h1 style={{font: 'Times-Roman', fontWeight: 'bolder', fontSize: 18, display: 'grid'}}>
                    <a href={url}>{title}</a>
                </h1>
            </div>
        </div>
    </div>
  )
}
export default TopNewsItem