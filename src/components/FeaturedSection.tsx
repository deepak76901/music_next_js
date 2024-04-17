"use client";
import coursedata from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/backgroud-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function FeaturedSection() {
  const featuredCourses = coursedata.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-xl text-teal-600">Featured Courses</h2>
          <p className="text-4xl font-semibold">Learn with the Best</p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center sm:mx-5">
          {featuredCourses.map((course: Course) => (
            <div className="flex justify-center" key={course.id}>
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/courses"
          className="bg-gray-200 text-black px-3 py-2 rounded-md"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
