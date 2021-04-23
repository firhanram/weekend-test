import { Header, Hero, Testimonial } from "./components"
import Background from './assets/images/background.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const style = {
  backgroundImage: `url(${Background})`
}

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonial />
    </div>
  );
}

export default App;
