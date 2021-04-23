import { Detail, Header, Hero, Testimonial } from "./components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Testimonial />
      <Detail />
    </div>
  );
}

export default App;
