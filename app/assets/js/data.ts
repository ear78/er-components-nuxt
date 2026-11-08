import snowGhosts from '@/assets/img/snowghosts.jpg';
import greyBuilding from '@/assets/img/building-resize.jpg';
// import about from '../img/ABOUT.jpg'
import echoTower from '/img/echoTower.webp';
import jail from '/img/jail.webp';
import stairway from '/img/stairway.webp';
import stripes from '/img/stripes.webp';
import chairs from '/img/chairs.webp';
import echoTowerSml from '@/assets/img/echoTower-sml.jpg';
import ErTabs from '/img/tabs-screenshot.webp';
// import jailSml from '../img/jail-sml.jpg'
// import stairwaySml from '../img/stairway-sml.jpg'
import stripesSml from '@/assets/img/stripes-sml.jpg';
import chairsSml from '@/assets/img/chairs-sml.jpg';
import portfolio11 from '@/assets/img/UserMale.svg';
import portfolio12 from '@/assets/img/femaleUser.svg';
import PageBanner from '/img/pagebanner-screenshot.webp';
import HoverPods from '/img/hoverpods-screenshot.webp';
import TeamBuilding from '/img/teambuilding-screenshot.webp';
import HappyDots from '/img/happydots-screenshot.webp';
import Dropper from '/img/dropper-screenshot.webp';
import EasySlider from '/img/easyslider-screenshot.webp';
import pinkBuildingWebp from '@/assets/img/pinkBuilding.webp';
import pinkBuildingWebpSm from '@/assets/img/pinkBuilding-sm.webp';
import pinkBuildingJpg from '@/assets/img/pinkBuilding.jpg';
import logo from '@/assets/img/er-logo.svg';

export const bannerImgWebp = pinkBuildingWebp;
export const bannerImgWebpSm = pinkBuildingWebpSm;
export const bannerImgJpg = pinkBuildingJpg;

export const homeData = {
  desc: `A site using components to showcase my skills as a developer without the use of Ai. 
  Tech stack used is Vue, Typescript, Pinia, Jest,Tailwind, modern CSS, deployed to Netlify. 
  Currently a work in progress. The current customizable page components are`,
  components:
    'HappyDots, Banner, HoverPods, TeamBuilding, Dropper, EasySlider, Dashboard',
};

export const pageSectionData = [
  {
    id: 0,
    title: 'Page Banner Component',
    component: 'Page Banner',
    description: `is an easy to use good looking banner to help you get
    started out of the box. It allows you to easily update the Pre title text,
    Title text, Sub title text, button color, text alignment, and overlay.`,
    img: PageBanner,
    page: '/page-banner',
  },
  {
    id: 1,
    title: 'Hover Pods Component',
    component: 'Hover Pods',
    description: `is a creative way to make clickable links with a simple hover animation.
    The changeable props are background hover color, text color, squared format,
    open tab on click.`,
    img: HoverPods,
    page: '/hover-pods',
  },
  {
    id: 2,
    title: 'Team Building Component',
    component: 'Team Building',
    description: `is simple component that can create a user/team member card
    with a simple hover animation.
    It has an alt layout prop, and you can pass an object to dynamically represent
    each card.`,
    img: TeamBuilding,
    page: '/team-building',
  },
  {
    id: 3,
    title: 'Happy Dots Component',
    component: 'Happy Dots',
    description: `is simple component that can create a scrollable menu
    with a simple hover animation.
    It has a ref prop, dot color prop, text color prop, and you can pass an object to
    dynamically represent each dot as well.`,
    img: HappyDots,
    page: '/happy-dots',
  },
  {
    id: 4,
    title: 'Dropper Component',
    component: 'Dropper',
    description: `is simple component that can create a simple dropdown
    with a simple hover and click animation.
    It takes a title prop and passes the content as children`,
    img: Dropper,
    page: '/dropper',
  },
  {
    id: 5,
    title: 'Easy Slider Component',
    component: 'Easy Slider',
    description: `is simple component that can create a simple image slider
    with a simple hover animation.
    It takes a title prop and passes the content as children`,
    img: EasySlider,
    page: '/e-slider',
  },
  {
    id: 6,
    title: 'ER Tabs Component',
    component: 'ER Tabs',
    description: `The ER Tabs Component is a data driven tabs component. Setup a basic set of tabs with no configuration, or setup a fully custom set of tabs with custom slots.`,
    img: ErTabs,
    page: '/er-tabs',
  },
];

export const podData = [
  {
    id: 1,
    podBgImage: echoTowerSml,
    podText: 'Hello',
    podLink: 'https://www.apple.com',
  },
  {
    id: 2,
    podBgImage: chairsSml,
    podText: "I'm",
    podLink: 'https://www.apple.com',
  },
  {
    id: 3,
    podBgImage: greyBuilding,
    podText: 'A',
    podLink: 'https://www.apple.com',
  },
  {
    id: 4,
    podBgImage: stripesSml,
    podText: 'Hover Pod',
    podLink: 'https://www.apple.com',
  },
];

