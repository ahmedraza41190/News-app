import "./index.css";
import { useEffect, useState } from "react";
import loadingGif from "../../Assets/loading.gif";

export default function Content() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const keys = [
    "773a0cc313msh295d7502f6b02fbp187c0fjsnab04c4750f31",
    "b5a0240c74msh06cf676249a3419p10cc6ejsn1b0052d9147c",
    "5733c6d6b4mshbef5b96e75ac139p1d7985jsn3611aef79317",
  ];
  const random = Math.floor(Math.random() * 3);

  useEffect(() => {
    //get news API function
    const getTrendingNews = () => {
      setLoading(true);

      fetch("https://bing-news-search1.p.rapidapi.com/news/", {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": keys[random],
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setLoading(false);
          setData(response.value);
          console.log(response);
          setErr(response.message);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    };
    getTrendingNews();
  }, []);

  const getNews = (e) => {
    e.preventDefault();
    //get news API function from search query
    setLoading(true);
    setData([]);

    fetch(
      `https://bing-news-search1.p.rapidapi.com/news/search?q=${searchTerm}&freshness=Day&textFormat=Raw&safeSearch=Off`,
      {
        method: "GET",
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key": keys[random],
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        console.log(response);
        setData(response.value);
      })
      .catch((err) => {
        setLoading(false);
        setErr(err?.message);
        console.error(err);
      });
  };

  const dateFunction = (postDate) => {
    const formatter = new Intl.RelativeTimeFormat("en");
    const diff = new Date() - new Date(postDate);
    const d = formatter.format(Math.round(-diff / (1000 * 60 * 60)), "hour");
    return d;
  };

  return (
    <>
      <form className="inputForm" onSubmit={getNews}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search News topic"
          required
        />
        <button type="submit"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
          width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
          </path>
        </svg></button>
      </form>
      {loading ? (
        <div className="loadingDiv">
          <img src={loadingGif} className="loadingGif" alt="Loading" />
        </div>
      ) : (
        ""
      )}
      {err && <div className="errorr">{err}</div>}
      <div className="contentSection">
        {data?.map((eachNews) => (
          <a
            className="link"
            href={eachNews?.url}
            target="_blank"
            rel="noreferrer"
            key={eachNews?.name}
          >
            <div
              className="post"
              style={{
                backgroundImage: `url(${eachNews?.image?.thumbnail?.contentUrl
                  .replace("&pid=News", "")
                  .replace("pid=News&", "")
                  .replace("pid=News", "")}`,
              }}
            >
              <div className="myH1">
                <h1>{eachNews?.name}</h1>
              </div>
              <h3>
                {eachNews?.description}
                {"...  "}
                <span className="dateSpan">
                  {" "}
                  ({dateFunction(eachNews?.datePublished)})
                </span>
              </h3>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
