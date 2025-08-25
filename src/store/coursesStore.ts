import { CourseProps } from "@/app/types";
import { create } from "zustand";

interface CoursesStore {
  courses: CourseProps[];
  addCourse: (course: CourseProps) => void;
  removeCourse: (id: string) => void;
  updateCourse: (id: string, updatedCourse: Partial<CourseProps>) => void;
  getCourse: (id: string) => CourseProps | undefined;
}

const useCoursesStore = create<CoursesStore>((set) => ({
  courses: [],
  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
  removeCourse: (id) =>
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== id),
    })),
  updateCourse: (id, updatedCourse) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === id ? { ...course, ...updatedCourse } : course
      ),
    })),
  getCourse: (id: string): CourseProps | undefined =>
    useCoursesStore
      .getState()
      .courses.find((course: CourseProps) => course.id === id),
}));

export default useCoursesStore;
