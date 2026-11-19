import {useEffect, useState } from "react";

function App() {
  
  const [repos, setRepo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const languages = ["python", "JavaScript", "TypeScript", "rust"];
  const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
  console.log(randomLanguage);
  useEffect(() => {
    
    async function fethRepo() {
      try{
        const response = await fetch(`https://api.github.com/search/repositories?q=${randomLanguage}&per_page=1`);

        if (!response.ok) {
          throw new Error("HTTP error" + response.status);
        }
        const data = await response.json();
        setRepo(data.items);
        setErr(null)
        console.log(data);
      }catch (err){
        setErr("Error" + err.message);
      }finally{
        setIsLoading(false);
      }
    }

    fethRepo();
  },[]);

  if (isLoading) {
    return <p>Loading Repo</p>
  }

  if (err) {
    return <p>{err}</p>
  }
  return(
    <div>
      <h1 className="text-2xl">Hello World</h1>
      {repos.map((repo) => 
        <div key={repo.id}>
          <p>Language: {repo.name}</p>
          <p>Repository Name: {repo.full_name}</p>
          <p>Repository Url: {repo.url}</p>
        </div>
      )}
    </div>
  );
    
}

export default App;