import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative scroll-mt-20 flex items-center">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          {/* Small intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-emerald-400 text-sm font-medium tracking-wider uppercase"
          >
            Senior DevOps Engineer
          </motion.p>

          {/* Main heading */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="block">Pablo</span>
            <span className="block gradient-text">Fallas</span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed"
          >
            Building scalable cloud infrastructure and automating deployment pipelines
            for modern applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="#contact"
              className="magnetic-button px-8 py-4 bg-emerald-500 text-black font-semibold rounded-full hover:bg-emerald-400 transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#experience"
              className="magnetic-button px-8 py-4 border-2 border-zinc-700 text-zinc-100 font-semibold rounded-full hover:border-emerald-500 hover:text-emerald-400 transition-colors"
            >
              View work
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
            <FiArrowDown className="text-zinc-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
