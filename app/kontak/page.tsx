'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Kontak = () => {
  return (
    <div>
      <section className="relative">
        <div
          className="w-full h-[400px] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/doqmcufwf/image/upload/v1734062776/header_nzpbmh.png)",
            //
          }}
          >
          <motion.div className="absolute inset-0 flex items-center justify-center"
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, type: "spring", stiffness: 50 }}>
            <h1 className="text-4xl font-bold text-gray-900">
            Kontak Kami</h1>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          className="container text-gray-900 px-14 md:pt-16"
          initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type:"spring", stiffness: 50 }}>
          <h2 className="lg:justify-items-start text-3xl font-bold mb-6">
            Mari Wujudkan Ide Anda Bersama Kami!
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <i className="fas fa-phone-alt mr-4"></i>
              <span>081 222 500 511</span>
            </div>
            <div className="flex items-center">
              <i className="fab fa-whatsapp text-xl mr-4"></i>
              <span>081 222 500 511</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope mr-4"></i>
              <span>rinsarchitects@gmail.com</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt mr-4"></i>
              <span>
                Jalan Slamet Riyadi No. 122 Gayam, Sukoharjo, Jawa Tengah
              </span>
            </div>
          </div>
          <div className="mt-6">
            <span>Follow Social Media kami</span>
            <div className="flex space-x-4 mt-2 py-2">
            <Link href="https://www.facebook.com/profile.php?id=61570381066299" className="fab fa-facebook text-3xl text-gray-900"></Link>
            <Link href="http://www.tiktok.com/@rinsarchitect" className="fab fa-tiktok text-3xl text-gray-900"></Link>
            <Link href="https://www.instagram.com/rins_arsitek?igsh=NnBpN3pzd2h6bGo4"className="fab fa-instagram text-3xl text-gray-900"></Link>
            </div>
          </div>
        </motion.div>
        <motion.div 
            className="container mx-auto items-center justify-items-center pb-8 rounded-lg"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type:"spring", stiffness: 50 }}
            >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15815.614479264272!2d110.83033715541994!3d-7.693492099999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3bb64ffe84bb%3A0xdd8640b208025e6a!2sRins%20Arsitek!5e0!3m2!1sen!2sid!4v1733384802740!5m2!1sen!2sid"
            width="90%"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            className="rounded-lg"
          ></iframe>
         </motion.div>
      </section>
    </div>
  );
};

export default Kontak;
