"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { BadgeCheck, BadgeX, Settings } from "lucide-react";
import { Tooltip, useDisclosure } from "@heroui/react";
import withAuth from "@/hocs/withAuth";
import { useAuthStore } from "@/store/authStore";
import ProfileSettingsModal from "@/components/ProfileSettingsModal";
import { User } from "../types";


const Profile = () => {
  const { user, loading: loadingUser } = useAuthStore();
  const [userData, setUserData] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();


  useEffect(() => {
    const fetchUserData = async () => {
      if (user && !loadingUser) {
        const userDocRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data() as User);
          console.log(docSnap.data());
        }

        setLoading(false);
      }
    };

    fetchUserData();
  }, [user, loadingUser]);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="container py-20 px-5">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            Welcome, {userData.fullName || "User"}!
          </h2>
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-gray-600 text-sm">{userData.email}</p>
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
        {userData?.subscriptions?.length > 0 ? (
          <ul className="space-y-2">
            {userData.subscriptions.map((sub, idx: number) => (
              <li key={idx} className="bg-gray-100 p-3 rounded text-gray-800">
                {sub?.courseId}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            You haven’t purchased any courses yet.
          </p>
        )}
      </div>

      {isOpen && <ProfileSettingsModal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} userData={userData} setUserData={setUserData} />}
    </div>
  );
};

export default withAuth(Profile);
