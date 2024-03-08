import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { CategoryDetails } from './components/CategoryDetails'
import Home from './Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Ticket from './components/Ticket'
import RegisterService from './components/RegisterService'
import About from './components/About'
import SearchResults from './components/SearchResults'
import AboutPlatform from './components/AboutPlatform'
import ForCompanies from './components/ForCompanies'
import ForUsers from './components/ForUsers'
import Marketing from './components/Marketing'
import Terms from './components/Terms'
import Contact from './components/Contact'


const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                
                <Route path="/registriraj-uslugu" component={RegisterService} />
                <Route path="/o-nama" component={About} />
                <Route path="/o-platformi" component={AboutPlatform} />
                <Route path="/za-tvrtke" component={ForCompanies} />
                <Route path="/za-korisnike" component={ForUsers} />
                <Route path="/marketing" component={Marketing} />
                <Route path="/uvjeti-koristenja" component={Terms} />
                <Route path="/kontakt" component={Contact} />
                {/* <Route path="/categoryDetails/:groupIndex/:categoryIndex/:slag/:subCategory" component={CategoryDetails} exact /> */}
                <Route path="/:slag" component={CategoryDetails} exact />
                <Route path="/:category/:subCategory" component={Ticket} />
                <Route path="/searchResults" component={SearchResults} />
                <Route path="/" component={Home} exact />
            </Switch>
            <Footer />

        </div>
    )
}

export default App
