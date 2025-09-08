import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to EduKhel Learning Hub",
      "download_pdf": "Download PDF 📄",
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
      "gamified_learning": "The Future of Learning is Here!",
      "what_is_gamified": "What is Gamified Learning?",
      "advantages": "Advantages",
      "uses": "Uses",
      "effectiveness": "Effectiveness",
      "feedback_title": "What Our Learners Say!",
      "share_feedback": "Share Your Experience!",
      "learn_smarter": "Learn Smarter",
      "play_harder": "Play Harder",
      "compete_win": "Compete & Win"
    }
  },
  hi: {
    translation: {
      "welcome": "एडूखेल लर्निंग हब में आपका स्वागत है",
      "download_pdf": "पीडीएफ डाउनलोड करें 📄",
      "badge": "बैज",
      "maths_real_life": "असली जीवन में गणित",
      "maths_puzzle": "गणित पहेली",
      "time_speed_distance": "समय-गति-दूरी ट्रिक्स",
      "speed_challenge": "गति चुनौती",
      "olympiad_math": "ओलंपियाड गणित चुनौतियाँ",
      "olympiad_quiz": "ओलंपियाड क्विज़",
      "home_title": "एडूखेल",
      "home_subtitle": "जहाँ शिक्षा गेमिंग से मिलती है 🎮✨",
      "start_learning": "सीखना शुरू करें 📘",
      "play_now": "अभी खेलें 🎮",
      "search_placeholder": "गेम, कोर्स, विषय खोजें...",
      "gamified_learning": "सीखने का भविष्य यहाँ है!",
      "what_is_gamified": "गेमीफाइड लर्निंग क्या है?",
      "advantages": "फायदे",
      "uses": "उपयोग",
      "effectiveness": "प्रभावशीलता",
      "feedback_title": "हमारे छात्र क्या कहते हैं!",
      "share_feedback": "अपना अनुभव साझा करें!",
      "learn_smarter": "स्मार्ट सीखें",
      "play_harder": "कठिन खेलें",
      "compete_win": "प्रतिस्पर्धा करें और जीतें"
    }
  },
  od: {
    translation: {
      "welcome": "ଏଡୁଖେଲ୍ ଲର୍ଣ୍ଣିଂ ହବ୍ ରେ ଆପଣଙ୍କୁ ସ୍ବାଗତ",
      "download_pdf": "ପିଡିଏଫ୍ ଡାଉନଲୋଡ୍ କରନ୍ତୁ 📄",
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
      "gamified_learning": "ଶିକ୍ଷାର ଭବିଷ୍ୟତ ଏଠାରେ!",
      "what_is_gamified": "ଗେମିଫାଇଡ୍ ଲର୍ଣ୍ଣିଂ କ'ଣ?",
      "advantages": "ସୁବିଧା",
      "uses": "ବ୍ୟବହାର",
      "effectiveness": "ପ୍ରଭାବଶୀଳତା",
      "feedback_title": "ଆମର ଛାତ୍ରମାନେ କ'ଣ କହନ୍ତି!",
      "share_feedback": "ଆପଣଙ୍କର ଅନୁଭବ ଅଂଶୀଦାର କରନ୍ତୁ!",
      "learn_smarter": "ସ୍ମାର୍ଟ ଶିଖନ୍ତୁ",
      "play_harder": "କଠିନ ଖେଳନ୍ତୁ",
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
i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem('edukhel_lng', lng);
  } catch {}
});

export default i18n;
