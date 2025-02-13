import { useState } from "react";
import { FaPhone, FaGlobe, FaCheckCircle } from "react-icons/fa";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import toast from "react-hot-toast";
import { Meteors } from "@/components/magicui/meteors";
import bg from "../assets/study-abroad.jpg";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function StudyAbroad() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Meteors number={60} className="z-20 text-2xl" />
      {/* Hero Section */}
      <section
        style={{ backgroundImage: `url(${bg})` }}
        className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center text-white flex items-center justify-center px-4"
      >
        <div className="absolute"></div>
        <div className="absolute z-10 text-center max-w-lg lg:right-48 lg:bottom-16">
          <p className="mt-2 text-lg md:text-base font-semibold">
            Apply now and start your medical journey!
          </p>
          <Button className="mt-4 bg-white text-blue-600 hover:text-white">
            Apply Now
          </Button>
        </div>
      </section>

      {/* why Study */}
      <section className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-semibold">Why Study MBBS Abroad?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 ">
          <Card className="p-2 relative">
            <CardContent>
              <FaGlobe className="text-blue-600 text-4xl mx-auto" />
              <h3 className="mt-4 font-semibold">Global Recognition</h3>
              <p>Get internationally recognized degrees.</p>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
          <Card className="p-2 relative">
            <CardContent>
              <FaCheckCircle className="text-blue-600 text-4xl mx-auto" />
              <h3 className="mt-4 font-semibold">Affordable Tuition</h3>
              <p>Lower fees compared to many private institutions.</p>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
          <Card className="p-2 relative">
            <CardContent>
              <FaPhone className="text-blue-600 text-4xl mx-auto" />
              <h3 className="mt-4 font-semibold">Easy Admission</h3>
              <p>No entrance exams, straightforward process.</p>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        </div>
      </section>

      {/* countries */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-center">
          Top Countries for MBBS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            "Russia",
            "Uzbekistan",
            "Kazakhstan",
            "Philippines",
            "Georgia",
            "Kyrgyzstan",
            "Egypt",
          ].map((country) => (
            <div
              key={country}
              className="bg-white shadow-md p-4 text-center rounded-lg"
            >
              {country}
            </div>
          ))}
        </div>
      </section>

      {/* admission process */}
      <section className="bg-gray-200 py-12 text-center">
        <h2 className="text-2xl font-semibold">
          Admission Process & Eligibility
        </h2>
        <p className="mt-4">
          Step 1: Choose a country | Step 2: Submit Documents | Step 3: Get
          Admission Letter | Step 4: Apply for Visa
        </p>
      </section>

      {/* Lead Form */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-center">Apply Now</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto mt-6 bg-white p-6 shadow-md rounded-lg"
        >
          <Input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="mb-4"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="mb-4"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="mb-4"
          />
          <Input
            name="country"
            placeholder="Preferred Country"
            onChange={handleChange}
            required
            className="mb-4"
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 hover:text-black"
          >
            Submit
          </Button>
        </form>
      </section>
    </div>
  );
}
