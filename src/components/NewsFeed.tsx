import { useState, useEffect } from "react";
import axios from "axios";
import LatestNewsItem from "./LatestNewsItem";
import TopNewsItem from "./TopNewsItem";

const NewsFeed = () => {
  const [topArticles, setTopArticles] = useState<any[]>([]);
  const [latestArticles, setLatestArticles] = useState<any[]>([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=99f062a792664e49814dd86156b78dd0");
      const response2 = await axios.get("https://newsapi.org/v2/everything?q=newyork&pagesize=10&apiKey=99f062a792664e49814dd86156b78dd0");
      console.log(response);
      setTopArticles(response.data.articles);
      setLatestArticles(response2.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      <div>
        <div style={{ marginLeft: "350px", marginTop: "50px" }}>
          <ul style={{ display: "flex" }}>
            <li>
              <div style={{font: 'Times-Roman', color: '#EB3B15', fontWeight: 'bolder', fontSize: 30}}>
                  LATEST NEWS
              </div>
              <div style={{marginBottom: '30px'}}>
                {latestArticles.map((article) => {
                  return (
                    <LatestNewsItem
                      title={article.title}
                      description={article.description}
                      url={article.url}
                      urlToImage={article.urlToImage}
                    ></LatestNewsItem>
                  );
                })}
              </div>
            </li>
            <li>
              <div style={{ marginLeft: "30px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <div style={{font: "Times-Roman",color: "#EB3B15",fontWeight: "bolder",fontSize: 30,}}>
                    POPULAR NEWS
                  </div>
                </div>
              </div>
              <div>
                {topArticles.map((article) => {
                  return (
                    <TopNewsItem
                      title={article.title}
                      url={article.url}
                    ></TopNewsItem>
                  );
                })}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
