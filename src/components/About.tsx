import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '8+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Cloud Platforms', value: '3' },
    { label: 'Certifications', value: '5' },
  ];

  return (
    <section id="about" className="bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
              <img
                src="/pablo-profile.jpg"
                alt="Pablo Fallas"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Passionate DevOps engineer with a proven track record of designing and implementing
                scalable, secure, and highly available cloud infrastructure.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Specialized in automating complex deployment processes, implementing CI/CD pipelines,
                and fostering DevOps culture across engineering teams.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <p className="text-4xl md:text-5xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
