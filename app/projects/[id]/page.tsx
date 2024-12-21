// app/projects/[id]/page.tsx

import { notFound } from 'next/navigation';
import { getProjectById } from '../../data/project_page'; // Make sure this path is correct
import Image from 'next/image';

// // Define the Project type
// interface Project {
//   title: string;
//   description: string;
//   images: string[];
// }

const ProjectDetail = async ({ params }: { params: { id: string } }) => {
  // Await the params to ensure it is resolved before accessing its properties
  const { id } = await params;

  // Fetch the project data by ID
  const project = await getProjectById(id);

  // If the project is not found, trigger a 404 page
  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 min-h-screen mt-24 px-6">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-8">{project.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {project.images.map((image, index) => (
          <div key={index} className="w-full h-auto">
            <Image
              src={image}
              width={1200}
              height={800}
              alt={`Project image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
