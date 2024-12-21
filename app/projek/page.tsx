'use client';

import React from 'react';
import { motion } from "framer-motion";
import { ProjekLegalitas } from '../data/projects_legalitas';
import { useState } from 'react';
import { ProjectPage } from '../data/project_page';
import ProjectCard from '../components/ProjectCard';

const categories = ["All", "Arsitektur", "Pembangunan", "Legalitas"];

const Projek: React.FC = () => {

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  
  // Filter projek berdasarkan kategori yang dipilih dan pencarian berdasarkan judul
  const filteredProjects = ProjectPage
    .filter((project) => selectedCategory === "All" || project.category === selectedCategory)
    .filter((project) => project.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <section>
  <section className="relative">
    <div
      className="w-full h-[400px] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url(https://res.cloudinary.com/doqmcufwf/image/upload/v1734062776/header_nzpbmh.png)",
      }}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <h1 className="text-4xl font-bold text-gray-900">Projek Kami</h1>
      </motion.div>
    </div>
  </section>

  {/* Projek Desain & Build Section */}
  <section className="bg-white py-20">
    <div className="container mx-auto text-center px-6">
      <motion.div
        className="border-[1px] border-[#5a7c99] inline-block py-2 px-6 rounded-full mb-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.2 }}
      >
        <h3 className="text-[#5a7c99] text-xl font-light">Projek Desain & Build</h3>
      </motion.div>
    </div>

    <div className="container mx-auto p-4">
    <motion.div 
      className="flex justify-end items-center gap-2"
      initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.2 }}>

    {/* Dropdown untuk memilih kategori */}
    <div className="mb-6">
      <label htmlFor="category" className="mr-2">Kategori:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    {/* Input untuk pencarian berdasarkan judul projek */}
    <div className="mb-6 pt-6 sm:pt-0">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Cari projek..."
        className="p-2 border border-gray-300 rounded w-full"
      />
    </div>

    </motion.div>

      {/* Menampilkan daftar projek yang sudah difilter */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>

  {/* Projek Legalitas Section (Tabel) */}
  <section className="bg-white mt-26">
    <div className="container mx-auto text-center px-6">
      <motion.div
        className="border-[1px] border-[#5a7c99] inline-block py-2 px-6 rounded-full mb-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <h3 className="text-[#5a7c99] text-xl font-light">Projek Legalitas</h3>
      </motion.div>
    </div>
  </section>

  <motion.div
    className="container mx-auto overflow-x-auto px-6 mb-20"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.2 }}
  >
    <table className="min-w-full bg-white border border-gray-200 text-gray-900">
      <thead>
        <tr className="border-b bg-[#5a7c99] text-white">
          <th className="px-4 py-2 text-md font-medium text-center">No</th>
          <th className="px-4 py-2 text-md font-medium text-center">Nama Projek</th>
          <th className="px-4 py-2 text-md font-medium text-center">Jenis Perizinan</th>
          <th className="px-4 py-2 text-md font-medium text-center">Tahun</th>
        </tr>
      </thead>
      <tbody>
        {ProjekLegalitas.map((projek) => (
          <motion.tr
            key={projek.no}
            className="border-b"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              delay: 0.2 + projek.no * 0.1,
            }}
          >
            <td className="px-4 py-2 text-sm text-center">{projek.no}</td>
            <td className="px-4 py-2 text-sm">{projek.nama}</td>
            <td className="px-4 py-2 text-sm text-center">{projek.izin}</td>
            <td className="px-4 py-2 text-sm text-center">{projek.tahun}</td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  </motion.div>
</section>

  );
};

export default Projek;
