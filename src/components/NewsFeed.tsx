import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsFeed = () => {
  const [articles, setArticles] = useState<any[]>([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=99f062a792664e49814dd86156b78dd0"
      );
      console.log(response);
      setArticles(response.data.articles);
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
              <div>
                {articles.map((article) => {
                  return (
                    <NewsItem
                      title={article.title}
                      description={article.description}
                      url={article.url}
                      urlToImage={article.urlToImage}
                    ></NewsItem>
                  );
                })}
              </div>
            </li>
            <li>
              <div style={{ marginLeft: "30px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <h2
                    style={{
                      font: "Times-Roman",
                      color: "#EB3B15",
                      fontWeight: "bolder",
                      fontSize: 30,
                    }}
                  >
                    POPULAR NEWS
                  </h2>
                </div>
                <div>
                  <p
                    style={{
                      font: "Times-Roman",
                      fontWeight: "bolder",
                      fontSize: 15,
                      marginBottom: 30,
                      maxWidth: "450px",
                    }}
                  >
                    Sample Text Sample Text Sample Text Sample TextSample Text
                    Sample Text Sample Text Sample Text Sample Text Sample Text
                    Sample Text Sample Text Sample Text Sample Text
                  </p>
                </div>
                <div>
                  <p
                    style={{
                      font: "Times-Roman",
                      fontWeight: "bolder",
                      fontSize: 15,
                      marginBottom: 30,
                      maxWidth: "450px",
                    }}
                  >
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
  );
};

export default NewsFeed;
