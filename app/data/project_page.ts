// data/project_page.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    category: "Arsitektur" | "Pembangunan" | "Legalitas";
    images: string[];
  }
  
  export const ProjectPage: Project[] = [
    {
      id: "1",
      title: "Projek",
      description: "Deskripsi singkat projek Arsitektur A.",
      category: "Arsitektur",
      images: [
        "https://res.cloudinary.com/doqmcufwf/image/upload/v1734063021/p5_rvc7uh.png",
        "https://res.cloudinary.com/doqmcufwf/image/upload/v1734159364/5_y3zuuu.png",
      ],
    },
    {
      id: "2",
      title: "Projek Pembangunan B",
      description: "Deskripsi singkat projek Pembangunan B.",
      category: "Pembangunan",
      images: [
        "https://res.cloudinary.com/doqmcufwf/image/upload/v1734070644/p2_jnkvcz.png",
        "https://res.cloudinary.com/doqmcufwf/image/upload/v1734070621/p1_lydaeh.png",
      ],
    },
    {
      id: "3",
      title: "Projek Arsitektur C",
      description: "Deskripsi singkat projek Arsitektur C.",
      category: "Arsitektur",
      images: [
        "https://res.cloudinary.com/doqmcufwf/image/upload/v1734159364/2_idgax6.png",
        "https://res.cloudinary.com/doqmcufwf/image/upload/v1734159363/1_rtqzw7.jpg",
      ],
    },
    {
      id: "4",
      title: "Projek Arsitektur D",
      description: "Deskripsi singkat projek Arsitektur A.",
      category: "Arsitektur",
      images: [
        "https://res.cloudinary.com/doqmcufwf/image/upload/v1734070644/p2_jnkvcz.png",
        "https://res.cloudinary.com/doqmcufwf/image/upload/v1734070621/p1_lydaeh.png",
      ],
    },
    {
      id: "5",
      title: "Projek Pembangunan E",
      description: "Deskripsi singkat projek Pembangunan B.",
      category: "Pembangunan",
      images: [
        "https://res.cloudinary.com/doqmcufwf/image/upload/v1734063018/p6_jtftxl.png",
        "https://res.cloudinary.com/doqmcufwf/image/upload/v1734063018/p4_fptxgt.png",
      ],
    },
  ];
  
  export const getProjectById = (id: string): Project | null => {
    return ProjectPage.find(project => project.id === id) || null;
  };
  