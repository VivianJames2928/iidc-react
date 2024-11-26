
import Header from '../components/header'
import Countdown from '../components/countdown'
import Note from '../components/note'
import Location from '../components/location'
import Contact from '../components/contact'
import Footer from '../components/footer'


export default function Home() {
    return (
      <div>
        <link rel="icon" href="../public/assets/fontawesome/css/all.css" />
        <Header />
        <Countdown />
        <Note />
        <Location />
        <Contact />
        <Footer />
      </div>
    );
}