export const happyData = [
  {
    id: 0,
    text: 'Market Place',
    lineColor: '#fff',
    dotColor: '',
  },
  {
    id: 1,
    text: 'Collective',
    lineColor: '#fff',
    dotColor: '',
  },
  {
    id: 2,
    text: 'Attribution',
    lineColor: '#fff',
    dotColor: '',
  },
  {
    id: 3,
    text: 'SmartLink',
    lineColor: '#fff',
    dotColor: '',
  },
  {
    id: 4,
    text: 'User Experience',
    lineColor: '#fff',
    dotColor: '',
  },
];

export const sectionData = [
  {
    id: 0,
    img: chairs,
    title: { text: 'Market Place' },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.',
    button: {
      text: 'Get in touch',
      href: 'https://www.elliotrichardson.com',
      target: true,
    },
  },
  {
    id: 1,
    img: echoTower,
    title: { text: 'Collective' },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.',
    button: {
      text: 'Get in touch',
      href: 'https://www.elliotrichardson.com',
      target: true,
    },
  },
  {
    id: 2,
    img: stairway,
    title: { text: 'Attribution' },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.',
    button: {
      text: 'Get in touch',
      href: 'https://www.elliotrichardson.com',
      target: true,
    },
  },
  {
    id: 3,
    img: stripes,
    title: { text: 'SmartLink' },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.',
    button: {
      text: 'Get in touch',
      href: 'https://www.elliotrichardson.com',
      target: true,
    },
  },
  {
    id: 4,
    img: jail,
    title: { text: 'User Experience' },
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta non pulvinar neque laoreet suspendisse. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Senectus et netus et malesuada fames ac turpis.',
    button: {
      text: 'Get in touch',
      href: 'https://www.elliotrichardson.com',
      target: true,
    },
  },
];

