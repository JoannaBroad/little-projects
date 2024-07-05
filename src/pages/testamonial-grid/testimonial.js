
// imported images for the cards
import Image from 'astro/components/Image.astro';
import imageDaniel from './testimonials-grid-starter/images/image-daniel.jpg';
import imageJeanette from './testimonials-grid-starter/images/image-jeanette.jpg';
import imageJonathan from './testimonials-grid-starter/images/image-jonathan.jpg';
import imageKira from './testimonials-grid-starter/images/image-kira.jpg';
import imagePatrick from './testimonials-grid-starter/images/image-patrick.jpg';
import imageQuote from './testimonials-grid-starter/images/bg-pattern-quotation.svg';
// the colors for the back ground
const bgColor = ['bg-violet-700', 'bg-slate-600', 'bg-white', 'bg-gray-900'];

const textColor = ['text-white', 'text-stone-300', 'text-slate-600'];

export const test = [
  {name:"Daniel Clifford" ,
  quote: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth." ,
  largeQuote:"I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup." ,
    image: imageDaniel,
    quoteImage: imageQuote,
    bgColor: bgColor[0],
    wideCard: true,
    longCard: false,
    order: 1,
    mainColor: textColor[0],
    quoteColor: textColor[1]
},
{
  name:'Jonathan Walters',
  quote: "The team was very supportive and kept me motivated",
  largeQuote: "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.",
  image: imageJonathan,
  bgColor: bgColor[1],
  wideCard: false,
  longCard: false,
  mainColor: textColor[0],
  quoteColor: textColor[1]
},
{
  name: "Jeanette Harmon",
  quote: "An overall wonderful and rewarding experience",
  largeQuote:"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.",
  image: imageJeanette,
  bgColor: bgColor[2],
  wideCard: false,
  longCard: false,
  mainColor: textColor[2],
  quoteColor: textColor[2]
},

{
  name: "Patrick Abrams",
  quote:"Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy",
  largeQuote: "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.",
  image: imagePatrick,
  bgColor: bgColor[3],
  wideCard: true,
  longCard: false,
  mainColor: textColor[0],
  quoteColor: textColor[1]
},
{
  name: 'Kira Whittle',
  quote: "Such a life-changing experience. Highly recommended!",
  largeQuote: "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!",
  image: imageKira,
  bgColor: bgColor[2],
  wideCard: false,
  longCard: true,
  mainColor: textColor[2],
  quoteColor: textColor[2]
    },
]