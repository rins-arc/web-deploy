'use client';

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CounterSection from "./components/counterSection";
import { CldImage } from 'next-cloudinary';
import ImageProject from "./components/imageProject";
import { projects1 } from './data/projects_desain_home'; 
import { projects2 } from "./data/projects_legalitas_home";
import Link from "next/link";

export default function Home() {
  const { inView, ref } = useInView({
    triggerOnce: true,  
    threshold: 0.5,
  });

  return (
    <div className="width-[100%]">
      <section className="bg-gray-100 text-center">
        <div
          className="min-h-screen bg-cover bg-center relative bg-fixed"
          style={{ backgroundImage: "url('https://res.cloudinary.com/doqmcufwf/image/upload/v1734062822/Background_ab7cmf.png')" }}
        >
          <div
            ref={ref}
            className={`absolute top-0 left-0 w-full h-full flex justify-center md:justify-start items-center px-4 md:px-10 lg:px-20 ${inView ? "animate-fade-in" : ""}`}
          >
            <div className="lg:text-left text-white max-w-3xl sm:text-center md:text-left">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:"spring", stiffness: 50 }}
              >
                RINS ARCHITECT
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mt-4 font-light"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:"spring", stiffness: 50 }}
              >
                ARCHITECTS | PLANNERS | ENGINEERS | CONSULTANTS
              </motion.p>
              <motion.p
                className="text-sm md:text-base mt-6 max-w-[780px]"
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:"spring", stiffness: 50 }}
              >
                Melayani Desain Arsitektur, Desain Interior, Desain Eksterior,
                Desain Lanskap, Pembangunan Rumah dan Villa, IMB/PBG, Sertifikat
                Laik Fungsi, dan berbagai kebutuhan lainnya.
              </motion.p>

              <motion.button
                className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 text-sm md:text-base "
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:"spring", stiffness: 50 }}
              >
                Hubungi Kami
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen lg:py-20 sm:pt-0">
      <div className="mt-8 mx-auto container flex flex-wrap items-center justify-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type:"spring", stiffness: 50 }}
          viewport={{ once: false }}>
        <div className="w-full lg:w-[500px] flex justify-center lg:justify-end mb-8 lg:mb-0">
          <CldImage
            src="https://res.cloudinary.com/doqmcufwf/image/upload/v1734062818/img2_cgeo6d.png"
            alt="Architect working"
            width={600}
            height={500}
            className="w-full h-full object-cover max-w-full lg:max-w-md "
          />
        </div>

        </motion.div>
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-20 lg:pr-8 mb-8 lg:mb-0">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type:"spring", stiffness: 50 }}
            viewport={{ once: false }}>

          <div className="bg-white border-[1px] border-blue-600 inline-block py-2 px-6 rounded-full mb-8">
            <h3 className="text-blue-600 text-[14px] font-light">
              TENTANG KAMI
            </h3>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mx-6 lg:mx-auto">
            Mewujudkan Impian Anda dengan Keunggulan dan Profesionalisme
          </h2>
          <p className="leading-8 mt-4 text-gray-600 mx-6 lg:mx-auto">
            CV. RINS ARCHITECT adalah perusahaan konsultan perencana dan
            kontraktor yang berdiri sejak Januari 2012. Dengan pengalaman
            lebih dari satu dekade, kami menyediakan layanan mulai dari Jasa
            Desain Arsitektur (Interior dan Exterior), Perizinan Bangunan
            (PBG/IMB), hingga Jasa Penerbitan Sertifikat Laik Fungsi Bangunan.
            Dikerjakan oleh team ahli dan profesional bersertifikasi. Kami
            siap mewujudkan kebutuhan anda dengan hasil yang terbaik.
          </p>
          </motion.div>
        </div>
      </div> 
          <CounterSection />
      </section>
      <section className="py-20 bg-gray-100 flex flex-wrap items-center justify-center">
      <div className="container mx-auto text-center px-6">
               
          <motion.div className="bg-white border-[1px] border-blue-600 inline-block py-2 px-6 rounded-full mb-8"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type:"spring", stiffness: 50 }}
              viewport={{ once: false }}>
            <h3 className="text-blue-600 text-[14px] font-light">
              LAYANAN KAMI
            </h3>
          </motion.div>
          <motion.h2 className="text-2xl font-bold text-gray-800 lg:pb-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type:"spring", stiffness: 50, delay:0.2 }}
            viewport={{ once: false }}>
            Solusi Lengkap untuk Semua Kebutuhan Anda
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <motion.button className="bg-white p-6 rounded-lg shadow-lg md:h-[300px]"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type:"spring", stiffness: 50, delay:0.4 }}
              viewport={{ once: false }}>
              <i className="fas fa-home text-blue-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800">
                Desain Hunian / Non Hunian
              </h3>
              <p className="text-gray-600 mt-2">
                Kami melayani desain hunian dan non hunian dengan berbagai tipe
                dan gaya arsitektur sesuai dengan kebutuhan Anda.
              </p>
            </motion.button>
            <motion.button className="bg-white p-6 rounded-lg shadow-lg md:h-[300px]"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type:"spring", stiffness: 50, delay:0.6 }}
              viewport={{ once: false }}>
              <i className="fas fa-tools text-blue-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800">
                Pembangunan / Build
              </h3>
              <p className="text-gray-600 mt-2">
                Pelaksanaan pembangunan dengan kualitas terbaik dan sesuai
                dengan desain yang telah disepakati.
              </p>
            </motion.button>
            <motion.button className="bg-white p-6 rounded-lg shadow-lg md:h-[300px]"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type:"spring", stiffness: 50, delay:0.8 }}
              viewport={{ once: false }}>
              <i className="fas fa-file-alt text-blue-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800">IMB/PBG</h3>
              <p className="text-gray-600 mt-2">
                IMB (Izin Mendirikan Bangunan) dan PBG (Persetujuan Bangunan
                Gedung) untuk legalitas bangunan Anda.
              </p>
            </motion.button>
            <motion.button className="bg-white p-6 rounded-lg shadow-lg"
             initial={{ y: 100, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 1, type:"spring", stiffness: 50, delay:1 }}
             viewport={{ once: false }}>
              <i className="fas fa-certificate text-blue-600 text-3xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-800">
                Sertifikat Laik Fungsi
              </h3>
              <p className="text-gray-600 mt-2">
                Sertifikat Laik Fungsi (SLF) untuk memastikan bangunan Anda
                telah memenuhi standar kelayakan fungsi.
              </p>
            </motion.button>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container mx-auto text-center px-6">
          <motion.div
            className="bg-white border-[1px] border-blue-600 inline-block py-2 px-6 rounded-full mb-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <h3 className="text-blue-600 text-[14px] font-light">
            PROJEK KAMI
            </h3>
          </motion.div>
          <motion.h2
            className="text-2xl font-bold text-gray-800"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.2 }}
          >
            Jelajahi Hasil Karya Terbaik Kami
          </motion.h2>
          <motion.div className="flex justify-between items-center mt-8 mb-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-gray-800">
              Projek & Build
            </h4>
            <Link href="/projek" className="text-blue-600 font-medium flex items-center">
              <span>Lihat Semua</span>
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Gallery Project items */}
            {projects1.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: 'spring',
                stiffness: 50,
                delay: 0.6 + index * 0.2,
              }}
        >
            <ImageProject
              publicId={item.publicId}
              altText={item.altText}
          />
          
          {/* Title and Description */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
        </div>
        <div className="container mx-auto text-center px-6 pt-20">
        <motion.div className="flex justify-between items-center mt-16 mb-8"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-gray-800">
              Projek Legalitas
            </h4>
            <Link href="/projek" className="text-blue-600 font-medium flex items-center">
              <span>Lihat Semua</span>
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Portfolio items */}
            {projects2.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                type: 'spring',
                stiffness: 50,
                delay: 0.8 + index * 0.2,
              }}
        >
            <ImageProject
              publicId={item.publicId}
              altText={item.altText}
          />
          
          {/* Title and Description */}
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
          </div>
      </section>
    </div>
  );
}
