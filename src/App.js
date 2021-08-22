import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ProjectsPage from './pages/ProjectsPage';


function App() {
    const[loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        }, 3000)

    }, [])


    return (
        <Router >
                <Switch>
                    {loading ? 
                    <div className="App"><ClimbingBoxLoader/></div>
                    :
                    <Route path ="/" exact>
                        <HomePage />
                    </Route>
                    }
                    <Route path ="/About" exact>
                        <AboutPage/>
                    </Route>
                    <Route path ="/projects" exact>
                        <ProjectsPage/>

                    </Route>
                    <Route path ="/Resume" exact>
                        <ResumePage/>
                    </Route>
                </Switch>
            </Router>
       
    );
}

export default App;
