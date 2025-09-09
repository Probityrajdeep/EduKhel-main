 import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to EduKhel Learning Arena 🏟️",
      "download_pdf": "Loot the PDF 📄",
      "badge": "Badge",
      "maths_real_life": "Maths in Real Life",
      "maths_puzzle": "Maths Puzzle",
      "time_speed_distance": "Time-Speed-Distance Tricks",
      "speed_challenge": "Speed Challenge",
      "olympiad_math": "Olympiad Mathematics Challenges",
      "olympiad_quiz": "Olympiad Quiz",
      "home_title": "EduKhel",
      "home_subtitle": "Where Education meets Gaming 🎮✨",
      "start_learning": "Start Learning 📘",
      "play_now": "Play Now 🎮",
      "search_placeholder": "Search games, courses, topics...",
      "gamified_learning": "Level up your learning! 🚀",
      "what_is_gamified": "What is Gamified Learning?",
      "advantages": "Power-Ups",
      "uses": "Use Cases",
      "effectiveness": "Why it Works",
      "feedback_title": "Player Shoutouts!",
      "share_feedback": "Drop Your Review!",
      "learn_smarter": "Learn Smarter",
      "play_harder": "Play Harder",
      "compete_win": "Compete & Win"
    }
  },
  hi: {
    translation: {
      "welcome": "एडूखेल लर्निंग एरेना में आपका स्वागत है 🏟️",
      "download_pdf": "पीडीएफ हासिल करें 📄",
      "badge": "बैज",
      "maths_real_life": "असली जीवन में गणित",
      "maths_puzzle": "गणित पहेली",
      "time_speed_distance": "समय-गति-दूरी ट्रिक्स",
      "speed_challenge": "गति चुनौती",
      "olympiad_math": "ओलिम्पियाड गणित चुनौतियाँ",
      "olympiad_quiz": "ओलिम्पियाड क्विज़",
      "home_title": "एडूखेल",
      "home_subtitle": "जहाँ शिक्षा गेमिंग से मिलती है 🎮✨",
      "start_learning": "सीखना शुरू करें 📘",
      "play_now": "अभी खेलें 🎮",
      "search_placeholder": "गेम, कोर्स, विषय खोजें...",
      "gamified_learning": "सीखते-सीखते लेवल अप! 🚀",
      "what_is_gamified": "गेमीफाइड लर्निंग क्या है?",
      "advantages": "पावर-अप्स",
      "uses": "उपयोग",
      "effectiveness": "क्यों कारगर",
      "feedback_title": "प्लेयर रिव्यू!",
      "share_feedback": "अपना रिव्यू लिखें!",
      "learn_smarter": "स्मार्ट सीखें",
      "play_harder": "और खेलें",
      "compete_win": "प्रतिस्पर्धा करें और जीतें"
    }
  },
  od: {
    translation: {
      "welcome": "ଏଡୁଖେଲ୍ ଲର୍ଣ୍ଣିଂ ଆରେନାକୁ ସ୍ବାଗତ 🏟️",
      "download_pdf": "ପିଡିଏଫ୍ ନିଆନ୍ତୁ 📄",
      "badge": "ବ୍ୟାଜ୍",
      "maths_real_life": "ଏବଂ ଜୀବନରେ ଗଣିତ",
      "maths_puzzle": "ଗଣିତ ପଜଲ୍",
      "time_speed_distance": "ସମୟ-ଗତି-ଦୂରତା ଟ୍ରିକ୍ସ",
      "speed_challenge": "ଗତି ଚ୍ୟାଲେଞ୍ଜ",
      "olympiad_math": "ଓଲିମ୍ପିଆଡ୍ ଗଣିତ ଚ୍ୟାଲେଞ୍ଜସ୍",
      "olympiad_quiz": "ଓଲିମ୍ପିଆଡ୍ କୁଇଜ୍",
      "home_title": "ଏଡୁଖେଲ୍",
      "home_subtitle": "ଯେଉଁଠାରେ ଶିକ୍ଷା ଗେମିଂ ସହିତ ମିଳିଥାଏ 🎮✨",
      "start_learning": "ଶିଖିବା ଆରମ୍ଭ କରନ୍ତୁ 📘",
      "play_now": "ଏବେ ଖେଳନ୍ତୁ 🎮",
      "search_placeholder": "ଗେମ, କୋର୍ସ, ବିଷୟ ଖୋଜନ୍ତୁ...",
      "gamified_learning": "ଶିଖି-ଶିଖି ଲେଭେଲ୍ ଅପ୍! 🚀",
      "what_is_gamified": "ଗେମିଫାଇଡ୍ ଲର୍ଣ୍ଣିଂ କ'ଣ?",
      "advantages": "ପାୱର୍-ଅପ୍ସ",
      "uses": "ବ୍ୟବହାର",
      "effectiveness": "କାହିଁକି କାମକରେ",
      "feedback_title": "ପ୍ଲେୟର୍ ମତାମତ!",
      "share_feedback": "ଆପଣଙ୍କ ମତ ଦିଅନ୍ତୁ!",
      "learn_smarter": "ସ୍ମାର୍ଟ ଶିଖନ୍ତୁ",
      "play_harder": "ଅଧିକ ଖେଳନ୍ତୁ",
      "compete_win": "ପ୍ରତିଯୋଗିତା କରନ୍ତୁ ଏବଂ ଜିତନ୍ତୁ"
    }
  }
};

const savedLng = typeof window !== 'undefined' ? localStorage.getItem('edukhel_lng') : null;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLng || 'en',
    interpolation: { escapeValue: false }
  });

// persist on change
// eslint-disable-next-line no-unused-vars
i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem('edukhel_lng', lng);
  } catch {}
});

export default i18n;
