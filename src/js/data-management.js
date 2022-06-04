const defaultValue = {
  units: 'metric',
  search: 'New Delhi',
};

const images = {};

const imageData = [
  {
    description: 'clear sky day',
    icon: '01d',
    newIcon: 'sun',
    img: 'andrej-chudy-uivWDK2Ifrg-unsplash.jpg',

    credit: {
      name: 'Andrej Chudy',
      link: 'https://unsplash.com/@ach?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
  },
  {
    description: 'clear sky night',
    icon: '01n',
    newIcon: 'moon-stars',
    img: 'calwaen-liew-u4u8yUXkcyE-unsplash.jpg',
    credit: {
      name: 'Calwaen Liew',
      link: 'https://unsplash.com/@calwa3nli3w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
  },
  {
    description: 'few clouds day',
    icon: '02d',
    newIcon: 'cloud-sun',
    img: 'dallas-reedy-H83_BXx3ChY-unsplash.jpg',
    credit: {
      name: 'Dallas Reedy',
      link: 'https://unsplash.com/@dallasreedy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
  },
  {
    description: 'few clouds night',
    icon: '02n',
    newIcon: 'cloud-moon',
    img: 'billy-huynh-cycMgDyN5ko-unsplash.jpg',
    credit: {
      name: 'Billy Huynh',
      link: 'https://unsplash.com/@billy_huy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    },
  },
  {
    description: 'scattered clouds day',
    icon: '03d',
    newIcon: 'cloud',
    img: 'anna-spencer-dovgTnlZXYc-unsplash.jpg',
    credit:{
      name: 'Anna Spencer',
      link: 'https://unsplash.com/@annaspencer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'scattered clouds night',
    icon: '03n',
    newIcon: 'cloud',
    img: 'kt-IE1A8LhiUiw-unsplash.jpg',
    credit: {
      name: 'KT',
      link: 'https://unsplash.com/@ktphotographyx?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'broken clouds day',
    icon: '04d',
    newIcon: 'clouds',
    img: 'nathan-anderson-f19Pxh_96CA-unsplash.jpg',
    credit: {
      name: 'Nathan Anderson',
      link: 'https://unsplash.com/@nathananderson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',

    }
  },
  {
    description: 'broken clouds night',
    icon: '04n',
    newIcon: 'clouds',
    img: 'anandu-vinod-pbxwxwfI0B4-unsplash.jpg',
    credit:{
      name: 'Anandu Vinod',
      link: 'https://unsplash.com/@anandu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'shower rain day',
    icon: '09d',
    newIcon: 'cloud-rain-heavy',
    img: 'guillaume-bourdages-m8q2I_jPYzI-unsplash.jpg',
    credit: {
      name: 'Guillaume Bourdages',
      link: 'https://unsplash.com/@graphem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'shower rain night',
    icon: '09n',
    newIcon: 'cloud-rain-heavy',
    img: 'pan-xiaozhen-OKlo0r3gBcQ-unsplash.jpg',
    credit:{
      name: 'Pan Xiaozhen',
      link: 'https://unsplash.com/es/@zhenhappy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'rain day',
    icon: '10d',
    newIcon: 'cloud-rain',
    img: 'max-22x7fxFpl_8-unsplash.jpg',
    credit: {
      name: 'Max',
      link: 'https://unsplash.com/@notquitemax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'rain night',
    icon: '10n',
    newIcon: 'cloud-rain',
    img: 'reza-shayestehpour-Nw_D8v79PM4-unsplash.jpg',
    credit: {
      name: 'Reza Shayestehpour',
      link: 'https://unsplash.com/@r_shayesrehpour?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'thunderstorm day',
    icon: '11d',
    newIcon: 'cloud-lightning-rain',
    img: 'basil-smith-KmsDi5XH__0-unsplash.jpg',
    credit: {
      name: 'Basil Smith',
      link: 'https://unsplash.com/@basilsmith?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'thunderstorm night',
    icon: '11n',
    newIcon: 'cloud-lightning-rain',
    img: 'cooper-baumgartner-1N8iqSsn7ls-unsplash.jpg',
    credit: {
      name: 'Cooper Baumgartner',
      link: 'https://unsplash.com/@cooper_baumgartner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'snow day',
    icon: '13d',
    newIcon: 'snow',
    img: 'aaron-burden-5AiWn2U10cw-unsplash.jpg',
    credit: {
      name: 'Aaron Burden',
      link: 'https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'snow night',
    icon: '13n',
    newIcon: 'snow',
    img: 'peter-burdon-xhWcmyiq310-unsplash.jpg',
    credit: {
      name: 'Peter Burdon',
      link: 'https://unsplash.com/@peterburdon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'mist day',
    icon: '50d',
    newIcon: 'cloud-haze2',
    img: 'james-kovin-zoGUbt1OA-0-unsplash.jpg',
    credit: {
      name: 'James Kovin',
      link: 'https://unsplash.com/@james2k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
  {
    description: 'mist night',
    icon: '50n',
    newIcon: 'cloud-haze2',
    img: 'kyle-hanson-hdBxGKHKACo-unsplash.jpg',
    credit: {
      name: 'Kyle Hanson',
      link: 'https://unsplash.com/@kyledarrenhanson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    }
  },
];

(() => {
  const r = require.context('../assets/', false, /\.(png|jpe?g|svg|gif)$/);
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
})();


export { defaultValue, images, imageData };
