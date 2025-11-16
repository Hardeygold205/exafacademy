import React from "react";
import { Award, Users, TrendingUp } from "lucide-react";

export default function OverView() {
  const stats = [
    { icon: Users, value: "5000+", label: "Active Students" },
    { icon: Award, value: "50+", label: "Expert Instructors" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  return (
    <div className="relative bg-linear-to-br from-gray-50 to-gray-100 py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Developed for your <br />
              <span className="text-green-600 relative">
                personal growth
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none">
                  <path
                    d="M1 5.5C50 2 100 2 199 5.5"
                    stroke="#16a34a"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Since we started in 2021, we&apos;ve believed that good business
              is about putting humans in the positions that allow them to be
              their best.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="pt-4">
              <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div> */}
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                width="792"
                height="477"
                src="https://www.youtube.com/embed/U5uspvu_aTs"
                title="About the Agribusiness Extension Academy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                frameBorder="0"
                className="w-full h-100 object-cover"></iframe>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-300 rounded-full blur-3xl opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
