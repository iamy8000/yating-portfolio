/**
 * Translation keys and English / 繁體中文 content.
 * Use t('nav.home'), t('hero.rotator.0'), etc.
 */
export type Locale = 'en' | 'zh-TW'

export const translations = {
  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      resume: 'Resume',
      subtitle: 'Full-Stack Engineer',
      settings: { light: 'Light mode', dark: 'Dark mode' },
      aria: { openMenu: 'Open menu', closeMenu: 'Close menu', toggleTheme: 'Toggle theme', settings: 'Settings' },
    },
    hero: {
      rotator: [
        'a full-stack engineer.',
        'loves running in Central Park,',
        'especially those hills. iykyk.',
        'walks fast. always.',
        'stops for dogs 🐶 ',
        'three lattes a day,',
        'usually at a café.',
        'prefers trains over cars,',
        'but still loves road trips.',
        'has lists for everything.',
        'recently made one called:',
        '"maybe I will finally go on long hikes?"',
        'owns too many tote bags,',
        'and far too many mugs.',
        'carries kindle everywhere,',
        'hoping to finish a book',
        'on the subway this month 📙',
      ],
      subtitle: 'Previously a Founding Full-Stack Engineer at',
      subtitleConnNext: 'ConnNext',
      subtitleBased: 'Based in NYC.',
      learnMore: 'About Me :)',
      viewProjects: 'View Projects',
    },
    about: {
      label: 'About Me',
      heading: 'Built with care,',
      headingEm: 'pixel by pixel.',
      yearsEng: 'Years Eng',
      projects: 'Projects',
      learnMore: 'Read my story',
      engineer: {
        title: 'Engineer Amy',
        body: "I'm a full-stack engineer with 4+ years of shipping TypeScript, React, React Native, and NestJS. Most recently, I was a founding engineer at ConnNext, where I took a React Native app to the App Store in four months, and a full-stack engineer at ITRI, building an AI virtual patient used by dental students at Kaohsiung Medical University and Chung Shan Medical University. Before engineering, I worked in advertising at Ogilvy on campaigns for Nike and Google Play. That mix has made me comfortable translating between technical systems and the people using them, thinking about both how a system works and how to make it clear and useful.",
      },
      person: {
        title: 'Just Amy',
        body: "I grew up in Taiwan, went to grad school in Maryland, and now live in New York. On weekends you'll find me running in Central Park, hiking, or camping, and I travel whenever I can. I write about it on Medium and keep lists of places I haven't been yet. To me, the world is one big bucket list, and there's always something worth seeing, tasting, or trying next.",
      },
      linkedin: 'LinkedIn',
      email: 'yang.yy.yating@gmail.com',
    },
    projects: {
      sectionLabel: 'Selected Projects',
      bgWord: 'Selected Projects',
      backToProjects: 'Back to Projects',
      notFound: 'Project not found',
      role: 'Role',
      teamSize: 'Team Size',
      organization: 'Organization',
      details: 'Details',
      overview: 'Overview',
      whatIDid: 'What I Did',
      techStack: 'Tech Stack',
      viewOnGithub: 'View on GitHub',
      demoMockups: 'Demo & Mockups',
      screenshotsComing: 'Screenshots / demo coming soon',
      list: {
        'dog-adoption': {
          title: 'Dog Adoption Web App',
          description: 'A responsive dog adoption website that allows users to browse dogs, filter by breed and location, and save favorites.',
          role: 'Frontend Developer',
          teamOrg: 'Personal / Academic',
          details: 'Implemented pagination, search, and location APIs. Built responsive UI components with Next.js and deployed on Vercel.',
        },
        'ar-productivity': {
          title: 'Unity-Based AR Productivity Mobile App',
          description: 'A to-do list brought into augmented reality, with 3D characters that live in your space.',
          role: 'Developer',
          teamOrg: 'Academic Team',
          details: 'Designed interactive 3D character behaviors and integrated AR overlays for real-world task management.',
        },
        'career-services-db': {
          title: 'Career Services BI Database',
          description: 'Designed and built a relational database from the ground up for the Office of Career Services, transitioning from Excel to MySQL.',
          role: 'Database Designer',
          teamOrg: 'University of Maryland',
          details: 'Created ER diagrams, normalized schemas to 3NF, wrote complex queries for reporting, and migrated legacy Excel data.',
        },
        'umd-marketplace': {
          title: 'UMD Virtual Marketplace Web App',
          description: 'A responsive web application for UMD students to buy and sell furniture, improving student life through peer-to-peer commerce.',
          role: 'Full-Stack Developer',
          teamOrg: 'Academic Team',
          details: 'Built the React frontend and Flask API backend. Designed the MySQL schema and implemented RESTful endpoints for CRUD operations.',
        },
        'aws-healthcare': {
          title: 'AWS Healthcare Infrastructure Design',
          description: 'Designed a secure, HIPAA-compliant infrastructure for healthcare systems using AWS, with a focus on zero-trust principles.',
          role: 'Cloud Architect',
          teamOrg: 'Academic Team',
          details: 'Architected VPC peering, IAM policies, WAF rules, and RDS configurations following HIPAA security guidelines.',
        },
        'nutrition-tracker': {
          title: 'AI-Powered Nutrition Tracker',
          description: 'An Android app to track dietary intake with ML capabilities, enabling users to identify food and calculate nutrition.',
          role: 'Android Developer',
          teamOrg: 'Academic Team',
          details: 'Integrated Firebase ML Kit for food recognition, built the tracking UI in Kotlin, and connected Google Cloud for data storage.',
        },
      },
    },
    contact: {
      heading: 'Want to work',
      headingEm: 'together?',
      email: 'yang.yy.yating@gmail.com',
    },
    footer: {
      rights: '© 2026 · All rights reserved.',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    aboutPage: {
      scrollToExperience: 'Scroll to Work Experience',
      scrollToOutside: 'Scroll to Outside of Work',
      workExperience: 'Work experience',
      outsideOfWork: 'Outside of work',
    },
    me: {
      label: 'About Me',
      engineer: {
        title: 'Engineer Amy',
        link: 'See my work experience',
        paras: [
          "I'm a full-stack engineer in New York with 4+ years of experience across startups and growth-stage teams, working mostly in TypeScript, React, React Native, and NestJS. I like owning features end to end, from the interface people see to the API behind it.",
          "Most recently, I was a founding engineer at ConnNext, where I shipped a React Native app to the App Store in four months, and a full-stack engineer at ITRI, where I built an AI virtual-patient platform used by dental students at Kaohsiung Medical University and Chung Shan Medical University. Before that, I built AI-powered dashboards and planning tools at Tymeline, and Taiwan's first NFT marketplace at Tagnology.",
          "My background started outside traditional computer science. I studied advertising and spent two years at Ogilvy in Taipei on campaigns for Nike and Google Play, then moved into software engineering through a bootcamp and later a master's in Information Management at the University of Maryland. Since then, I've worked across frontend, backend, mobile, blockchain, and AI-powered products. That mix has made me comfortable translating between technical systems and the people actually using them. I tend to think about both how a system works internally and how to turn that complexity into something clear and useful for users.",
        ],
      },
      person: {
        title: 'Just Amy',
        link: 'See what I do outside of work',
        paras: [
          "I grew up in Taiwan, moved to Maryland for grad school, and now live in New York. I started running after moving here, along the waterfront, across the bridges, and in Central Park. Right now I'm working through NYRR's 9+1 to qualify for the 2027 NYC Marathon, and training for the Copenhagen Marathon in May 2027.",
          "When I'm not running, I'm usually hiking, camping, or planning the next trip. I write about my travels on Medium and keep lists for everything: cafés to try, trails to hike, and places I haven't been yet.",
        ],
      },
    },
    experience: {
      label: 'Work Experience',
      education: 'Education',
      viewResume: 'View Full Resume',
      aria: { companyLink: 'Company link' },
      items: [
        { period: 'Jan 2026 – Jul 2026', title: 'Founding Engineer', company: 'ConnNext', description: 'Owned frontend development end to end for a pre-seed AI-powered social networking app as the sole frontend engineer, shipping the React Native / Expo app to the Apple App Store within 4 months.', tags: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'TanStack Query'] },
        { period: 'Feb 2026 – Jun 2026', title: 'Full-Stack Engineer', company: 'ITRI', description: 'Owned full-stack development for an AI virtual-patient OSCE platform integrating Azure OpenAI, used by dental students at Kaohsiung Medical University and Chung Shan Medical University.', tags: ['React', 'TypeScript', 'NestJS', 'TypeORM', 'Azure OpenAI'] },
        { period: 'Aug 2024 – Jul 2025', title: 'Frontend Developer', company: 'Tymeline', description: 'Built core UI components and data-driven dashboards for an AI-powered performance platform, improving development efficiency and enabling large-scale data visualization.', tags: ['React', 'JavaScript', 'Redux', 'TypeScript', 'Playwright', 'AWS'] },
        // { period: 'Jul 2024 – Jul 2025', title: 'Software Engineer', company: 'IpserLab', description: 'Developed and launched a real-time WebRTC video platform, leading UI/UX redesign and improving accessibility, interaction, and performance.', tags: ['React', 'JavaScript', 'WebRTC'] },
        // { period: 'Sep 2023 – May 2024', title: 'Teaching Assistant, Python Programming', company: 'University of Maryland', description: 'Led Python lab sessions and supported student projects, helping simplify technical concepts and improve hands-on coding skills.', tags: ['Python'] },
        { period: 'Aug 2021 – Feb 2023', title: 'Frontend Engineer', company: 'Tagnology', description: 'Built and shipped frontend features across 6 products, including a Web3 NFT marketplace and chatbot automation tools, improving performance and scalability.', tags: ['React', 'JavaScript', 'Next.js', 'Web3', 'HTML', 'CSS'] },
        { period: 'Dec 2017 – Jun 2019', title: 'Account Executive', company: 'Ogilvy', description: 'Delivered digital and social campaigns for global brands like Nike and Google Play, working across clients, creators, and engineers to bring ideas to life.', tags: ['Campaign Execution', 'Cross-team Delivery', 'Brand Strategy', 'Project Management'] },
      ],
      educationItems: [
        { period: 'Sep 2022 – May 2024', title: 'Master of Information Management', school: 'University of Maryland, College Park', detail: 'Coursework: Web Development, Database Design (SQL/NoSQL), Cloud Security, NLP' },
        { period: 'Sep 2013 – Jun 2017', title: 'Bachelor of Arts in Advertising and Public Relations', school: 'Fu Jen Catholic University' },
      ],
    },
    outside: {
      label: 'Outside of Work',
      bgWord: 'Outside of Work',
      running: { title: 'Running', desc: "I love running. Currently doing NYRR's 9+1 for the 2027 NYC Marathon and training for Copenhagen in May 2027. Check out my {{STRAVA}} — and I'll kudo back!" },
      writing: { title: 'Writing', desc: 'I write on {{MEDIUM}} — travel, life reflections, and some random thoughts.' },
      cornerMaps: { title: 'Corner Maps', desc: "I curate lists for drinks, food, and laptop-friendly cafes on {{CORNER}} — my fav app in 2025 & 2026!" },
      hiking: { title: 'Hiking & Camping', desc: 'Nothing beats a weekend with no signal and a tent. Slowly working through my AllTrails lists: {{HIKE_LONG}}, {{HIKE_VIEW}}, and {{HIKE_TRAVEL}}.' },
      travel: { title: 'Travel', desc: 'The world is one big bucket list. I write about the trips that stayed with me on {{MEDIUM}}.' },
      // TODO: replace with a sixth thing you love
      placeholder: { title: 'Coming soon', desc: 'More to share here soon.' },
    },
  },
  'zh-TW': {
    nav: {
      projects: '精選專案',
      about: '關於我',
      resume: '履歷',
      subtitle: '全端工程師',
      settings: { light: '淺色模式', dark: '深色模式' },
      aria: { openMenu: '開啟選單', closeMenu: '關閉選單', toggleTheme: '切換主題', settings: '設定' },
    },
    hero: {
      rotator: [
        '全端工程師。',
        '喜歡在中央公園跑步，',
        '尤其是那些上坡🫠',
        '走路很快，',
        '但會為狗狗停下來🐶',
        '一天三杯咖啡，',
        '也天天泡咖啡廳。',
        '什麼都有清單，',
        '最近創了一個叫：',
        '也許今年會開始爬山？',
        '有太多托特包，',
        '也有太多馬克杯。',
        '隨身攜帶 Kindle，',
        '希望這個月可以，',
        '在地鐵上讀完一本書📙',
      ],
      subtitle: '全端工程師 @',
      // subtitleConnNext: '',
      subtitleBased: '｜現居紐約',
      learnMore: '更多關於我 :)',
      viewProjects: '看專案',
    },
    about: {
      label: '關於我',
      heading: '用心構築，',
      headingEm: '逐像素打磨。',
      yearsEng: '年經驗',
      projects: '專案',
      learnMore: '閱讀我的故事',
      engineer: {
        title: '工程師 Amy',
        body: '我是一位全端工程師，擁有 4 年以上使用 TypeScript、React、React Native 與 NestJS 開發產品的經驗。最近在 ConnNext 擔任創始工程師，四個月內將 React Native app 上架 App Store；也在工研院擔任全端工程師，打造 AI 虛擬病人平台，已在高雄醫學大學與中山醫學大學的牙醫系使用。成為工程師之前，我在奧美廣告參與 Nike 與 Google Play 的專案。這樣的經歷讓我很習慣在技術系統和使用者之間做翻譯：同時思考系統如何運作，以及如何讓它清楚、好用。',
      },
      person: {
        title: '就是 Amy',
        body: '我在台灣長大，到馬里蘭念研究所，現在住在紐約。我會在中央公園跑步、有機會就去旅行、在 Medium 上寫文章，也持續更新一份還沒去過的地方清單。',
      },
      linkedin: 'LinkedIn',
      email: 'yang.yy.yating@gmail.com',
    },
    projects: {
      sectionLabel: '精選專案',
      bgWord: '精選專案',
      backToProjects: '回專案列表',
      notFound: '找不到專案',
      role: '角色',
      teamSize: '團隊規模',
      organization: '所屬單位',
      details: '詳細說明',
      overview: '專案概述',
      whatIDid: '我的工作',
      techStack: '技術棧',
      viewOnGithub: '在 GitHub 查看',
      demoMockups: '展示與 Mockup',
      screenshotsComing: '截圖 / 展示即將上線',
      list: {
        'dog-adoption': {
          title: '狗狗領養網站',
          description: '響應式狗狗領養網站，可瀏覽、依品種與地區篩選、收藏喜愛的狗狗。',
          role: '前端開發',
          teamOrg: '個人 / 學術',
          details: '實作分頁、搜尋與地點 API，以 Next.js 建置響應式 UI，部署於 Vercel。',
        },
        'ar-productivity': {
          title: 'Unity AR 生產力 App',
          description: '把待辦清單帶進擴增實境，讓 3D 角色出現在你身邊。',
          role: '開發者',
          teamOrg: '學術團隊',
          details: '設計 3D 角色互動行為，整合 AR 疊加於實境任務管理。',
        },
        'career-services-db': {
          title: '職涯服務 BI 資料庫',
          description: '為職涯服務處從零設計關聯式資料庫，從 Excel 遷移至 MySQL。',
          role: '資料庫設計',
          teamOrg: '馬里蘭大學',
          details: '建立 ER 圖、正規化至 3NF、撰寫報表查詢、遷移舊有 Excel 資料。',
        },
        'umd-marketplace': {
          title: 'UMD 虛擬市集',
          description: '供 UMD 學生買賣家具的響應式網站，以 P2P 交易改善校園生活。',
          role: '全端開發',
          teamOrg: '學術團隊',
          details: '建置 React 前端與 Flask API、設計 MySQL schema、實作 RESTful CRUD。',
        },
        'aws-healthcare': {
          title: 'AWS 醫療基礎架構設計',
          description: '以 AWS 設計符合 HIPAA 的醫療系統基礎架構，採零信任原則。',
          role: '雲端架構師',
          teamOrg: '學術團隊',
          details: '設計 VPC peering、IAM、WAF、RDS 等，遵循 HIPAA 安全規範。',
        },
        'nutrition-tracker': {
          title: 'AI 營養紀錄 App',
          description: 'Android 飲食紀錄 App，結合 ML 辨識食物與計算營養。',
          role: 'Android 開發',
          teamOrg: '學術團隊',
          details: '整合 Firebase ML Kit 食物辨識、Kotlin UI、Google Cloud 儲存。',
        },
      },
    },
    contact: {
      heading: '來 Say Hi!',
      headingEm: '',
      email: 'yang.yy.yating@gmail.com',
    },
    footer: {
      rights: '© 2026 · 保留所有權利。',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    aboutPage: {
      scrollToExperience: '捲動至工作經驗',
      scrollToOutside: '捲動至工作之外',
      workExperience: '工作經驗',
      outsideOfWork: '工作之外',
    },
    me: {
      label: '關於我',
      engineer: {
        title: '工程師 Amy',
        link: '看看我的工作經歷',
        paras: [
          '我是現居紐約的全端工程師，在新創與成長期團隊累積了 4 年以上經驗，主要使用 TypeScript、React、React Native 與 NestJS。我喜歡從頭到尾負責一個功能，從使用者看到的介面，到背後的 API。',
          '最近我在 ConnNext 擔任創始工程師，四個月內將 React Native app 上架 App Store；也在工研院擔任全端工程師，打造 AI 虛擬病人平台，已在高雄醫學大學與中山醫學大學的牙醫系使用。在那之前，我在 Tymeline 開發 AI 驅動的儀表板與規劃工具，也在 Tagnology 打造了台灣第一個 NFT 市集。',
          '我的背景不是傳統的資工出身。我大學念廣告，在台北奧美工作兩年，參與 Nike 與 Google Play 的專案，之後透過 bootcamp 轉職成軟體工程師，再到馬里蘭大學念資訊管理碩士。從那之後，我做過前端、後端、行動裝置、區塊鏈，以及 AI 相關的產品。這樣的經歷讓我很習慣在技術系統和真正使用它的人之間做翻譯：我會同時思考系統內部如何運作，以及如何把這些複雜度轉化成對使用者清楚、好用的東西。',
        ],
      },
      person: {
        title: '就是 Amy',
        link: '看看我工作之外都在做什麼',
        paras: [
          '我在台灣長大，到馬里蘭念研究所，現在住在紐約。搬來紐約後我開始跑步，沿著河岸、跨過橋梁，也跑中央公園。現在正在跑 NYRR 的 9+1，目標是 2027 年紐約馬拉松，同時也在為 2027 年 5 月的哥本哈根馬拉松做訓練。',
          '不跑步的時候，我通常在健行、露營，或是計畫下一趟旅行。我會在 Medium 上寫旅行的故事，也什麼都有清單：想去的咖啡廳、想走的步道，還有還沒去過的地方。',
        ],
      },
    },
    experience: {
      label: '工作經驗',
      education: '學歷',
      viewResume: '查看完整履歷',
      aria: { companyLink: '公司連結' },
      items: [
        { period: '2026年1月 – 2026年7月', title: '創始工程師', company: 'ConnNext', description: '作為唯一的前端工程師，負責 pre-seed AI 社群人脈 app 的前端開發，四個月內將 React Native / Expo app 上架 Apple App Store。', tags: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'TanStack Query'] },
        { period: '2026年2月 – 2026年6月', title: '全端工程師', company: '工研院', description: '負責整合 Azure OpenAI 的 AI 虛擬病人 OSCE 平台全端開發，已在高雄醫學大學與中山醫學大學的牙醫系使用。', tags: ['React', 'TypeScript', 'NestJS', 'TypeORM', 'Azure OpenAI'] },
        { period: '2024年8月 – 2025年7月', title: '前端工程師', company: 'Tymeline', description: '為 AI 驅動的效能平台建置核心 UI 元件與數據儀表板，提升開發效率並支援大規模資料視覺化。', tags: ['React', 'JavaScript', 'Redux', 'TypeScript', 'Playwright', 'AWS'] },
        // { period: '2024年7月 – 2025年7月', title: '軟體工程師', company: 'IpserLab', description: '開發並上線即時 WebRTC 視訊平台，主導 UI/UX 改版，提升無障礙、互動與效能。', tags: ['React', 'JavaScript', 'WebRTC'] },
        // { period: '2023年9月 – 2024年5月', title: 'Python 程式助教', company: '馬里蘭大學', description: '帶領 Python 實驗課並支援學生專案，協助釐清技術概念、強化實作程式能力。', tags: ['Python'] },
        { period: '2021年8月 – 2023年2月', title: '前端工程師', company: 'Tagnology', description: '在 6 個產品上建置並上線前端功能，包含 Web3 NFT 市集與聊天機器人自動化工具，提升效能與可擴充性。', tags: ['React', 'JavaScript', 'Next.js', 'Web3', 'HTML', 'CSS'] },
        { period: '2017年12月 – 2019年6月', title: '業務執行', company: '奧美廣告', description: '為 Nike、Google Play 等全球品牌執行數位與社群 campaign，與客戶、創作者與工程師協作，將創意落地。', tags: ['Campaign Execution', 'Cross-team Delivery', 'Brand Strategy', 'Project Management'] },
      ],
      educationItems: [
        { period: '2022年9月 – 2024年5月', title: '資訊管理碩士', school: '馬里蘭大學學院公園分校', detail: '修習：網頁開發、資料庫設計 (SQL/NoSQL)、雲端安全、NLP' },
        { period: '2013年9月 – 2017年6月', title: '廣告與公共關係學士', school: '輔仁大學' },
      ],
    },
    outside: {
      label: '工作之外',
      bgWord: '工作之外',
      running: { title: '跑步', desc: '喜歡跑步，目前在跑 NYRR 9+1 準備 2027 紐約馬拉松，也在練 2027 年 5 月的哥本哈根馬拉松。歡迎到 {{STRAVA}} 看看 — 我會給 kudo！' },
      writing: { title: '寫作', desc: '在 {{MEDIUM}} 寫旅行、生活與一些雜感。' },
      cornerMaps: { title: 'Corner Maps', desc: '在 {{CORNER}} 整理飲料、食物與適合帶筆電的咖啡廳清單 — 2025、2026 最愛用的 app！' },
      hiking: { title: '健行與露營', desc: '沒有訊號、只有帳篷的週末，是最好的週末。正在慢慢完成我在 AllTrails 上的清單：{{HIKE_LONG}}、{{HIKE_VIEW}}、{{HIKE_TRAVEL}}。' },
      travel: { title: '旅行', desc: '世界是一張很大的 bucket list。那些讓我念念不忘的旅程，我都寫在 {{MEDIUM}} 上。' },
      // TODO: 換成第六件你喜歡的事
      placeholder: { title: '即將更新', desc: '這裡之後會有更多分享。' },
    },
  },
} as const

function getByPath(obj: unknown, path: string): unknown {
  const parts = path.split('.')
  let cur: unknown = obj
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return undefined
    cur = (cur as Record<string, unknown>)[p]
  }
  return cur
}

export function getTranslation(locale: Locale, key: string): string {
  const val = getByPath(translations[locale], key)
  if (typeof val === 'string') return val
  return (getByPath(translations.en, key) as string) ?? key
}

export function getTranslationArray(locale: Locale, key: string): string[] {
  const val = getByPath(translations[locale], key)
  if (Array.isArray(val)) return val as string[]
  const enVal = getByPath(translations.en, key)
  if (Array.isArray(enVal)) return enVal as string[]
  return []
}
