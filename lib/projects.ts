export type Project = {
  id: string;
  type: "Production" | "Concept";
  company: string;
  title: string;
  role: string;
  period?: string;   //
  year?: string;
  tags: string[];
  thumb?: string;      // optional thumbnail; defaults to first slide
  slides: string[];   // additional images for the detail viewer
  blurbEN: string;
  blurbKR: string;
  teamCollab?: boolean;
  subtitle?: string;
};

export const projects: Project[] = [
  // —— Concept projects ——
  {
  id: "elvision",                          // URL: /work/elvision
  type: "Concept",                         // "Production" | "Concept" 둘 중 하나
  company: "Personal",                     // 회사명 또는 Personal
  title: "ELVISION – Smart Glasses",
  subtitle: "Elvision technologies - Smart glasses",       // 카드 제목
  role: "Industrial Design / CMF / UX",    // 역할
  // year: "2024",                         // 오래된 프로젝트는 숨기려면 이 줄 지워두면 됨
  // period: "2023–2024",                  // 양산 프로젝트만 기간 표기 원하면 사용
  tags: ["Wearable", "Optics", "AR"],

  // 썸네일 경로: 아래 둘 중 하나 택1
  thumb: "/images/elvision-00.jpg",
  // thumb: "/images/thumbs/elvision-00.jpg",

  slides: [
    "/images/elvision-01.jpg",
    "/images/elvision-02.jpg",
    "/images/elvision-03.jpg",
    "/images/elvision-04.jpg",
    "/images/elvision-05.jpg",
    "/images/elvision-06.jpg",
  ],

  blurbEN:
    "Concept smart glasses exploring comfort, optics integration, and a refined UX/CMF system.",
  blurbKR:
    "착용감과 광학 모듈 통합, 정제된 UX/CMF를 탐구한 스마트글라스 컨셉 프로젝트.",
  teamCollab: false,                       // 협업이면 true
},

  {
    id: "oakley-atv",
    type: "Concept",
    company: "Personal",
    title: "Oakley ATV — Concept Mobility",
    subtitle: "Oakley - Personal Gear A.T.V",
    role: "Concept / CMF / Visualization",
   // period: "2023",//
    year: "2023",
    tags: ["Concept", "Mobility", "CMF"],
    thumb: "/images/oakley-00.jpg",
    slides: [
      "/images/oakley-01.jpg",
      "/images/oakley-02.jpg",
      "/images/oakley-03.jpg",
      "/images/oakley-04.jpg",
      "/images/oakley-05.jpg",
      "/images/oakley-06.jpg",
      "/images/oakley-07.jpg",
      "/images/oakley-08.jpg",
      "/images/oakley-09.jpg",
      "/images/oakley-10.jpg",
    ],
    blurbEN:
      "A sport-utility concept exploring rugged optics language translated into mobility.",
    blurbKR:
      "러기드한 옵틱 디자인 언어를 모빌리티에 적용한 스포츠 유틸리티 콘셉트.",
  },
  {
    id: "virgin-galactic-mars",
    type: "Concept",
    company: "Personal",
    title: "Virgin Galactic — Mars Mobility",
    subtitle: "Virgin Galactic - Mars explorer interior",
    role: "Exterior / Packaging / Storytelling",
    // period: "2022",//
    year: "2022",
    tags: ["Concept", "Space"],
    thumb: "/images/virgin-00.jpg",
    slides: ["/images/virgin-01.jpg","/images/virgin-02.jpg","/images/virgin-03.jpg","/images/virgin-04.jpg","/images/virgin-05.jpg","/images/virgin-06.jpg","/images/virgin-07.jpg","/images/virgin-08.jpg"],
    blurbEN: "Human-centric mobility for low‑gravity operations on Mars.",
    blurbKR: "화성 저중력 환경에서의 휴먼 센트릭 모빌리티 설계.",
  },
  {
    id: "bmw-hmi",
    type: "Concept",
    company: "Personal",
    title: "BMW HMI — Zero‑Interface Study",
    subtitle: "BMW - Human Machine Interface",
    role: "HMI / Prototyping / UX",
   // period: "2024", //
    year: "2024",
    tags: ["Concept", "HMI", "UX", "Prototype"],
    thumb: "/images/bmw-00.jpg",
    slides: ["/images/bmw-01.jpg","/images/bmw-02.jpg","/images/bmw-03.jpg","/images/bmw-04.jpg","/images/bmw-05.jpg","/images/bmw-06.jpg","/images/bmw-07.jpg"],
    blurbEN:
      "Reactive interface minimizing visible controls while enhancing trust.",
    blurbKR:
      "가시적 컨트롤을 최소화하고 신뢰를 높이는 리액티브 인터페이스 연구.",
  },


  
  // —— Production & studio collaboration projects ——
  {
    id: "onvo-l60",
    type: "Production",
    company: "NIO (Brand: ONVO)",
    title: "ONVO L60 — Production Program",
    subtitle: 'NIO - Sub brand "ONVO" passenger car interior',
    role: "Interior Design — Team Collaboration",
    period: "2021.06 – 2023.10",
    year: "2021–2023",
    tags: ["Production", "Interior"],
    thumb: "/images/ONVO-00.jpg",
    slides: ["/images/ONVO-01.jpg","/images/ONVO-02.jpg","/images/ONVO-03.jpg","/images/ONVO-04.jpg","/images/ONVO-05.jpg"],
    blurbEN:
      "Contributed within a cross‑functional team from early development through production readiness for the ONVO L60 program.",
    blurbKR:
      "초기 개발부터 양산 준비 단계까지 ONVO L60 프로그램에 크로스펑셔널 팀으로 참여했습니다.",
    teamCollab: true,
  },
  {
    id: "golden-sunflower",
    type: "Concept",
    company: "FAW Advanced Studio",
    title: "Golden Sunflower — Concept Model",
    subtitle: "Hongqi - Golden Sunflower Concept interior",
    role: "Exterior / Interior — Team Collaboration",
    period: "2023.12 – 2024.04",
    year: "2023–2024",
    tags: ["Concept", "Exterior", "Interior"],
    thumb: "/images/sunflower-00.jpg",
    slides: ["/images/sunflower-01.jpg","/images/sunflower-02.jpg","/images/sunflower-03.jpg"],
    blurbEN:
      "Studio collaboration on a show‑car concept exploring brand symbolism and packaging.",
    blurbKR:
      "브랜드 상징성과 패키징을 탐구한 쇼카 콘셉트로, 스튜디오 협업 형태로 참여했습니다.",
    teamCollab: true,
  },
  {
    id: "baojun-e300",
    type: "Production",
    company: "SGMW · Baojun",
    title: "Baojun E300 — Interior",
    subtitle: "Baojun - E300 City EV interior",
    role: "Interior Design — Team Collaboration",
    period: "2019.03 – 2019.08",
    year: "2019",
    tags: ["Production", "Interior", "EV"],
    thumb: "/images/e300-00.jpg",
    slides: ["/images/e300-01.jpg","/images/e300-02.jpg","/images/e300-03.jpg","/images/e300-04.jpg"],
    blurbEN:
      "Worked with engineering, CMF, and suppliers to deliver an approachable micro‑EV interior.",
    blurbKR:
      "엔지니어링·CMF·서플라이어와 협업하여 친근한 마이크로 EV 인테리어를 구현했습니다.",
    teamCollab: true,
  },
  {
    id: "baojun-rm5",
    type: "Production",
    company: "SGMW · Baojun",
    title: "Baojun RM‑5 — Interior",
    subtitle: "Baojun - RM5 S.U.V interior",
    role: "Interior Design — Team Collaboration",
    period: "2018.10 – 2019.03",
    year: "2018–2019",
    tags: ["Production", "Interior", "MPV"],
    thumb: "/images/RM5-00.jpg",
    slides: ["/images/RM5-01.jpg","/images/RM5-02.jpg","/images/RM5-03.jpg","/images/RM5-04.jpg"],
    blurbEN:
      "Collaborated across teams to package a family‑oriented MPV interior from concept to feasibility.",
    blurbKR:
      "패밀리 지향 MPV 인테리어를 콘셉트에서 타당성 단계까지 팀과 함께 패키징했습니다.",
    teamCollab: true,
  },
];
