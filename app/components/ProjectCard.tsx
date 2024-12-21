'use client';

import Link from 'next/link';
import { Project } from '../data/project_page';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div 
        className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.2 }}>
        <Image
          src={project.images[0]}
          alt={project.title}
          width={800}
          height={800}
          className="w-full h-80 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold">
            <div className="text-blue-700 hover:text-blue-800">
              {project.title}
            </div>
          </h3>
          <p className="text-gray-600">{project.description}</p>
          <p className="text-sm text-gray-500">Kategori: {project.category}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
