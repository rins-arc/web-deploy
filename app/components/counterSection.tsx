import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const CounterSection = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Fungsi untuk animasi counter
  const animateCounter = (
    setCount: (value: number) => void, 
    target: number,
    duration: number
  ) => {
    const start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    let current = start;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) clearInterval(timer);
    }, stepTime);
  };

  useEffect(() => {
    animateCounter(setCount1, 12, 2000);
    animateCounter(setCount2, 100, 2000);
    animateCounter(setCount3, 98, 2000);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      className="px-2"
    >
      <div
          className="bg-[#5A7C99] w-full max-w-[1040px] mt-6 lg:mt-20 mb-16 mx-auto flex justify-center rounded-full"
        >
       <div className="text-white rounded-lg p-4 w-full sm:w-auto mx-auto text-center">
            <h3 className="lg:text-4xl text-3xl font-bold">{count1}+</h3>
            <p className="lg:text-[14px] text-[10px] mt-2">Tahun Pengalaman</p>
          </div>

          <div className="text-white rounded-lg p-4 w-full sm:w-auto mx-auto text-center">
            <h3 className="lg:text-4xl text-3xl font-bold">{count2}+</h3>
            <p className="lg:text-[14px] text-[10px] mt-2">Proyek Selesai</p>
          </div>

          <div className="text-white rounded-lg p-4 w-full sm:w-auto mx-auto text-center">
            <h3 className="lg:text-4xl text-3xl font-bold">{count3}%</h3>
            <p className="lg:text-[14px] text-[10px] mt-2">Kepuasan Klien</p>
          </div>
        </div>
    </motion.div>
  );
};

export default CounterSection;
