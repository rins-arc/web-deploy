import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  id: number;
  name: string;
  description: string;
  images: string[];
}

interface Props {
  projects?: Project[];
}

const ProjectGallery: React.FC<Props> = ({ projects = [] }) => {
  if (!projects.length) {
    return <p>Tidak ada proyek yang tersedia.</p>;
  }

  return (
    <motion.div
      className="space-y-12"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring"}}
    >
      {projects.map((project, projectIndex) => (
        <motion.div
          key={project.id}
          className="space-y-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: projectIndex * 0.1,
          }}
        >
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <p className="text-gray-600">{project.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "75%",
                  overflow: "hidden",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: projectIndex * 0.1 + index * 0.1,
                }}
              >
                <Image
                  src={image}
                  alt={`${project.name} Image ${index + 1}`}
                  quality={75}
                  loading="lazy"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGallery;
