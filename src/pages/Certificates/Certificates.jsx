import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";



// --- Tech Certificates ---
const techCertificates = [
  {
    title: "Introduction to IoT",
    issuer: "Cisco - Networking Academy",
    img: "https://i.ibb.co/kVMQ3cGk/iotPoto.png",
    color: "#34D399",
    link: "https://i.ibb.co/kVMQ3cGk/iotPoto.png",
  },
  {
    title: "Introduction to MERN Stack",
    issuer: "Simple Learn || Skills Up",
    img: "https://i.ibb.co/bRj4xjJq/mern-Stack-Photo.png",
    color: "#60A5FA",
    link: "https://i.ibb.co/bRj4xjJq/mern-Stack-Photo.png",
  },
  {
    title: "AI Fundamentals",
    issuer: "Cisco - Networking Academy",
    img: "https://i.ibb.co/pvdqNp7Q/ai-Fundamentals-Photo.png",
    color: "#EC4899",
    link: "https://i.ibb.co/pvdqNp7Q/ai-Fundamentals-Photo.png",
  },
  {
    title: "PostGRE SQL",
    issuer: "Simple Learn || Skills Up",
    img: "https://i.ibb.co/B5bzNRhx/post-Gre-Photo.png",
    color: "#f800aeff",
    link: "https://i.ibb.co/B5bzNRhx/post-Gre-Photo.png",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Simple Learn || Skills Up",
    img: "https://i.ibb.co/gb75VsW4/dsaPhoto.png",
    color: "#71c7f8ff",
    link: "https://i.ibb.co/gb75VsW4/dsaPhoto.png",
  },
  {
    title: "Machine Learning",
    issuer: "Cognitive Class",
    img: "https://i.ibb.co/gbwNQVc2/sqlPhoto.png",
    color: "#F87171",
    link: "https://i.ibb.co/gbwNQVc2/sqlPhoto.png",
  },
  {
    title: "Generative AI",
    issuer: "Google Cloud",
    img: "https://i.ibb.co/x8LJXw5Q/generative-Ai-Photo.png",
    color: "#81f871ff",
    link: "https://i.ibb.co/x8LJXw5Q/generative-Ai-Photo.png",
  },
  {
    title: "AI-ML",
    issuer: "Analytic Vidya",
    img: "https://i.ibb.co/fzPMpjVy/aiml-Photo.png",
    color: "#f8d971ff",
    link: "https://i.ibb.co/fzPMpjVy/aiml-Photo.png",
  },
  {
    title: "Full Stack Development",
    issuer: "Simple Learn || Skills Up",
    img: "https://i.ibb.co/qMVPVcBY/fullstack-Photo.png",
    color: "#7a71f8ff",
    link: "https://i.ibb.co/qMVPVcBY/fullstack-Photo.png",
  },
];

// --- Co-Curricular Certificates ---
const coCurricularCertificates = [
  {
    title: "Project Manager",
    issuer: "Simple Learn || Skills Up",
    img: "https://i.ibb.co/4nqhzRXY/project-Manager-Photo.png",
    color: "#FBBF24",
    link: "https://i.ibb.co/4nqhzRXY/project-Manager-Photo.png",
  },
  {
    title: "Vigyan Manthan Yatra",
    issuer: "Madhya Pradesh Council of Science & Technology",
    img: "https://i.ibb.co/svWNpjZZ/vigyan-Manthan-Photo.jpg",
    color: "#A78BFA",
    link: "https://i.ibb.co/svWNpjZZ/vigyan-Manthan-Photo.jpg",
  },
  {
    title: "National Level Quiz Compitition",
    issuer: "AISECT",
    img: "https://i.ibb.co/qM2Qz8kV/national-Quiz-Photo.jpg",
    color: "#F472B6",
    link: "https://i.ibb.co/qM2Qz8kV/national-Quiz-Photo.jpg",
  },
  {
    title: "NCC 'C' Certificate",
    issuer: "Goverment of India - ministry of defence",
    img: "https://i.ibb.co/SSxHq6L/ncc-CPhoto.jpg",
    color: "#4ADE80",
    link: "https://i.ibb.co/SSxHq6L/ncc-CPhoto.jpg",
  },
  {
    title: "NCC 'B' Certificate",
    issuer: "Goverment of India - ministry of defence",
    img: "https://i.ibb.co/KgVkDJB/ncc-BPhoto.jpg",
    color: "#4a59deff",
    link: "https://i.ibb.co/KgVkDJB/ncc-BPhoto.jpg",
  },
  {
    title: "Football State Certificate",
    issuer: "Madhya Pradesh Football Association",
    img: "https://i.ibb.co/GvYqbCBy/football-State-Photo.jpg",
    color: "#de4a83ff",
    link: "https://i.ibb.co/GvYqbCBy/football-State-Photo.jpg",
  },
  {
    title: "Industrial Training - AAI",
    issuer: "Airport Athority of India",
    img: "https://i.ibb.co/k6kpm1wN/AAI-certificate.jpg",
    color: "#4ADE80",
    link: "https://i.ibb.co/k6kpm1wN/AAI-certificate.jpg",
  },
  {
    title: "Industrial Training - WCR",
    issuer: "Indian Railways - Western Central Railway",
    img: "https://i.ibb.co/pvz2PJQG/WCR-certificate.jpg",
    color: "#c3de4aff",
    link: "https://i.ibb.co/pvz2PJQG/WCR-certificate.jpg",
  },
  {
    title: "Industrial Training - MPEB",
    issuer: "Madhya Pradesh Electric Board - Lakhnadon",
    img: "https://i.ibb.co/sdrv01wc/MPEB-certificate.jpg",
    color: "#ee941fff",
    link: "https://i.ibb.co/sdrv01wc/MPEB-certificate.jpg",
  },
  
];

export default function Certificate() {
  return (
    <ReactLenis root>
      <main className="bg-black text-white">
        {/* Hero Title Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Certificates
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            My certifications span across technical and co-curricular domains,
            showcasing a diverse range of achievements and experiences.
          </motion.p>
        </section>

        {/* Tech Section */}
        <Section title="Tech Certificates" data={techCertificates} />

        {/* Co-Curricular Section */}
        <Section title="Co-Curricular Certificates" data={coCurricularCertificates} />
      </main>
    </ReactLenis>
  );
}

function Section({ title, data }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="relative">
      <h2 className="text-4xl font-bold py-12 px-6 md:px-16">{title}</h2>
      {data.map((cert, i) => {
        const targetScale = 1 - (data.length - i) * 0.05;
        return (
          <Card
            key={`${title}_${i}`}
            i={i}
            url={cert.img}
            title={cert.title}
            issuer={cert.issuer}
            color={cert.color}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
            link={cert.link}
          />
        );
      })}
    </section>
  );
}

function Card({
  i,
  title,
  issuer,
  url,
  color,
  progress,
  range,
  targetScale,
  link,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
              Certificate {i + 1}
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-[45%] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                <div className="h-[1px] w-12 bg-gray-600" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
              <p className="text-sm text-gray-400">{issuer}</p>
            </div>

            <div className="pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4" />
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm font-medium"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span style={{ color }}>View Certificate</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Prop types
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
