'use client';

import React from 'react';
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjekLegalitas } from '../data/projects_legalitas';
import ProjectGallery from "../components/ProjectGallery";


const Projek: React.FC = () => {

  return (
    <section>
      <section className="relative">
        <div
          className="w-full h-[400px] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/doqmcufwf/image/upload/v1734062776/header_nzpbmh.png)",
          }}
          >
          <motion.div className="absolute inset-0 flex items-center justify-center"
           initial={{ y: 100, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, type: "spring", stiffness: 50 }}>
            <h1 className="text-4xl font-bold text-gray-900">
            Projek Kami</h1>
          </motion.div>
        </div>
      </section>
      
      {/* Projek Desain & Build Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center px-6">
          <motion.div
            className=" border-[1px] border-[#5a7c99] inline-block py-2 px-6 rounded-full mb-10"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50, delay:0.2 }}
          >
            <h3 className="text-[#5a7c99] text-xl font-light">
            Projek Desain & Build
            </h3>
          </motion.div>
          </div>
          <div className="container mx-auto px-4 py-8">
            <ProjectGallery projects={projects} />
          </div>
        </section>

        {/* Projek Legalitas Section (Tabel) */}
        <section className="bg-white mt-20">
          <div className="container mx-auto text-center px-6">
          <motion.div
            className="border-[1px] border-[#5a7c99] inline-block py-2 px-6 rounded-full mb-10"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <h3 className="text-[#5a7c99] text-xl font-light">
            Projek Legalitas
            </h3>
          </motion.div>
          </div>
        </section>
        <motion.div 
          className="overflow-x-auto px-6 mb-20"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 50, delay:0.2 }}>
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
                viewport={{once: true}}
                transition={{
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  delay: 0.2 + projek.no * 0.1,
                }}>
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
