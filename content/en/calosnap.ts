/**
 * CaloSnap 영문 페이지(/en/calosnap/)의 문구 — app/en/calosnap/page.tsx 가 그린다.
 *
 * 문구의 원본은 Google Play 영문 등록정보(app-calosnap/docs/listing/en-US.txt)다.
 * 등록정보에 없는 기능·숫자·가격은 여기에 적지 않는다. 등록정보가 바뀌면 이 파일도 함께 고칠 것.
 *
 *  - 요금제에 가격이 없는 이유: 영문 등록정보에 달러 가격이 없다. 원화를 환산해 넣지 않고
 *    분석 횟수와 기능만 적는다.
 *  - 건강 결과를 약속하는 표현(감량 등)은 쓰지 않는다. 칼로리 값이 "AI 추정치"이고 의료 조언이
 *    아니라는 고지(disclaimer)는 빼지 않는다.
 *  - 스크린샷은 app-calosnap/docs/store-assets/en/1~4.png (1080×1920 홍보 스크린샷)을
 *    720×1280 webp 로 줄인 것, og.png 는 같은 폴더의 feature.png(1024×500) 그대로다.
 */
export const calosnapEn = {
  /** content/apps.ts 의 slug — 아이콘·Play 주소·법적 문서는 그쪽 항목에서 가져온다 */
  slug: "calosnap",
  /** 이 페이지의 주소. content/apps.ts 의 enPath 가 이 값을 읽는다 */
  path: "/en/calosnap/",

  // <title>·og:title — 등록정보의 title 에 "from a Photo" 를 붙였다. 영어로 이 앱을 찾는 말이
  // "AI calorie counter" 와 "calorie counter from photo" 둘이라 제목에 둘 다 둔다.
  // 사이트 이름이 뒤에 붙어도 60자를 넘지 않게 43자 안쪽으로.
  title: "CaloSnap: AI Calorie Counter from a Photo",
  tagline: "AI Calorie Counter",
  /** 히어로에 보이는 한 줄 — 등록정보의 short 그대로 */
  short:
    "Snap a meal, AI logs calories & protein. Your food diary and macro tracker.",
  /**
   * 검색 결과에 나오는 설명(meta description·og:description). 구글은 155자쯤에서 자르므로 그 안쪽.
   * 국문 페이지는 네이버 권장(80자)에 맞추지만 영문 페이지는 구글이 기준이다.
   */
  metaDescription:
    "AI calorie counter for Android. Snap a photo of your meal and get calories, carbs, protein and fat in seconds. Especially good with Korean and Asian food.",
  keywords: [
    "CaloSnap",
    "AI calorie counter",
    "photo calorie counter",
    "calorie counter from photo",
    "calorie tracker",
    "food diary",
    "macro tracker",
    "Korean food calories",
    "Kyungin LeeLab",
  ],

  playLabel: "Get it on Google Play",
  platformNote: "Android only. Available on Google Play.",

  intro:
    "CaloSnap is an AI calorie counter that logs a meal from a single photo. Snap your plate and AI identifies each food, estimates calories, carbs, protein and fat in seconds, and saves it all to your food diary. No searching databases, no typing every ingredient.",

  iconAlt: "CaloSnap app icon",

  /** public/apps/calosnap/ 기준 파일 경로 */
  screens: [
    {
      file: "en/screen-1.webp",
      alt: "CaloSnap AI analysis of a bibimbap photo: 600 kcal with 85 g carbs, 23 g protein and 18 g fat. Caption: Just snap your meal.",
    },
    {
      file: "en/screen-2.webp",
      alt: "CaloSnap home screen: a ring showing 466 calories left of a 1,446 kcal goal, with carbs, protein and fat bars. Caption: Your day at a glance.",
    },
    {
      file: "en/screen-3.webp",
      alt: "CaloSnap calendar for November 2026 with a ring on each day showing intake against the goal. Caption: Every day on one calendar.",
    },
    {
      file: "en/screen-4.webp",
      alt: "CaloSnap AI Insight for bibimbap: the story of the dish, how to enjoy it, and the minutes of walking, cycling or running to burn it. Caption: Get to know every dish.",
    },
  ],
  ogImage: {
    file: "en/og.png",
    alt: "CaloSnap: calories from a single photo. A phone shows the AI result for a bibimbap photo, 600 kcal.",
  },

  features: [
    {
      emoji: "📸",
      title: "Photo calorie counter",
      body: "Take a photo or pick one from your gallery, and AI recognizes each dish on the plate. You get calories and macros for every item, with an estimated portion in grams. Adjust the grams and every number recalculates instantly. Packaged snack or drink? Keep the label readable in the frame and AI reads the product name. Not recognized? Search by food name or add it manually.",
    },
    {
      emoji: "🍜",
      title: "From everyday meals to Korean and Asian dishes",
      body: "Salads, sandwiches, burgers, pasta, curry, ramen, sushi, or Korean dishes like bibimbap and tteokbokki: AI names a dish the way a menu would, not as a pile of ingredients. It is especially good with Korean and other Asian food.",
    },
    {
      emoji: "🎯",
      title: "A calorie goal that fits you",
      body: "Pick a goal and CaloSnap works out your BMR and TDEE from your sex, age, height, weight and activity to set daily calorie and macro targets. The home ring shows calories left (or eaten) plus carbs, protein and fat at a glance. Prefer your own number? Set a custom calorie goal with Premium. Metric or imperial units (kg·cm or lb·ft).",
    },
    {
      emoji: "📅",
      title: "Your food diary and calorie tracker",
      body: "Calendar view: every day shows your intake against your goal. Calorie trend charts for the last 7, 30 or 90 days, with daily average and goal adherence. Meal reminders and a weekly report every Sunday. Dark mode, and the app is available in 8 languages: English, Español, Português, Deutsch, Français, 日本語, हिन्दी, 한국어.",
    },
    {
      emoji: "🔒",
      title: "Private by design",
      body: "Your meal log, stats, profile and photos stay on your phone. A photo is encrypted and sent only at the moment of analysis, and it is never stored on our server. Your account holds only your sign-in email, subscription and analysis count. Sign in with Google and your subscription and remaining trial follow you to a new phone or a reinstall. Meal records stay on the device, and Premium can export them as CSV.",
    },
  ],

  disclaimer:
    "Calorie and nutrition values are AI estimates for everyday tracking, not medical advice.",

  pricing: {
    heading: "Free, Lite and Premium",
    sub: "It's free to start. Snap your lunch today.",
    recommended: "Recommended",
    /** headline 은 국문 페이지에서 가격이 놓이는 자리 — 여기서는 월 분석 횟수를 둔다 */
    plans: [
      {
        name: "Free",
        headline: "Up to 10 AI analyses a month",
        detail:
          "3-day free trial: every Premium feature, 3 AI analyses a day. After the trial, the free analyses come from a shared monthly free allowance. Manual entry, your food diary, calendar and trends stay free.",
        highlight: false,
      },
      {
        name: "Lite",
        headline: "200 AI analyses a month",
        detail: "Plus detailed nutrition: sugar, fiber and sodium.",
        highlight: false,
      },
      {
        name: "Premium",
        headline: "300 AI analyses a month",
        detail:
          "Everything in Lite, with analyses on a higher-tier AI model. Up to 20 precise re-analyses a month, AI meal insight (the story of the dish, how to enjoy it, what it pairs well with, and how many minutes of walking, cycling or running it takes to burn it off), a custom calorie goal and CSV export.",
        highlight: true,
      },
    ],
    note: "Lite and Premium are monthly or yearly subscriptions billed to your Google Play account. They renew automatically until you cancel, and you can cancel anytime in Google Play › Payments & subscriptions.",
  },

  /**
   * 자주 묻는 질문 — 화면에 그대로 보이고 FAQPage 구조화 데이터로도 나간다.
   * 사람들이 검색창에 치는 말("calorie counter from photo", "is it free", "iPhone")을 질문으로 삼았다.
   * 답은 전부 이 파일의 다른 문구(= 영문 등록정보)에 이미 있는 사실만 다시 적은 것이다.
   * 새 사실을 여기에만 적지 말 것.
   */
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "How does CaloSnap count calories from a photo?",
        a: "Take a photo of your meal or pick one from your gallery. AI recognizes each dish on the plate and estimates calories, carbs, protein and fat, with a portion in grams. Change the grams and every number recalculates.",
      },
      {
        q: "Is CaloSnap free?",
        a: "It's free to start. A 3-day free trial includes every Premium feature and 3 AI analyses a day. After the trial you get up to 10 AI analyses a month from a shared monthly free allowance, and manual entry, your food diary, calendar and trends stay free. Lite and Premium are optional subscriptions.",
      },
      {
        q: "Does it recognize Korean and Asian food?",
        a: "Yes. CaloSnap names a dish the way a menu would, such as bibimbap, tteokbokki, ramen, sushi or curry, not as a pile of ingredients. It is especially good with Korean and other Asian food, and it handles everyday meals like salads, sandwiches, burgers and pasta too.",
      },
      {
        q: "How accurate is an AI calorie counter?",
        a: "Calorie and nutrition values are AI estimates for everyday tracking, not medical advice. The portion is estimated from the photo, so you can adjust the grams, and if a food isn't recognized you can search by name or add it manually.",
      },
      {
        q: "Is CaloSnap available on iPhone?",
        a: "CaloSnap is available on Android only, through Google Play.",
      },
      {
        q: "What happens to my meal photos?",
        a: "Your meal log, stats, profile and photos stay on your phone. A photo is encrypted and sent only at the moment of analysis, and it is never stored on our server.",
      },
      {
        q: "Which languages does CaloSnap support?",
        a: "The app is available in 8 languages: English, Español, Português, Deutsch, Français, 日本語, हिन्दी and 한국어.",
      },
    ],
  },

  /** 법적 문서는 국문만 있다 — 번역하지 않고 국문 문서로 잇고 (Korean) 이라고 밝힌다 */
  legal: {
    privacy: "Privacy Policy (Korean)",
    deleteAccount: "Delete your account (Korean)",
    terms: "Terms of Service (Korean)",
  },
  koreanPageLabel: "한국어",
};