export const dropperData = [
  {
    id: 0,
    title: "I'm a dropper title...",
    // icon: 'angle-down',
    content:
      "I'm the content that is connected to the dropper... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    title: "I'm a dropper title...",
    // icon: 'angle-down',
    content:
      "I'm the content that is connected to the dropper... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "I'm a dropper title...",
    // icon: 'angle-down',
    content:
      "I'm the content that is connected to the dropper... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "I'm a dropper title...",
    // icon: 'angle-down',
    content:
      "I'm the content that is connected to the dropper... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const forms = [
  [
    {
      inputType: 'text',
      labelText: 'Background Image',
      name: 'bgImage',
    },
    {
      inputType: 'text',
      labelText: 'Banner Pre Title',
      name: 'preTitle',
    },
    {
      inputType: 'text',
      labelText: 'Cta Url',
      name: 'ctaUrl',
    },
    {
      inputType: 'text',
      labelText: 'Banner Title',
      name: 'title',
    },
    {
      inputType: 'text',
      labelText: 'Banner Sub Title',
      name: 'subTitle',
    },
    {
      inputType: 'text',
      labelText: 'Banner Button Text',
      name: 'btnText',
    },
    {
      inputType: 'color',
      labelText: 'Banner Button Color',
      name: 'btnColor',
    },
    {
      inputType: 'checkbox',
      labelText: 'Banner Overlay',
      name: 'overlay',
    },
    {
      inputType: 'checkbox',
      labelText: 'Banner Overlay Dark',
      name: 'overlayDark',
    },
    {
      inputType: 'checkbox',
      labelText: 'Banner Overlay Full',
      name: 'overlayFull',
    },
    {
      inputType: 'checkbox',
      labelText: 'Show CTA Button',
      name: 'showBtn',
    },
    {
      inputType: 'radio',
      labelText: 'Banner Alignment',
      name: 'textAlign',
    },
  ],
  [
    {
      inputType: 'color',
      labelText: 'Hover Color',
      name: 'hoverColor',
    },
    {
      inputType: 'checkbox',
      labelText: 'Squared Pods',
      name: 'isSquared',
    },
    {
      inputType: 'checkbox',
      labelText: 'Open New Tab',
      name: 'openTab',
    },
  ],
  [
    {
      inputType: 'checkbox',
      labelText: 'Alternate Layout',
      name: 'altLayout',
    },
  ],
  [
    {
      inputType: 'color',
      labelText: 'Dot Color',
      name: 'dotColor',
    },
  ],
];

export const teamMembers = [
  {
    id: 0,
    image: portfolio11,
    name: 'Jack Reacher',
    jobTitle: 'Professional Hitman',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 1,
    image: portfolio12,
    name: 'David Mattias',
    jobTitle: 'General Manager',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 2,
    image: portfolio11,
    name: 'Elias Leonard',
    jobTitle: 'Head of Technology',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 3,
    image: portfolio12,
    name: 'Megan Kimberly',
    jobTitle: 'Art Director',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 4,
    image: portfolio11,
    name: 'Johnny Reb',
    jobTitle: 'Computerist',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 5,
    image: portfolio12,
    name: 'Paran John',
    jobTitle: 'Senior Developer',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 6,
    image: portfolio11,
    name: 'Elias Leonard',
    jobTitle: 'Head of Technology',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 7,
    image: portfolio12,
    name: 'Megan Kimberly',
    jobTitle: 'Art Director',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 8,
    image: portfolio11,
    name: 'David Mattias',
    jobTitle: 'General Manager',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 9,
    image: portfolio12,
    name: 'Elias Leonard',
    jobTitle: 'Head of Technology',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 10,
    image: portfolio11,
    name: 'David Mattias',
    jobTitle: 'General Manager',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
  {
    id: 11,
    image: portfolio12,
    name: 'Paran John',
    jobTitle: 'Senior Developer',
    facebook: 'https://www.facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
  },
];

export const esliderData: any = [
  {
    id: 0,
    image: pinkBuildingJpg,
    text: 'Night in New York.',
  },
  {
    id: 1,
    image: snowGhosts,
    text: 'Snow Ghosts of Schweitzer.',
  },
  {
    id: 2,
    image: greyBuilding,
    text: 'Downtown L.A.',
  },
  {
    id: 3,
    image: echoTower,
    text: 'Tower of communication.',
  },
  {
    id: 4,
    image: stripes,
    text: 'Stripes to the future.',
  },
  {
    id: 5,
    image: chairs,
    text: 'Musical Chairs.',
  },
];

export const tabsData: any = {
  columns: [
    {
      id: 0,
      img: logo,
      title: 'Free',
      subTitle: 'Try Ai Tools',
      pricing: {
        price: '$0',
        info: 'Try Ai Tools for free',
      },
      button: {
        href: 'https://elliotrichardson.com',
        text: 'Learn more',
        target: true,
      },
      specs: [
        'Chat on web',
        'desktop, and mobile',
        'Search the web',
        'create files, and run code',
        'Memory across conversations',
        'Connect your apps and tools',
        'Create Artifacts',
        'Ai Tools Design, Slides, Docs',
      ],
    },
    {
      id: 1,
      img: logo,
      title: 'Pro',
      subTitle: 'For everyday work',
      pricing: {
        price: '$20',
        info: 'Per month with annual subscription discount ($200 billed up front). $20 if billed monthly.',
      },
      button: {
        href: 'https://elliotrichardson.com',
        text: 'Learn more',
        target: true,
      },
      specs: [
        'Chat on web',
        'desktop, and mobile',
        'Search the web',
        'create files, and run code',
        'Memory across conversations',
        'Connect your apps and tools',
        'Create Artifacts',
        'Claude Design, Slides, Docs',
        'Claude Science',
        'Claude in Chrome and Microsoft 365',
        'More Ai Tools models',
      ],
    },
    {
      id: 2,
      img: logo,
      title: 'Max',
      subTitle: 'For people who work with Ai tools all day',
      pricing: {
        price: 'From $100',
        info: 'Per Month',
      },
      button: {
        href: 'https://elliotrichardson.com',
        text: 'Learn more',
        target: true,
      },
      specs: [
        'Choose 5x or 20x more usage than Pro*',
        'Chat on web',
        'desktop, and mobile',
        'Search the web',
        'create files, and run code',
        'Memory across conversations',
        '$100 to $200/month in API credits to build on the Ai Tools Platform',
      ],
    },
  ],
  profile: [
    {
      id: 0,
      img: logo,
      title: 'Rider profile',
      subTitle: 'Miles for the week',
      miles: '37 mi',
      speed: '5.6 mph',
      copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, numquam possimus esse et veniam saepe cumque neque deleniti porro laudantium! Quaerat maiores eligendi possimus velit dolor, architecto sed asperiores corporis.',
    },
    {
      id: 1,
      img: logo,
      title: 'Rider Stats',
      subTitle: 'Stats for the month',
      miles: '37 mi',
      speed: '5.6 mph',
      copy: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, numquam possimus esse et veniam saepe cumque neque deleniti porro laudantium! Quaerat maiores eligendi possimus velit dolor, architecto sed asperiores corporis.',
    },
  ],
  gear: [
    {
      id: 0,
      img: echoTower,
      title: 'Gear profile',
      subTitle: 'Gear for the week',
      specs: [
        'Chat on web',
        'desktop, and mobile',
        'Search the web',
        'create files, and run code',
      ],
    },
    {
      id: 1,
      img: stairway,
      title: 'Gear Stats',
      subTitle: 'Gear for the month',
      specs: [
        'Chat on web',
        'desktop, and mobile',
        'Search the web',
        'create files, and run code',
      ],
    },
  ],
};
