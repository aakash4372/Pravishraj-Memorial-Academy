import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Course Data Organized
const courseData = {
  Alagappa: {
    UG: [
      "B.A. Tamil",
      "B.A. English",
      "B.Com (Tamil & English Medium)",
      "B.Com. Computer Applications",
      "B.Sc. Mathematics",
      "B.Sc. Computer Science",
      "B.B.A (Tamil & English Medium)",
    ],
    PG: [
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
      "M.Com. (Tamil & English Medium)",
      "M.C.A.",
      "M.S.W.",
      "M.Lib.I.Sc (One year Program)",
      "B.Ed. (D.T.Ed Must)",
    ],
    MBA: [
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
      "Group Q – Co-operative Management",
    ],
    Diploma: [
      "Artificial Intelligence & Machine Learning",
      "Computer Applications",
      "Cyber Security",
      "Montessori Education",
    ],
    Certificate: [
      "Astrology (Tamil Medium Only)",
      "C Programming",
      "Gender Studies",
      "GST",
      "Library & Information Science",
      "Office Automation",
      "Web Designing",
    ],
  },
  Bharathidasan: {
    UG: [
      "B.A. Tamil",
      "B.Lit. Tamil",
      "B.A. English",
      "B.Com. (Tamil & English Medium)",
      "B.Com. (Banking Management)",
      "B.Sc. Mathematics (Tamil & English Medium)",
      "B.A. Economics (Tamil Medium)",
      "B.A. History (Tamil Medium)",
      "B.A. Political Science",
      "B.A. Public Administration",
      "B.B.A. (Tamil & English Medium)",
      "B.Sc. Physics",
      "B.Sc. Chemistry",
      "B.Sc. Botany",
      "B.Sc. Zoology",
      "B.Sc. Geography",
      "B.Sc. Computer Science",
      "B.Sc. Information Technology",
      "B.C.A.",
      "B.Lib.I.Sc. (One year Program)",
    ],
    PG: [
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
      "M.Com.",
      "M.Com. (Banking Management)",
      "M.Com. (Finance Management)",
      "M.Lib.I.Sc. (One year Program)",
    ],
    MBA: ["M.B.A. Business Administration"],
    Diploma: [],
    Certificate: [],
  },
};

export function EnquiryFormModal({ isOpen, onOpenChange }) {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    university: "",
    course: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "university") {
      // Reset course selection when university changes
      setFormData({ ...formData, university: value, course: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await fetch("https://pravishraj-memorial-academy.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        alert("Your enquiry has been submitted successfully!");
        onOpenChange(false); // Close the modal
      } else {
        const errorData = await response.json();
        console.error("Error sending email:", errorData.message);
        alert(`Failed to send enquiry: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  // Get courses for the selected university
  const selectedCourseGroups = formData.university
    ? courseData[formData.university]
    : {};

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Enquiry Form</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="university">University</Label>
            <select
              id="university"
              name="university"
              value={formData.university}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select University</option>
              <option value="Alagappa">Alagappa University</option>
              <option value="Bharathidasan">Bharathidasan University</option>
            </select>
          </div>

          {formData.university && (
            <div className="space-y-1">
              <Label htmlFor="course">Course Interested (Select One)</Label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                style={{ maxHeight: "10rem", overflowY: "auto" }}
              >
                <option value="">Select Course</option>
                {Object.entries(selectedCourseGroups).map(([category, courses]) =>
                  courses.length > 0 ? (
                    <optgroup key={category} label={category}>
                      {courses.map((course, idx) => (
                        <option key={idx} value={`${category} – ${course}`}>
                          {course}
                        </option>
                      ))}
                    </optgroup>
                  ) : null
                )}
              </select>
            </div>
          )}

          <div className="space-y-1">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}