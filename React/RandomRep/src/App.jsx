import { useState } from "react";
import {Star, GitFork, CircleAlert} from "lucide-react";

function App() {
  
  const [repos, setRepo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languageIcons = {
    JavaScript: "devicon-javascript-plain",
    Python: "devicon-python-plain",
    TypeScript: "devicon-typescript-plain",
    Rust: "devicon-rust-plain",
  };


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

  if (err) {
    return <p>{err.message}</p>
  }
  return(
    <div className="min-h-screen px-4 py-12 flex-wrap">
        <div className="max-w-sm mx-auto">
          <div className="flex flex-row sm:flex-row gap-2 mb-3">
            <select value={selectedLanguage} onChange={handSelectOnChange}
                    className="flex-1 border rounded-xl px-4 py-3 outline-non focus:ring-2 focus:bg-orange-100 text-center"
            >
              <option value="">Select a programming language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="TypeScript">TypeScript</option>
              <option value="Rust">Rust</option>
            </select>
          </div>
          {/* {isLoading && (<div className="border rounded-2xl p-10 text-center"><p className="animate-pulse">Loading, please wait</p></div>)} */}
            
          <div >
            {repos ? (<div className="border border-orange-50 rounded-2xl p-6 md:p-8 shadow-xl mb-2 text-wrap">
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-sm font-medium">{repos.name}</span>
                        </div>
                        <p className=" leading-relaxed mb-6">Repo Description: {repos.description}</p>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 mb-7">
                          <div className="flex items-center gap-2 mb-2">
                            <i className={`${languageIcons[repos.language]}`}></i>
                            <p className="text-xs font-bold">{repos.language}</p>
                          </div>

                          <div className="flex items-center mb-2">
                            <GitFork size={18}/>
                            <span className="text-xs">{repos.forks_count.toLocaleString()}</span>
                          </div>
                          
                          <div className="flex items-center mb-2">
                            <Star size={18}/>
                            <span className="text-xs">{repos.stargazers_count.toLocaleString()}</span>
                          </div>

                          <div className="flex items-center mb-2">
                            <CircleAlert size={18}/>
                            <span className="text-xs">{repos.open_issues_count.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>) : (<div className="border rounded-2xl p-10 text-center">{isLoading ? (<div className="border rounded-2xl p-10 text-center"><p className="animate-pulse">Loading, please wait</p></div>) 
                                                                                                : (<div className="border rounded-2xl p-10 text-center"><p className="animate-pulse">Please Select a language</p></div>)}</div>)}
          </div>
            {!isLoading && (
                <button onClick={() => fetchRepo(selectedLanguage)}
                        className="w-full flex items-center justify-center bg-orange-100 hover:bg-orange-50 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-semibold transition-colors"
                >Refresh</button>
            )} 
            
      </div> 
    </div>
  );
    
}

export default App;