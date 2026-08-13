export type Project = {
  slug: string;
  title: string;
  location: string;
  featuredImage: string;
  gallery: string[];
  paragraphs: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "ondo-green-kiosk",
    title: "Ondo State – Green Kiosk Project",
    location: "Ondo State",
    featuredImage: "/uploads/2024/10/Untitled-design-3.jpg",
    gallery: [
      "/uploads/2024/10/WhatsApp-Image-2024-05-29-at-18.30.15_a58d5524.jpg",
      "/uploads/2024/10/WhatsApp-Image-2024-05-29-at-18.30.13_0a00a4c0.jpg",
      "/uploads/2024/10/WhatsApp-Image-2024-03-08-at-21.36.15_653a2540.jpg",
      "/uploads/2024/10/WhatsApp-Image-2024-03-05-at-14.22.38_c14296c8.jpg",
    ],
    paragraphs: [
      "In Ondo State, Agronomie is leading efforts to empower connectivity through financial services, collaborating with Hotspot Network Limited on the Power Utilization Efficiency (PUE) Green Kiosk Project. Using solar-powered kiosks, we aim to serve underserved communities, providing not just power, but access, innovation, digital inclusion (financial, educational, data, entertainment etc) and economic empowerment.",
      "Access to Finance: Agronomie provides tailored financial services to support Hotspot Network Limited, enabling the realization of transformative projects. Our financial backing helps bridge gaps and unlocks technological advancements in rural communities.",
      "PUE Kiosk: The PUE Kiosk pilot blends sustainable electrification with advanced telecommunication solutions, empowering communities with access to information, education, and economic opportunities. This project symbolizes inclusive development in Ondo State.",
      "Sustainable Impact – Beyond Electrification: Our approach focuses on sustainable impact through financial services and collaboration with Hotspot Network Limited. The success of this pilot sets the stage for scalability and replicability in other communities seeking to harness energy and connectivity.",
    ],
  },
  {
    slug: "abia-rivers",
    title: "Abia, Benue, Edo, Ondo & Rivers State",
    location: "Abia, Benue, Edo, Ondo & Rivers States",
    featuredImage: "/uploads/2024/10/Untitled-design-2.jpg",
    gallery: [
      "/uploads/2024/10/WhatsApp-Image-2024-05-29-at-18.30.07_97316a5b.jpg",
      "/uploads/2024/10/WhatsApp-Image-2024-05-29-at-18.30.07_97316a5b-1.jpg",
      "/uploads/2024/10/WhatsApp-Image-2024-05-12-at-23.28.23_863a2d51.jpg",
      "/uploads/2024/10/WhatsApp-Image-2024-05-12-at-23.28.21_9e460158.jpg",
    ],
    paragraphs: [
      "In collaboration with Aquaearth for Infracredit, we led a project aimed at empowering agrarian communities across Abia, Benue, Edo, Ondo, and Rivers States. We blend our expertise in project management, agribusiness, and energy solutions to bring about significant, sustainable development in these regions. We conducted a detailed needs assessment and implementation plan of nine unserved and unelectrified communities, envisioning a future of growth powered by abundant energy. Our efforts align with the upcoming Mini-Grid operations in partnership with three (3) developers, Darway Coast, ACOB and Prado.",
      "Needs Assessment: Our journey began with an in-depth needs assessment, uncovering the challenges and aspirations of each agrarian community. By immersing ourselves in these unique locales, we identified pressing needs and unlocked their latent potential, laying the groundwork for impactful interventions.",
      "Synchronizing with Mini-Grid Operations: Our initiatives are synchronized with the upcoming Mini-Grid operations.",
      "Leading with Expertise: We lead the team with unparalleled expertise from our project management, agribusiness, and energy professionals, spanning assessment, onboarding agro-processors, and procurement and implementation planning across multiple sites. At Agronomie, our commitment extends beyond electrification; it encompasses the cultivation of prosperity.",
    ],
  },
  {
    slug: "darway-coast",
    title: "Calabar, Darway Coast",
    location: "Cross River State",
    featuredImage: "/uploads/2024/10/Untitled-design-1.jpg",
    gallery: [
      "/uploads/2024/10/WhatsApp-Image-2024-03-08-at-21.36.18_1908b98a.jpg",
      "/uploads/2024/10/WhatsApp-Image-2024-03-08-at-21.36.12_efbc995b.jpg",
      "/uploads/2024/10/WhatsApp-Image-2023-08-24-at-12.51.29_627749f2.jpg",
      "/uploads/2024/10/WhatsApp-Image-2023-08-24-at-12.51.29_08972d98.jpg",
    ],
    paragraphs: [
      "In Cross Rivers, we undertook a meticulous needs assessment analysis of four unserved and unelectrified communities. Our endeavours synchronize with the imminent commencement of Mini-Grid operations, a collaborative effort with Darway Coast.",
      "Needs Assessment: Our journey began with a thorough needs assessment, identifying challenges and opportunities in each community. By engaging with these communities, we gained insights that shaped our intervention strategy, revealing both pressing needs and untapped potential.",
      "Implementation in Progress: The strategy developed from the needs assessment will be put into action. We have worked on electrification and tailored solutions for the agrarian and fishing communities, in collaboration with the mini-grid provider. We have an MoU with Darway Coast, completed the assessment and procurement planning, and are awaiting the readiness of the DISCO to deploy PuE assets.",
      "Mini-Grid Developer – Darway Coast: Partnering with Darway Coast, a respected Mini-Grid Developer, adds depth to our efforts, combining our expertise to revolutionize the energy landscape in Cross Rivers.",
    ],
  },
  {
    slug: "angwan-rina-plateau-state",
    title: "Angwan Rina, Plateau State",
    location: "Plateau State",
    featuredImage: "/uploads/2024/10/Untitled-design.jpg",
    gallery: [
      "/uploads/2017/11/WhatsApp-Image-2024-08-07-at-21.11.11_c2c9828e.jpg",
      "/uploads/2017/11/WhatsApp-Image-2024-08-07-at-21.11.12_ca686b32-1.jpg",
      "/uploads/2024/10/WhatsApp-Image-2024-08-07-at-21.11.11_169bc7f9.jpg",
    ],
    paragraphs: [
      "In Angwan Rina, Plateau State, Agronomie played a pivotal role in transforming aspirations into reality through a comprehensive blend of project assessment & management, financial services, and project execution.",
      "Needs Assessment for Electrification Viability: We began with a detailed needs assessment of the electrified community, focusing on the feasibility of establishing Agricultural Productive Use Equipment (PuE).",
      "Commissioned Project – PuE Agro-Processing Pilot: Following the successful assessment, we were commissioned to execute a PuE Agro-Processing Pilot, leveraging the Mini Grid to drive economic growth through sustainable agro-processing.",
      "Collaboration with Mini-Grid Developer – GVE: Partnering with GVE, a leading Mini-Grid Developer, we integrated our agro-processing project with broader electrification efforts, testing the MoU with the mini-grid, acquiring and onboarding agro-processors for lease, and managing operations and maintenance (O&M).",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
