"use client";
import { useState, useEffect } from "react";
import { BadgeCheck, BadgeX, CalendarCog, Settings } from "lucide-react";
import { Tooltip, useDisclosure } from "@heroui/react";
import withAuth from "@/hocs/withAuth";
import { useAuthStore } from "@/store/authStore";
import ProfileSettingsModal from "@/components/ProfileSettingsModal";
import getUserStripeSubscriptions from "@/api/getUserStripeSubscriptions";
import { CourseProps } from "../types";
import CourseSkeleton from "@/components/CourseSkeleton";
import CourseCardComponent from "@/components/CourseCardComponent";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import createStripePortalLink from "@/api/createStripePortalLink";


const Profile = () => {
  const [subscribedCourses, setSubscribedCourses] = useState([] as CourseProps[]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [creatingPortalLink, setCreatingPortalLink] = useState(false);
  const [subscriptions, setSubscriptions] = useState<Array<object> | null>(null);
  const { user, userData, loading, syncUserData } = useAuthStore();
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  useEffect(() => {
      const retriveCourses = async () => {
        try {
          setLoadingCourses(true);
          const coursesCollection = collection(db, "courses");
          const querySnapshot = await getDocs(coursesCollection);
          const coursesData: CourseProps[] = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...(doc.data() as Omit<CourseProps, 'id'>),
          }));

          const filteredCourses = coursesData.filter(course => {
            return subscriptions?.some((sub: any) => sub.product.id === course.id);
          });

          // console.log(filteredCourses)
          setSubscribedCourses(filteredCourses);
        } catch (error) {
          console.error("Error retrieving courses:", error);
        } finally {
          setLoadingCourses(false);
        }
      };
      retriveCourses();
    }, [subscriptions]);

  useEffect(() => {
    const fetchUserData = async () => {
      await syncUserData();
    };

    fetchUserData();
    const unsubscribe = getUserStripeSubscriptions(setSubscriptions);
    return () => unsubscribe && unsubscribe();
  }, []);

  const handleManageSubscription = async () => {
    setCreatingPortalLink(true);
    await createStripePortalLink();
    // setCreatingPortalLink(false);
  }

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (creatingPortalLink) return <p className="text-center py-10">Redirecting...</p>;

  return (
    <div className="container py-20 px-5">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            Welcome, {userData?.fullName || "User"}!
          </h2>
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-gray-600 text-sm">{userData?.email}</p>
            <div>
              {user?.emailVerified ? (
                <BadgeCheck size={15} color="green" />
              ) : (
                <Tooltip content="Not Verified" placement="right" delay={500} size="sm">
                  <BadgeX size={15} />
                </Tooltip>
              )}
            </div>
          </div>
          {userData?.phone && (
            <p className="text-gray-600 text-sm mt-1">
              Phone: {userData.phone}
            </p>
          )}
        </div>
        <div>
          <button
            onClick={onOpen}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Settings"
          >
            <Settings className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={handleManageSubscription}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Settings"
          >
            <CalendarCog className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Purchased Courses</h3>
        {loadingCourses && (
          <div className="flex gap-5 justify-center">
            <CourseSkeleton />
          </div>
        )}
        <div className="flex flex-wrap gap-8 m-auto align-center">
          {subscriptions ? subscribedCourses.map((course) => (
            <CourseCardComponent
              key={course.id}
              course={course}
            />
          )) : (
            <p className="text-gray-500">
              You haven’t purchased any courses yet.
            </p>
          )}
        </div>
      </div>

      {isOpen && 
        <ProfileSettingsModal 
          isOpen={isOpen} 
          onOpenChange={onOpenChange} 
          onClose={onClose} 
        />}
    </div>
  );
};

export default withAuth(Profile);