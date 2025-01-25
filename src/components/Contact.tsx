import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi';

const Contact = () => {
  const contacts = [
    { icon: FiMail, label: 'Email', value: 'pablo@pablofallas.name', href: 'mailto:pablo@pablofallas.name' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/pfallasro', href: 'https://github.com/pfallasro' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/pablofallas', href: 'https://linkedin.com/in/pablofallas' },
  ];

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-8 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold">
              Let's work <span className="gradient-text">together</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
              I'm always interested in hearing about new opportunities and challenging projects.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="card-hover group bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-emerald-500 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-emerald-400" />
                    <FiArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider mb-2">{contact.label}</p>
                  <p className="text-zinc-300 font-medium">{contact.value}</p>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center pt-16 pb-8"
          >
            <p className="text-zinc-600 text-sm">
              © 2025 Pablo Fallas. Built with React + TypeScript + Tailwind CSS
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
