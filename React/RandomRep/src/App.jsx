import { useState } from "react";

function App() {
  
  const [repos, setRepo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const [selectedLanguage, setSelectedLanguage] = useState("");
  // const languages = ["python", "JavaScript", "TypeScript", "rust"];
  // const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
  // console.log(randomLanguage);
  // useEffect(() => {
    
  //   async function fethRepo() {
  //     try{
  //       const response = await fetch(`https://api.github.com/search/repositories?q=${randomLanguage}&per_page=1`);

  //       if (!response.ok) {
  //         throw new Error("HTTP error" + response.status);
  //       }
  //       const data = await response.json();
  //       setRepo(data.items);
  //       setErr(null)
  //       console.log(data);
  //     }catch (err){
  //       setErr("Error" + err.message);
  //     }finally{
  //       setIsLoading(false);
  //     }
  //   }

  //   fethRepo();
  // },[]);

  // if (isLoading) {
  //   return <p>Loading Repo</p>
  // }

  // if (err) {
  //   return <p>{err}</p>
  // }

  async function fetchRepo(language) {
    setIsLoading(true);
    setErr(null);
    try{
      const response = await fetch(`https://api.github.com/search/repositories?q=${language}&per_page=40`);
      if (!response.ok) {
        throw new Error("HTTPS Status: " + response.status);
      }
      const data = await response.json();
      
      const randomIndex = Math.floor(Math.random() * data.items.length);
      setRepo(data.items[randomIndex]);
      
    }catch (error) {
      setErr(error.message);
    }finally {
      setIsLoading(false);
    }
  }
  function handSelectOnChange(e) {
    const language = e.target.value;
    setSelectedLanguage(language);
    fetchRepo(language);
  }
  console.log(repos);
  return(
    <div>
      <select value={selectedLanguage} onChange={handSelectOnChange}>
        <option value="">Select a programming language</option>
        <option value="JavaScript">JavaScript</option>
        <option value="python">Python</option>
        <option value="typeScript">TypeScript</option>
        <option value="rust">Rust</option>
      </select>
      <button onClick={() => fetchRepo(selectedLanguage)} disabled={isLoading || !selectedLanguage}>Refresh</button>
      
     <div>
      {selectedLanguage ? (<div>if selected the random repo display here {selectedLanguage}</div>) : (<div>Please Select a language</div>)}
     </div>
     {isLoading && (<p>Loading, please wait</p>)}
      <h1 className="text-2xl">Hello World</h1>
      
      
      {/* {repos.map((repo) => 
        <div key={repo.id}>
          <p>Language: {repo.name}</p>
          <p>Repository Name: {repo.full_name}</p>
          <p>Description: {repo.description}</p>
          <p>Repository Url: {repo.url}</p>
        </div>
      )} */}
    </div>
  );
    
}

export default App;