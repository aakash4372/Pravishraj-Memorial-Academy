import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const universities = [
    {
        name: "Alagappa University –",
        programs: {
            "UG Programs": [
                "B.A. Tamil",
                "B.A. English",
                "B.Com (Tamil & English Medium)",
                "B.Com. Computer Applications",
                "B.Sc. Mathematics",
                "B.Sc. Computer Science",
                "B.B.A (Tamil & English Medium)"
            ],
            "PG Programs": [
                "M.A. Tamil",
                "M.A. English",
                "M.A. History (Tamil & English Medium)",
                "M.A. Economics (Tamil & English Medium)",
                "M.Sc. Mathematics",
                "M.Sc. Computer Science",
                "M.Sc. Information Technology",
                "M.Sc. Physics",
                "M.Sc. Chemistry",
                "M.Sc. Botany",
                "M.Sc. Zoology",
                "M.Sc. Psychology",
                "M.Sc. Microbiology",
                "M.Com (Tamil & English Medium)",
                "M.C.A.",
                "M.S.W.",
                "M.Lib.I.Sc (One year Program)",
                "B.Ed. (D.T.Ed Must)"
            ],
            "M.B.A Groups": [
                "Group A – Human Resource Management",
                "Group B – Marketing Management",
                "Group C – Financial Management",
                "Group D – International Business",
                "Group E – Corporate Secretaryship",
                "Group F – Project Management",
                "Group G – Hospital Management",
                "Group H – Tourism Management",
                "Group I – Education Management",
                "Group J – Retail Management",
                "Group K – Technology Management",
                "Group L – Logistics Management",
                "Group M – Corporate Management",
                "Group N – Banking and Finance",
                "Group O – System Management",
                "Group P – Production & Operations Management",
                "Group Q – Co-operative Management"
            ],
            "Diploma Programs": [
                "Artificial Intelligence & Machine Learning",
                "Computer Applications",
                "Cyber Security",
                "Montessori Education"
            ],
            "Certificate Programs": [
                "Astrology (Tamil Medium Only)",
                "C Programming",
                "Gender Studies",
                "GST",
                "Library & Information Science",
                "Office Automation",
                "Web Designing"
            ]
        }
    },
    {
        name: "Bharathidasan University –",
        programs: {
            "UG Programs (Non-Semester)": [
                "B.A. Tamil",
                "B.Lit. Tamil",
                "B.A. English",
                "B.Com (Tamil & English Medium)",
                "B.Com (Banking Management)",
                "B.Sc. Mathematics (Tamil & English Medium)",
                "B.A. Economics (Tamil Medium)",
                "B.A. History (Tamil Medium)",
                "B.A. Political Science",
                "B.A. Public Administration",
                "B.B.A (Tamil & English Medium)",
                "B.Sc. Physics",
                "B.Sc. Chemistry",
                "B.Sc. Botany",
                "B.Sc. Zoology",
                "B.Sc. Geography",
                "B.Sc. Computer Science",
                "B.Sc. Information Technology",
                "B.C.A.",
                "B.Lib.I.Sc (One year Program)"
            ],
            "PG Programs (Non-Semester)": [
                "M.A. Tamil",
                "M.A. English",
                "M.A. Economics (Tamil Medium)",
                "M.A. History (Tamil Medium)",
                "M.A. Political Science",
                "M.A. Public Administration",
                "M.A. Human Resource Management",
                "M.Sc. Mathematics",
                "M.Sc. Chemistry",
                "M.Sc. Physics",
                "M.Sc. Botany",
                "M.Sc. Zoology",
                "M.Sc. Computer Science",
                "M.Sc. Information Technology",
                "M.Sc. Geography",
                "M.Com",
                "M.Com (Banking Management)",
                "M.Com (Finance Management)",
                "M.Lib.I.Sc (One year Program)"
            ],
            "Under-Semester System": [
                "M.B.A. Business Administration",
                "M.C.A."
            ]
        }
    }
];

const CourseCard = ({ program, courses }) => (
    <div className="bg-[#234159] border border-gray-200 rounded-xl p-6 flex flex-col h-[450px] sm:h-[400px] md:h-[450px] min-w-[280px] max-w-[320px] mx-auto">
        <h3 className="text-xl font-semibold text-white mb-4 border-b pb-2 border-indigo-200">
            {program} 
        </h3>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
            <ul className="list-disc list-inside text-white space-y-2">
                {courses.map((course, index) => (
                    <li key={index} className="text-sm leading-relaxed truncate" style={{ whiteSpace: 'nowrap' }}>
                        {course}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const UniversitySection = ({ university }) => {
    const uniqueId = university.name.replace(/\s/g, '-');
    return (
        <div className="rounded-lg p-6 sm:p-8 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#234159] mb-6 text-center sm:text-left">
                {university.name} <span className="text-[#48b06c]">Centre for Distance Education</span>
            </h2>
            <div className="relative">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        nextEl: `.swiper-button-next-${uniqueId}`,
                        prevEl: `.swiper-button-prev-${uniqueId}`,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 4, spaceBetween: 40 },
                    }}
                    className="pb-14"
                >
                    {Object.entries(university.programs).map(([program, courses], index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <CourseCard program={program} courses={courses} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-end gap-2 mt-4 pointer-events-none">
                    <button
                        className={`swiper-button-prev-${uniqueId} bg-[#234159] text-white p-2 rounded-full hover:bg-[#234159ce] transition-colors duration-200 cursor-pointer pointer-events-auto`}
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        className={`swiper-button-next-${uniqueId} bg-[#234159] text-white p-2 rounded-full hover:bg-[#234159ce] transition-colors duration-200 cursor-pointer pointer-events-auto`}
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

const CourseCarousel = () => (
    <div className="font-inter bg-gray-50 min-h-screen py-10">
        <style>
            {`
            .custom-scrollbar::-webkit-scrollbar {
                width: 8px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #94a3b8;
            }
            .swiper-button-prev, .swiper-button-next {
                color: white !important;
                width: 40px !important;
                height: 40px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                background-color: rgb(31 41 55 / var(--tw-bg-opacity)) !important;
                border-radius: 9999px !important;
                transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter !important;
                transition-duration: 200ms !important;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
            .swiper-button-prev:hover, .swiper-button-next:hover {
                background-color: rgb(55 65 81 / var(--tw-bg-opacity)) !important;
            }
            .swiper-button-prev::after, .swiper-button-next::after {
                display: none;
            }
            `}
        </style>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-8xl mx-auto px-4 mb-10">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#234159] whitespace-nowrap">
            University Course Offerings
          </h2>
          <div className="flex-1 h-[2px] bg-gray-300 ml-4" />
        </div>
        <p className="text-gray-700 max-w-xl text-base md:text-lg text-left">
          Empowering learners through quality distance education from Alagappa and Bharathidasan Universities.

        </p>
      </div>
            {universities.map((university, index) => (
                <UniversitySection key={index} university={university} />
            ))}
        </div>
    </div>
);

export default CourseCarousel;