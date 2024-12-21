'use client'

import { motion } from 'framer-motion';

const Layanan = () => {
  return (
    <div>
      <section className="relative">
        <div
          className="w-full h-[400px] bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/doqmcufwf/image/upload/v1734062776/header_nzpbmh.png)",
          }}
          >
          <motion.div className="absolute inset-0 flex items-center justify-center"
           initial={{ y: 100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 1, type: "spring", stiffness: 50 }}>
            <h1 className="text-4xl font-bold text-gray-900">
            Layanan Kami</h1>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto pt-12 md:px-12 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center px-6">
          {/* Service 1 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full lg:w-[450px]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <div className="bg-[#5A7C99] text-white p-6 flex items-center justify-center flex-col">
              <i className="fas fa-home text-4xl"></i>
              <h2 className="text-xl font-bold text-white mt-4">Desain Hunian / Non Hunian</h2>
              <p className="mt-2 text-white text-sm mb-4 text-center">
                Rancang Hunian dan Bangunan Impian Anda
              </p>
            </div>
            <div className="p-6 flex-1">
              <p className="leading-8 text-gray-700 text-center">
                Kami menawarkan desain arsitektur detail untuk hunian dan non-hunian, mencakup konsep, material,
                tata letak interior, eksterior, hingga site plan yang sesuai dengan kebutuhan Anda.
              </p>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full lg:w-[450px]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <div className="bg-[#5A7C99] text-white p-6 flex items-center justify-center flex-col">
              <i className="fas fa-tools text-4xl"></i>
              <h2 className="text-xl font-bold text-white mt-4">Build / Pembangunan</h2>
              <p className="mt-2 text-white text-sm mb-4 text-center">
                Wujudkan Desain Anda Menjadi Nyata
              </p>
            </div>
            <div className="p-6 flex-1">
              <p className="leading-8 text-gray-700 text-center">
                Kami merealisasikan pembangunan sesuai gambar kerja yang sudah disediakan dan direncanakan
                dengan konsep yang matang oleh tenaga profesional dan pengawasan ketat untuk hasil berkualitas.
              </p>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full lg:w-[450px]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <div className="bg-[#5A7C99] text-white p-6 flex items-center justify-center flex-col">
              <i className="fas fa-file-alt text-4xl"></i>
              <h2 className="text-xl font-bold text-white mt-4">IMB / PBG</h2>
              <p className="mt-2 text-white text-sm mb-4 text-center">
                Pastikan Bangunan Anda Memenuhi Ketentuan Hukum
              </p>
            </div>
            <div className="p-6 flex-1">
              <p className="leading-8 text-gray-700 text-center">
                Kami membantu pengurusan izin untuk pembangunan, renovasi, atau perubahan bangunan agar proses
                berjalan lancar dan legal.
              </p>
            </div>
          </motion.div>

          {/* Service 4 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full lg:w-[450px]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <div className="bg-[#5A7C99] text-white p-6 flex items-center justify-center flex-col">
              <i className="fas fa-certificate text-4xl"></i>
              <h2 className="text-xl font-bold text-white mt-4">SLF (Sertifikat Laik Fungsi)</h2>
              <p className="mt-2 text-white text-sm mb-4 text-center">
                Jaminan Keamanan dan Kelaikan Fungsi Bangunan Anda
              </p>
            </div>
            <div className="p-6 flex-1">
              <p className="leading-8 text-gray-700 text-center">
                Kami memastikan bangunan Anda memenuhi standar administratif dan teknis untuk mendapatkan
                Sertifikat Laik Fungsi (SLF).
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Layanan;
