import Slider from 'react-slick'
import './style.css'
import Slide from '../Slide'

const testimonials = [
    {
        by: 'Angelus',
        testimony: 'All those apps took me months to get running. Now the site practically runs itself!'
    },
    {
        by: 'Blu Kicks',
        testimony: 'Places where you can leverage tools and software to free up time to focus on growing the business.'
    },
    {
        by: 'SoYoung',
        testimony: 'Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction'
    }
]

const TestimonialSlider = () => {
    const settings = {
        dots:false,
        infinite: true,
        centerMode: true,
        speed:500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint:1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:2,
                    infinite: true,
                    dots:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                  centerMode: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows:false
                }
            }
        ]
    }

    const renderSlide = () => {
        return testimonials.map(({by, testimony}) => (
            <Slide by={by} testimony={testimony} />
        ))
    }

    return (
        <div className="w-10/12 xl:w-5/12 lg:w-9/12 mx-auto absolute left-0 right-0" style={{top: '93%'}}>
            <Slider
                {...settings}
            >
                {renderSlide()}
            </Slider>
        </div>
    )
}

export default TestimonialSlider