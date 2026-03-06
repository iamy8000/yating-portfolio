/**
 * Translation keys and English / 繁體中文 content.
 * Use t('nav.home'), t('hero.rotator.0'), etc.
 */
export type Locale = 'en' | 'zh-TW'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      resume: 'Resume',
      subtitle: 'Frontend Engineer',
      aria: { openMenu: 'Open menu', closeMenu: 'Close menu', toggleTheme: 'Toggle theme' },
    },
    hero: {
      rotator: [
        'a frontend engineer.',
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
      subtitle: 'Currently a Founding Full-Stack Engineer at',
      subtitleConnNext: 'ConnNext',
      subtitleBased: 'Based in NY.',
      learnMore: 'Learn more about me :)',
      viewProjects: 'View Projects',
    },
    about: {
      label: 'About Me',
      heading: 'Built with care,',
      headingEm: 'pixel by pixel.',
      yearsEng: 'Years Eng',
      projects: 'Projects',
      learnMore: 'Learn more about me :)',
      p1: "Graduated with a Master's in Information Management from University of Maryland, College Park, I am a frontend engineer with 4+ years of experience. I primarily work with React, Next.js, JavaScript, TypeScript, Redux, and Material UI, with strong attention to visual detail and system scalability. I've built AI-powered dashboards, WebRTC video platforms, Web3 applications, and marketing tools used by real users at scale.",
      p2: "Before transitioning into engineering, I earned a Bachelor's in Advertising and worked 2 years at Ogilvy on campaigns for Nike and Google Play. Working closely with designers, strategists, and engineers taught me how to think about products not just as features, but as experiences.",
      p3: "My advertising background influences how I approach engineering today — user emotion, clarity, and narrative, not just implementation. To me, frontend development isn't only about making things work; it's about making them feel intuitive and purposeful.",
      linkedin: 'LinkedIn',
      email: 'yating.yy.yang@gmail.com',
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
          description: 'An immersive productivity mobile application built with Unity, blending interactive 3D characters with real-world context.',
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
      email: 'yating.yy.yang@gmail.com',
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
      p1: "I grew up in Taiwan, moved to DC and Maryland for grad school and work, and now I'm in NYC. Still adjusting, still learning, still building. Before engineering I did advertising at Ogilvy, working on campaigns for Nike and Google Play alongside designers, strategists, and engineers. That taught me to think about products as experiences, not just features.",
      p2: "Outside of work, I started running after moving to New York. I run along the waterfront, through Manhattan, across bridges, and in Central Park. The one place that makes the city feel less overwhelming. I keep a lot of lists and small goals. To me, the world feels like one big bucket list. There’s always something worth doing, tasting, seeing, or trying. I like having things to look forward to.",
      p3: "What I carry from all of that into frontend: curiosity and care. I care a lot about clarity and how small details shape how people experience something. To me, good frontend isn't only about making things work. It's about making them feel intuitive and purposeful ✨.",
    },
    experience: {
      label: 'Work Experience',
      education: 'Education',
      viewResume: 'View Full Resume',
      aria: { companyLink: 'Company link' },
      items: [
        { period: 'Feb 2026 – Present', title: 'Founding Engineer', company: 'ConnNext', description: 'Lead frontend for the ConnNext mobile app (React Native / Expo) in a 4-engineer startup — scalable UI system, auth/onboarding, and real-time flows from early-stage to production.', tags: ['React Native', 'Expo', 'TypeScript', 'Clerk', 'JavaScript'] },
        { period: 'Aug 2024 – Jul 2025', title: 'Frontend Engineer', company: 'Tymeline', description: 'Built core UI components for an AI-powered performance platform.', tags: ['React', 'JavaScript', 'Redux', 'TypeScript', 'Playwright', 'AWS'] },
        { period: 'Jul 2024 – Jul 2025', title: 'Software Engineer', company: 'IpserLab', description: 'Worked on a WebRTC video conferencing platform, leading UI revamps and improving accessibility, interaction, and UX.', tags: ['React', 'JavaScript', 'WebRTC'] },
        { period: 'Sep 2023 – May 2024', title: 'Teaching Assistant, Python Programming', company: 'University of Maryland', description: 'Supported course instructors by leading Python lab sessions and providing technical assistance for student projects.', tags: ['Python'] },
        { period: 'Aug 2021 – Feb 2023', title: 'Frontend Engineer', company: 'Tagnology', description: 'Built and shipped features across 6 projects, from a Web3 NFT marketplace to an Instagram chatbot flow builder.', tags: ['React', 'JavaScript', 'Next.js', 'Web3', 'HTML', 'CSS'] },
        { period: 'Dec 2017 – Jun 2019', title: 'Account Executive', company: 'Ogilvy', description: 'Executed branding, digital, and social campaigns for global brands including Nike and Google Play. Collaborated cross-functionally with clients, creators, and engineers.', tags: ['Campaign Execution', 'Cross-team Delivery', 'Brand Strategy', 'Project Management'] },
      ],
      educationItems: [
        { period: 'Sep 2022 – May 2024', title: 'Master of Information Management', school: 'University of Maryland, College Park', detail: 'Coursework: Web Development, Database Design (SQL/NoSQL), Cloud Security, NLP' },
        { period: 'Sep 2013 – Jun 2017', title: 'Bachelor of Arts in Advertising and Public Relations', school: 'Fu Jen Catholic University' },
      ],
    },
    outside: {
      label: 'Outside of Work',
      bgWord: 'Outside of Work',
      running: { title: 'Running', desc: "I love running. Currently training for a half marathon. Check out my {{STRAVA}} — and I'll kudo back!" },
      writing: { title: 'Writing', desc: 'I write on {{MEDIUM}} — travel, life reflections, and some random thoughts.' },
      cornerMaps: { title: 'Corner Maps', desc: "I curate lists for drinks, food, and laptop-friendly cafes on {{CORNER}} — my fav app in 2025 & 2026!" },
    },
  },
  'zh-TW': {
    nav: {
      home: '首頁',
      projects: '精選專案',
      about: '關於我',
      resume: '履歷',
      subtitle: '前端工程師',
      aria: { openMenu: '開啟選單', closeMenu: '關閉選單', toggleTheme: '切換主題' },
    },
    hero: {
      rotator: [
        '前端工程師。',
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
      learnMore: '更多關於我 :)',
      p1: '我畢業於美國馬里蘭大學資訊管理碩士，目前是一位擁有 4 年經驗的前端工程師。主要使用 React、Next.js、JavaScript、TypeScript、Redux 與 Material UI 開發產品，重視視覺細節與系統的可擴充性。我曾打造 AI 驅動的數據儀表板、WebRTC 視訊平台、Web3 應用，以及實際被大量使用者採用的行銷工具。',
      p2: '在轉職成工程師之前，我在輔仁大學取得廣告學學士學位，並於 Ogilvy 工作兩年，參與 Nike 與 Google Play 的品牌專案。與設計師、策略規劃與工程師密切合作的過程，讓我學會從「體驗」的角度思考產品，而不只是功能本身。',
      p3: '廣告背景深深影響了我現在做工程的方式。我在意使用者的情緒、產品的清晰度與整體敘事，而不只是把功能實作出來。對我而言，前端開發不只是讓產品運作，而是讓它自然、直覺、有意義。',
      linkedin: 'LinkedIn',
      email: 'yating.yy.yang@gmail.com',
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
          description: '以 Unity 打造的沉浸式生產力行動應用，結合 3D 角色與實境情境。',
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
      email: 'yating.yy.yang@gmail.com',
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
      p1: '我在台灣長大，研究所與工作期間搬到 DC 和馬里蘭，現在落腳紐約。還在適應、還在學習、也還在持續打造新的東西。在成為工程師之前，我在 Ogilvy 做廣告，與創意、策略和工程師一起參與 Nike 和 Google Play 的品牌專案。那段經驗讓我學會把產品視為一種「體驗」，而不只是功能的集合。',
      p2: '工作之外，我搬來紐約後開始跑步。我跑河堤、跑曼哈頓、跑橋也跑中央公園，中央公園是讓這座城市沒那麼 overwhelming 的地方。我有很多清單，也有很多小目標；對我來說，世界就像一個很大的 bucket list。有太多事情值得去做、去吃、去看、去嘗試。我喜歡讓生活裡總是有一些期待。',
      p3: '我把這些經驗都帶進前端開發裡：好奇心，還有對細節的敏銳。我很在乎清晰度，也在乎那些看似微小的細節如何影響使用者的感受。對我而言，好的前端不只是讓產品能運作，而是讓它自然、直覺、有方向✨。',
    },
    experience: {
      label: '工作經驗',
      education: '學歷',
      viewResume: '查看完整履歷',
      aria: { companyLink: '公司連結' },
      items: [
        { period: '2026年2月 – 至今', title: '創始工程師', company: 'ConnNext', description: '在 4 人新創團隊中主導 ConnNext 行動 app（React Native / Expo）前端，從早期到上線：可擴充 UI 系統、登入/onboarding 與即時連線流程。', tags: ['React Native', 'Expo', 'TypeScript', 'Clerk', 'JavaScript'] },
        { period: '2024年8月 – 2025年7月', title: '前端工程師', company: 'Tymeline', description: '為 AI 效能平台建置核心 UI 元件。', tags: ['React', 'JavaScript', 'Redux', 'TypeScript', 'Playwright', 'AWS'] },
        { period: '2024年7月 – 2025年7月', title: '軟體工程師', company: 'IpserLab', description: '參與 WebRTC 視訊會議平台，主導 UI 改版並提升無障礙、互動與 UX。', tags: ['React', 'JavaScript', 'WebRTC'] },
        { period: '2023年9月 – 2024年5月', title: 'Python 程式助教', company: '馬里蘭大學', description: '帶領 Python 實驗課並協助學生專案。', tags: ['Python'] },
        { period: '2021年8月 – 2023年2月', title: '前端工程師', company: 'Tagnology', description: '在 6 個專案中開發與上線功能，從 Web3 NFT 市集到 Instagram 聊天機器人流程建置。', tags: ['React', 'JavaScript', 'Next.js', 'Web3', 'HTML', 'CSS'] },
        { period: '2017年12月 – 2019年6月', title: '業務執行', company: '奧美廣告', description: '執行 Nike、Google Play 等全球品牌之品牌、數位與社群 campaign，與客戶、創作者、工程跨域協作。', tags: ['Campaign Execution', 'Cross-team Delivery', 'Brand Strategy', 'Project Management'] },
      ],
      educationItems: [
        { period: '2022年9月 – 2024年5月', title: '資訊管理碩士', school: '馬里蘭大學學院公園分校', detail: '修習：網頁開發、資料庫設計 (SQL/NoSQL)、雲端安全、NLP' },
        { period: '2013年9月 – 2017年6月', title: '廣告與公共關係學士', school: '輔仁大學' },
      ],
    },
    outside: {
      label: '工作之外',
      bgWord: '工作之外',
      running: { title: '跑步', desc: '喜歡跑步，目前在練半馬。歡迎到 {{STRAVA}} 看看 — 我會給 kudo！' },
      writing: { title: '寫作', desc: '在 {{MEDIUM}} 寫旅行、生活與一些雜感。' },
      cornerMaps: { title: 'Corner Maps', desc: '在 {{CORNER}} 整理飲料、食物與適合帶筆電的咖啡廳清單 — 2025、2026 最愛用的 app！' },
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
