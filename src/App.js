import { Header, Hero, Testimonial } from "./components"
import Background from './assets/images/background.png'

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
