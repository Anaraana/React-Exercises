import { useEffect, useState } from "react";
import axios from "axios";
import './index.css'

export default function FetchGithub() {
  const [githubInfo, setGithubInfo] = useState(null);

  const GitHubAccount = () => {
    axios
      .get("https://api.github.com/users/badishd-icodice-edu")
      .then((res) => {
        //console.log(res)
        if (res.status === 200) {
          setGithubInfo(res.data);
          console.log("Hi");
        }
      })
      .catch((err) => {
        if (err.status === 404) {
          console.log("error");
        }
      });
  };
  
  useEffect(() => {
    GitHubAccount();
  }, []);

  return (
    <div>
        <pre>{JSON.stringify(githubInfo, null, 2)}</pre>
      <div>
        <img src={githubInfo?.avatar_url}></img>
        <span>{githubInfo?.name}</span>
        <span>{githubInfo?.login}</span>
        <span>{githubInfo?.bio}</span>
        {console.log(githubInfo)}
     
      </div>
      <div className="followers-container">
        <div>{githubInfo?.followers}<br/>Followers</div>
        <div>{githubInfo?.following}<br/>Following</div>
        <div>{githubInfo?.public_repos}<br/>Repositories</div>
      </div>

      <button onClick={() => GitHubAccount()}>Empoloyee Info</button>
    </div>
  );
}
