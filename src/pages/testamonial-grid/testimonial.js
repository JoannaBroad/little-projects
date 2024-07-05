
// imported images for the cards
import Image from 'astro/components/Image.astro';
import imageDaniel from './testimonials-grid-starter/images/image-daniel.jpg';
import imageJeanette from './testimonials-grid-starter/images/image-jeanette.jpg';
import imageJonathan from './testimonials-grid-starter/images/image-jonathan.jpg';
import imageKira from './testimonials-grid-starter/images/image-kira.jpg';
import imagePatrick from './testimonials-grid-starter/images/image-patrick.jpg';
import imageQuote from './testimonials-grid-starter/images/bg-pattern-quotation.svg';


export const test = [{
      name: 'Daniel',
      image: imageDaniel,
      quote: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      quoteImage: imageQuote,
      wideCard: true,
    },
    {
      name: 'Jeanette',
      image: imageJeanette,
      quote: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      wideCard: false,
      
    },
    {
      name: 'Jonathan',
      image: imageJonathan,
      quote: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      wideCard: false,
      
    },
    {
      name: 'Kira',
      image: imageKira,
      quote: 'It’s hard to overstate our gratification at Sunnyside’s sales team. They delivered, on time and on budget.',
      wideCard: false,
    },
  {
    name: 'Patrick',
    image: imagePatrick,
    quote: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    wideCard: false,
  }
]