import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWifi,
  FaStar,
  FaBed,
  FaBath,
  FaHotel,
  FaUtensils,
  FaSpa,
  FaSwimmer,
  FaGlassCheers,
  FaDumbbell,
  FaQuoteRight,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/page",
    text: "Page",
    subItems: [
      {
        id: 51,
        path: "/booking",
        text: "Booking",
      },
      {
        id: 52,
        path: "/team",
        text: "Our Team",
      },
      {
        id: 53,
        path: "/testimonial",
        text: "Testimonial",
      },
    ],
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <FaFacebookF />,
  },
  {
    icon: <FaXTwitter />,
  },
  {
    icon: <FaInstagram />,
  },
  {
    icon: <FaLinkedinIn />,
  },
  {
    icon: <FaYoutube />,
  },
];

export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <FaHotel className="text-primary" size={40} />,
    name: "Rooms & Appartment",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <FaUtensils className="text-primary" size={40} />,
    name: "Food & Restaurant",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <FaSpa className="text-primary" size={40} />,
    name: "Spa & Fitness",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <FaSwimmer className="text-primary" size={40} />,
    name: "Sports & Gaming",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <FaGlassCheers className="text-primary" size={40} />,
    name: "Event & Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <FaDumbbell className="text-primary" size={40} />,
    name: "GYM & Yoga",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
];
export const team = [
  {
    image: "../assets/img/team-1.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-2.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
      },
      {
        name: "Contact Us",
      },
      {
        name: "Privacy Policy",
      },
      {
        name: "Terms & Condition",
      },
      {
        name: "Support",
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
      },
      {
        name: "Spa & Fitness",
      },
      {
        name: "Sports & Gaming",
      },
      {
        name: "Event & Party",
      },
      {
        name: "GYM & Yoga",
      },
    ],
  },
];

export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "123 Street, New York, USA",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+012 345 67890",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "info@example.com",
  },
];

export const contact = [
  {
    icon: <FaEnvelopeOpen className="text-primary me-2" />,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <FaEnvelopeOpen className="text-primary me-2" />,
    title: "Technical",
    email: "tech@example.com",
  },
  {
    icon: <FaEnvelopeOpen className="text-primary me-2" />,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <FaQuoteRight
        className="text-primary position-absolute end-0 bottom-0 me-4 mb-n1"
        size={30}
      />
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <FaQuoteRight
        className="text-primary position-absolute end-0 bottom-0 me-4 mb-n1"
        size={30}
      />
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    description:
      "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
    name: "Client Name",
    profession: "Profession",
    icon: (
      <FaQuoteRight
        className="text-primary position-absolute end-0 bottom-0 me-4 mb-n1"
        size={30}
      />
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = [
  {
    img: "../assets/img/room-1.jpg",
    price: "$110/night",
    name: "Junior Suit",
    star: [
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
    ],
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },

  {
    img: "../assets/img/room-2.jpg",
    price: "$110/night",
    name: "Executive Suite",
    star: [
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
    ],
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
  {
    img: "../assets/img/room-3.jpg",
    price: "$110/night",
    name: "Super Deluxe",
    star: [
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
      <small>
        <FaStar className="text-primary" size={20} />
      </small>,
    ],
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    yellowbtn: "View Detail",
    darkbtn: "book now",
  },
];

export const facility = [
  {
    icon: <FaBed className="text-primary me-2" size={20} />,
    quantity: 3,
    facility: "bed",
  },
  {
    icon: <FaBath className="text-primary me-2" size={20} />,
    quantity: 2,
    facility: "bath",
  },
  {
    icon: <FaWifi className="text-primary me-2" size={20} />,
    facility: "Wifi",
  },
];
