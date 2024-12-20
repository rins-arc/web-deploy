'use client';

import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <motion.section className="relative"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
       >
          <div 
          className="w-full h-96 bg-cover"
           style={{
            backgroundImage: "url(https://res.cloudinary.com/doqmcufwf/image/upload/v1734062821/bg2_rkoyia.png)"
          }}>
            
          </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
        
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="text-center">
            <motion.h2 className="text-3xl sm:text-2xl font-bold text-white"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.2 }}>
              Temukan Solusi Terbaik untuk Proyek Anda
            </motion.h2>
            <motion.p className="text-white mt-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.4 }}>
              Wujudkan Bangunan Impian Anda Bersama Kami
            </motion.p>
            <motion.div className="mt-6 flex justify-center"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.6 }}>
              <Link href="https://wa.me/+6281222500511">
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg flex items-center">
                  <i className="fab fa-whatsapp text-xl mr-2"></i>
                  <p className="font-bold">Hubungi Kami</p>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="bg-gray-100 py-12 pb-20">
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap justify-between">
            
            {/* Logo and Description Section */}
            <motion.div className="w-full md:w-1/3 mb-6 md:mb-0"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}>
              <div className="mb-4">
                <Image src="https://res.cloudinary.com/doqmcufwf/image/upload/v1734062817/logo.png" alt="Logo" width={35} height={30}/>

                </div>
              <h3 className="text-gray-700 font-bold mb-4">CV RINS ARCHITECT</h3>
              <p className="text-gray-600">
                Mewujudkan keinginan Anda dengan jasa arsitektur profesional dan terpercaya.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link href="https://www.facebook.com/profile.php?id=61570381066299" rel="nofollow" className="fab fa-facebook text-2xl text-gray-700"></Link>
                <Link href="http://www.tiktok.com/@rinsarchitect" rel="nofollow" className="fab fa-tiktok text-2xl text-gray-700"></Link>
                <Link href="https://www.instagram.com/rins_arsitek?igsh=NnBpN3pzd2h6bGo4" className="fab fa-instagram text-2xl text-gray-700"></Link>
              </div>
            </motion.div>

            {/* Informasi Section */}
            <motion.div className="w-full md:pl-16 md:w-1/3 mb-6 md:mb-0"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.2 }}>
              <h3 className="text-gray-700 font-bold mb-4">Informasi</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-blue-600">Beranda</Link>
                </li>
                <li>
                  <Link href="/layanan" className="text-gray-600 hover:text-blue-600">Layanan</Link>
                </li>
                <li>
                  <Link href="/projek" className="text-gray-600 hover:text-blue-600">Projek</Link>
                </li>
                <li>
                  <Link href="/tentangKami" className="text-gray-600 hover:text-blue-600">Tentang Kami</Link>
                </li>
                <li>
                  <Link href="/kontak" className="text-gray-600 hover:text-blue-600">Kontak</Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div className="w-full md:w-1/3"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 50, delay: 0.4 }}>
              <h3 className="text-gray-700 font-bold mb-4">Kontak</h3>
              <ul className="space-y-2">
                <li className="text-gray-600"><i className="fas fa-phone-alt mr-2"></i>081 222 500 511</li>
                <li className="text-gray-600"><i className="fab fa-whatsapp mr-2 text-xl"></i>081 222 500 511</li>
                <li className="text-gray-600"><i className="fas fa-envelope mr-2"></i>rinsarchitects@gmail.com</li>
                <li className="text-gray-600"><i className="fas fa-map-marker-alt mr-2"></i>Jalan Slamet Riyadi No. 122 Gayam, Sukoharjo, Jawa Tengah</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    <section className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rins Architect. All Rights Reserved.
        </p>
      </div>
    </section>
    </footer>
  );
};

export default Footer;
