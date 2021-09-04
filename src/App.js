import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import CocktailInfo from './Pages/CocktailInfo'
import Error from './Components/Error'


const App = () => {

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/cocktail/:id">
                    <CocktailInfo />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    )

}


export default App

