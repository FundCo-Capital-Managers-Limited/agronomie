export type StaffMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string[];
};

export const STAFF: StaffMember[] = [
  {
    slug: "jojololami-ngene",
    name: "Jojololami Ngene",
    role: "Director",
    image: "/uploads/2018/06/jojo-500x500.jpg",
    bio: [
      "Jojololami has over 11 years of engineering consulting experience gained whilst working for various multi-disciplinary engineering firms in London. She has extensive project management experience in designing, procuring, and implementing power systems for some of the most state-of-the-art commercial and energy-intensive projects – including Google London HQ and Facebook Data Centre, Lulea (their first in Europe). Jojololami started her consulting career with Cundall Limited as an Engineering Consultant (Electrical) in 2010 and in 2015 joined Norman Disney & Young also as an Engineering Consultant (Electrical).",
      "Jojololami is technically astute, highly organised, process-driven, attentive to detail and goal-oriented. Jojololami holds a Masters degree in Electrical Engineering from the University of Southampton in 2010, she majored in Power Generation, Power Systems Analysis, Power System Technology, and High Voltage Engineering.",
      "Jojo joined Agronomie in 2022 and has since been managing projects from planning through to execution. This includes coordinating with stakeholders and overseeing Needs Assessment exercises. Jojo manages all aspects of the projects, including community engagement, Productive Use of Energy (PUE) evaluations, and asset financing.",
      "Additionally, Jojo develops and implements training programs for the operation and maintenance of assets. She collaborates on IoT-based solutions and identifies and mitigates risks to ensure project success.",
    ],
  },
  {
    slug: "olufunmilola-abraham",
    name: "Olufunmilola Abraham",
    role: "Head, Legal/Company Secretary",
    image: "/uploads/2024/10/download-resizehood.com_.png",
    bio: [
      "Oluwafunmilola holds a Bachelor of Laws degree from Olabisi Onabanjo University in 2008 and was called to the Nigerian Bar in 2009. She possesses significant experience in advising private and international clientele on a wide variety of transactions. She is also at the forefront of emerging areas of law such as Employment Law and Industrial dispute resolution.",
      "Over the years, she has anchored transactions with several leading organizations in various sectors. Oluwafunmilola is versed in corporate and commercial practice. She is adept at providing legal and advisory support services in corporate governance, drafting and vetting of contracts, corporate finance, company secretarial and corporate compliance, employment law compliance, workforce restructuring, and outsourcing, protecting business assets, real estate, and due diligence.",
    ],
  },
  {
    slug: "john-ogwuche",
    name: "John Emmanuel Ogwuche",
    role: "Energy Expert",
    image: "/uploads/2018/06/Untitled-design-1.png",
    bio: [
      "John Emmanuel Ogwuche is a highly skilled and innovative individual specializing in Solar Energy Systems design and implementation. With a Bachelor's degree in Industrial Physics from the Federal University of Agriculture, Makurdi, Benue State in 2018 and extensive hands-on experience, John has a proven track record of success in various roles within the renewable energy sector.",
      "His expertise includes design and analysis of Solar Energy Systems for Mini-Grids, Commercial & Industrial, and Residential applications, proficiency in software such as Helioscope, Homer, PVsyst, AutoCAD, and Odyssey for system design and simulation, energy auditing and cost-benefit analysis for Solar Energy Systems, and installation, repair, and maintenance of Solar Hybrid Mini-grids and standalone systems.",
      "John's commitment to excellence, coupled with his passion for renewable energy and problem-solving, makes him a valuable asset in any organization striving to promote sustainable energy solutions.",
    ],
  },
  {
    slug: "chioma-chidi",
    name: "Chioma Chidi",
    role: "Business Analyst",
    image: "/uploads/2022/11/chioma-chidi-500x500.jpg",
    bio: [
      "Chioma is a lawyer, who currently works as a transaction legal associate with FundCo Capital. She previously had over six years of work experience with C.O Mbagho & Co. She is self-motivated, target oriented, with good leadership and communication skills.",
      "Chioma has worked as a graduate, NYSC intern and customer care agent across firms such as Ajogwu & Ajogwu Solicitors, Chike Odezugo & Company and Aiico Insurance Plc.",
      "She holds an LL.B hons in University of Nigeria, Nsukka and Nigerian Law School, Enugu Campus (B.L). She is a member of the Nigerian Bar Association and Member, Institute of Corporate Administrators of Nigeria.",
    ],
  },
  {
    slug: "lambert-saviour",
    name: "Lambert Saviour",
    role: "Head, Agricultural Extension",
    image: "/uploads/2024/10/Untitled-design-4.jpg",
    bio: [
      "Lambert Saviour is a dedicated and experienced Agro field and Extension professional with a proven track record of managing various farm projects and commercial organizations. With a Master of Science in Extension Administration from Rivers State University of Science and Technology and a Bachelor of Agricultural Economics and Extension from the University of Port Harcourt, Lambert brings a strong educational background to his work.",
      "His experience includes roles such as Field Representative at Fundco Capital Managers, Agricultural Extension Field Expert at LuLu Briggs Foundation, and Farm Manager at Ok Farm. In these positions, Lambert has demonstrated skills in educating rural farmers on modern agricultural practices, introducing proper irrigation systems, and implementing organic farming techniques.",
      "Lambert's key skills include data analysis, social media management, and proficiency in Microsoft Office, Zoom, and Google Workspace.",
    ],
  },
  {
    slug: "edoja-john",
    name: "Edoja John Akpovwovwo",
    role: "Project Manager/Agricultural Economist",
    image: "/uploads/2018/06/john-500x500.jpg",
    bio: [
      "Edoja John Akpovwovwo is a graduate of Agricultural Economics (BSc) and Agribusiness Management (MSc) with over 7 years of experience running agricultural and educational businesses from ideation to implementation. His key strengths include resiliently delivering outcomes and results, developing strategic partnerships, and simplifying complex processes.",
      "He has hands-on experience working directly with farmers to improve their production output and increase the value added to their farm produce. He has set up agro startups, including TopFresh Agro Ventures, which manages agricultural enterprises for clients, and FarmerShop, an online agro-commerce store that helps farmers access urban consumers to sell their produce at better prices.",
      "John joined Agronomie in 2022 and serves as a Project Manager, aligning project execution with organizational goals and market trends. He develops comprehensive business plans, including objectives, strategies, financial projections, and market analyses to guide project direction.",
    ],
  },
];

export function getStaffMember(slug: string) {
  return STAFF.find((s) => s.slug === slug);
}
