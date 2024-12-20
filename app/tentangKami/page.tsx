'use client';

import React from 'react';
import { CldImage } from 'next-cloudinary';
import { motion } from 'framer-motion';
import Image from 'next/image';

const tentangKami = () => {
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
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 50 }}>
                    <h1 className="text-4xl font-bold text-gray-900">
                    Tentang Kami</h1>
                </motion.div>
                </div>
            </section>

            <main>
                <section className="container p-8 mx-auto">
                        <div className="flex flex-col md:flex-row mx-auto justify-items-center items-center">
                            <div className=" md:w-1/2 mb-6 md:mb-0">
                                <CldImage src="https://res.cloudinary.com/doqmcufwf/image/upload/v1734159475/Foto_2_zohc53.jpg" alt="iamge3" width={600} height={400} className="w-full h-full object-cover" />
                            </div>
                            <div className="relative md:w-1/2 md:pl-6 flex items-center lg:justify-start sm:justify-items-center">
                            <div className="lg:px-8 lg:mx-auto text-left lg:justify-start sm:justify-items-center">
                                <p className="font-normal leading-8 mt-4 text-gray-600 mx-6 lg:mx-auto"> CV. RINS ARCHITECT adalah perusahaan yang bergerak di bidang jasa konsultan perencana dan kontraktor. Pelayanan kami meliputi Desain Arsitektur, Desain Interior, Desain Landskap, Desain Tata Kota, Perencanaan Struktur dan MEP, Jasa Perijinan dan Jasa Fungsi Kelaikan Bangunan serta Kontraktor bangunan sipil. Team kami terdiri dari Arsitek, Teknik Sipil, dan tenaga ahli profesional lainnya.</p>
                                </div>
                            </div>
                    </div>
                </section>

                    <div className="w-full bg-[#5A7C99] py-24 mx-auto">
                        <div className="md:mx-12 md:px-24 text-left md:text-left">
                            <p className="font-normal leading-8 mt-4 text-white mx-10 px-2 lg:mx-auto">
                                CV. RINS ARCHITECT telah berdiri sejak Januari 2012 dengan nama SERRA ARCHITECT dan PT. ASP (Anugerah Sakhaserra Permai). Kami sudah berpengalaman baik dibidang desain, build dan juga perijinan.
                            </p>
                            <p className="font-normal leading-8 mt-4 text-white mx-10 px-2 lg:mx-auto">
                                Kami melayani mulai dari nol, dari yang belum terwujud kita wujudkan, mulai dari yang belum terhitung kita hitungkan, mulai dari yang belum ada gambar kita gambarkan, mulai dari yang belum ada ijin kita layani untuk pengurusan perijinannya.
                            </p>
                        </div>
                    </div>


                <section>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2">
                        <CldImage
                                className=" object-cover bg-blend-darken bg-black"
                                src="https://res.cloudinary.com/doqmcufwf/image/upload/v1734166275/image4_gwx994.png"
                                width={800}
                                height={800}
                                crop="fill" 
                                quality="auto"
                                format="auto"   
                                alt="Description of image"
                                />
                        </div>
                        <div className="w-full md:w-1/2 md:p-20 lg:px-12  py-12 px-8">
                            <h1 className="text-center text-2xl font-bold mb-4 text-gray-600 ">Visi Kami</h1>
                            <p className="text-center md:text-left mb-8 text-gray-600">Menjadi perusahaan konsultan penyedia jasa yang terpercaya, profesional dan berdaya saing unggul.</p>
                            <h2 className="text-center text-2xl font-bold mb-4 text-gray-600">Misi Kami</h2>
                            <h3 className="text-lg font-bold mb-2 text-gray-600">Misi Pelayanan :</h3>
                            <ul className="list-disc list-inside mb-8 text-gray-600">
                                <li>Memberikan layanan kepada customer dengan komitmen layanan yang terbaik.</li>
                                <li>Mengutamakan kepuasan dan hubungan baik dengan customer.</li>
                            </ul>
                            <h3 className="text-lg font-bold mb-2 text-gray-600">Misi Kerja :</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Menjunjung tinggi nilai kejujuran, disiplin dan tanggung jawab terhadap setiap pekerjaan yang dipercayakan.</li>
                                <li>Memudahkan dunia usaha dan masyarakat dalam mendapatkan perijinan yang dibutuhkan.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </section>

                <section>
                    <div className="bg-[#5a7c99] my-auto">
                        <div className="items-center flex flex-col md:flex-row">
                        <div className="relative md:w-1/2 md:pl-6 flex items-center justify-start">
                        <div className="mx-6 lg:mx-auto w-full py-12 px-8">
                        <h2 className="text-center text-2xl font-bold mb-4 text-white">Direksi</h2>
                                <ul className="list-none leading-8 mt-4 text-white">
                                    <li className="mb-2"><strong>Direktur :</strong> Agung Nugraha, S.Pd</li>
                                    <li className="mb-2"><strong>Komisaris :</strong> Feri Setiawan</li>
                                    <li className="mb-2"><strong>Manager Teknik :</strong> Rini Setyawati, ST</li>
                                    <li className="mb-2"><strong>Manager Pelaksanaan :</strong> Ahmad Adi Priyanto, ST</li>
                                    <li className="mb-2"><strong>Staff Administrasi :</strong> Siti Nurlaila A, S.T.</li>
                                </ul>
                            </div>
                            </div>
                            <div className="md:w-1/2">
                            <CldImage
                                className="w-full h-auto"
                                src="https://res.cloudinary.com/doqmcufwf/image/upload/v1734159472/Foto_1_qg6r5x.jpg"
                                width={800}
                                height={600}
                                crop="fit" 
                                quality="auto"  
                                format="auto"  
                                alt="Description of image"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-6 mt-12 min-h-screen">
                    <div className="bg-white p-8">
                        <h2 className="text-[25px] font-bold mb-12 text-center">Rins Architect Team</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <Image src="https://placehold.co/150x150/png" alt="Agung Nugraha, S.Pd" width={150} height={150}  className="w-40 h-40 mx-auto rounded-full mb-2"/>
                                <p>Agung Nugraha, S.Pd</p>
                            </div>
                            <div className="text-center">
                                <Image src="https://placehold.co/150x150/png" alt="Feri Setiawan" width={150} height={150} className="w-40 h-40 mx-auto rounded-full mb-2"/>
                                <p>Feri Setiawan</p>
                            </div>
                            <div className="text-center">
                                <Image src="https://placehold.co/150x150/png" alt="Wisnu Setyo Aji, S.T." width={150} height={150} className="w-40 h-40 mx-auto rounded-full mb-2"/>
                                <p>Wisnu Setyo Aji, S.T.</p>
                            </div>
                            <div className="text-center">
                                <Image src="https://placehold.co/150x150/png" alt="Sutrisno" width={150} height={150} className="w-40 h-40 mx-auto rounded-full mb-2"/>
                                <p>Sutrisno</p>
                            </div>
                            <div className="text-center">
                                <Image src="https://placehold.co/150x150/png" alt="Rini Setyawati, ST" width={150} height={150} className="w-40 h-40 mx-auto rounded-full mb-2"/>
                                <p>Rini Setyawati, ST</p>
                            </div>
                            <div className="text-center">
                                <Image src="https://placehold.co/150x150/png" alt="Siti Nurlaila A, S.T." width={150} height={150} className="w-40 h-40 mx-auto rounded-full mb-2"/>
                                <p>Siti Nurlaila A, S.T.</p>
                            </div>
                            <div className="text-center">
                                <Image src="https://placehold.co/150x150/png" alt="Nana Tri W" width={150} height={150} className="w-40 h-40 mx-auto rounded-full mb-2"/>
                                <p>Nana Tri W</p>
                            </div>
                            <div className="text-center">
                                <Image src="https://placehold.co/150x150/png" alt="Nana Tri W" width={150} height={150} className="w-40 h-40 mx-auto rounded-full mb-2"/>
                                <p>Nana Tri W</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default tentangKami;