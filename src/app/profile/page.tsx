"use client";

import { useState, useEffect } from "react";
import { BadgeCheck, BadgeX, Settings } from "lucide-react";
import { Tooltip, useDisclosure } from "@heroui/react";
import withAuth from "@/hocs/withAuth";
import { useAuthStore } from "@/store/authStore";
import ProfileSettingsModal from "@/components/ProfileSettingsModal";
import getUserStripeSubscriptions from "@/api/getUserStripeSubscriptions";
// import useCoursesStore from "@/store/coursesStore";


const Profile = () => {
  const [subscription, setSubscription] = useState<object | null>(null);
  const { user, userData, loading, syncUserData } = useAuthStore();
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  // const { getCourse } = useCoursesStore();


  // useLayoutEffect(() => {
  //   if (!loading && !user) {
  //     if (!user) {
  //       router.push("/login");
  //     } else {
  //       const fetchUserData = async () => {
  //         await syncUserData();
  //       };

  //       fetchUserData();
  //     }
  //   }
  // }, [loading, user]);
  
  useEffect(() => {
    const fetchUserData = async () => {
      await syncUserData();
    };

    fetchUserData();
  });

  useEffect(() => {
    const unsubscribe = getUserStripeSubscriptions(setSubscription);
    return () => unsubscribe && unsubscribe();
  }, []);
  
  // useEffect(() => {
  //   console.log(subscription)

  // }, [subscription]);

  if (loading) return <p className="text-center py-10">Loading...</p>;

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
        </div>
        <button
          onClick={onOpen}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Settings"
        >
          <Settings className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Purchased Courses</h3>
        {subscription ? (
        // {userData?.subscriptions ? (
          <ul className="space-y-2">
            
            {/* {Object.entries(userData.subscriptions).map(([key, value]) => (
              <li key={key} className="bg-gray-100 p-3 rounded text-gray-800">
                <p>Pack Name: {value?.title}</p>
                <p>Subscribe At: {value?.subscribeAt}</p>
                <p>Subscribtion ends at: {value?.subscribeAt}</p>
              </li>
            ))} */}
          </ul>
        ) : (
          <p className="text-gray-500">
            You haven’t purchased any courses yet.
          </p>
        )}
      </div>

      {isOpen && <ProfileSettingsModal 
                    isOpen={isOpen} 
                    onOpenChange={onOpenChange} 
                    onClose={onClose} 
                  />}
    </div>
  );
};

export default withAuth(Profile);