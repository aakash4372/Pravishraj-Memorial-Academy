import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Vector from "@/assets/img/vector.png";

export function Staffsection() {
  const testimonials = [
    {
      quote:
        "With years of academic and industry experience, Mr. R. Nithya Peramkumar brings dedication and innovation to our institution.",
      name: "Mr. R. Nithya Peramkumar",
      designation: "MCA",
      src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Ms. R. Ezhilpriya is known for her strong grasp of electrical systems and her passion for student development.",
      name: "Ms. R. Ezhilpriya",
      designation: "B.E (EEE)",
      src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "A committed academician, Mr. M. Muththusami’s insights in commerce elevate our business education offerings.",
      name: "Mr. M. Muththusami",
      designation: "M.Com",
      src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="relative py-16 px-4 bg-[#23334a] overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-3xl mx-auto px-4 mb-10">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[white] whitespace-nowrap">
            Our Staff
          </h2>
          <div className="flex-1 h-[2px] bg-gray-300 ml-4" />
        </div>
        <p className="text-gray-300 max-w-xl text-base md:text-lg text-left">
          Meet our passionate team of educators and administrators who are
          dedicated to delivering excellence and supporting student success.
        </p>
      </div>

      {/* Animated Testimonials */}
      <AnimatedTestimonials testimonials={testimonials} />

      {/* Bottom-left decorative image */}
      <img
        src={Vector}
        alt="Decorative"
className="absolute bottom-0 left-0 h-72 md:h-96 opacity-50 pointer-events-none"
      />
    </section>
  );
}
