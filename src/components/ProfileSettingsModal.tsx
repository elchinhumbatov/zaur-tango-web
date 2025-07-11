"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  addToast,
} from "@heroui/react";
import { useState } from "react";
import {
  sendEmailVerification,
  updateEmail,
  updateProfile,
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuthStore } from "@/store/authStore";

export default function ProfileSettingsModal({
  isOpen,
  onOpenChange,
  onClose,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onClose: () => void;
}) {
  const { user, userData, logout, syncUserData, deleteUser } = useAuthStore();
  const [fullName, setFullName] = useState(userData?.fullName || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [phone, setPhone] = useState(userData?.phone || "");
  const [msg, setMsg] = useState("");

  const handleChanges = async () => {
    try {
      if (user) {
        const userRef = doc(db, "users", user.uid);

        if (fullName && fullName !== user.displayName) {
          await Promise.all([
            updateProfile(user, { displayName: fullName }),
            updateDoc(userRef, { fullName }),
          ]);
        }

        if (email && email !== user.email) {
          await Promise.all([
            updateEmail(user, email),
            updateDoc(userRef, { email }),
          ]);
        }

        if (phone && phone !== userData?.phone) {
          await updateDoc(userRef, { phone });
        }

        // if (password) {
        //   await updatePassword(user, password);
        // }

        await syncUserData();

        addToast({
          title: "Profile updated successfully",
          // description: "Toast displayed successfully",
          color: 'success',
        })
        onClose();
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes("auth/invalid-email")) {
          setMsg("Invalid email address.");
        } else if (error.message.includes("auth/user-not-found")) {
          setMsg("User not found.");
        } else if (error.message.includes("auth/too-many-requests")) {
          setMsg("Too many requests. Please try again later.");
        } else if (error.message.includes("auth/email-already-in-use")) {
          setMsg("Email already in use.");
        } else if (error.message.includes("auth/weak-password")) {
          setMsg("Password is too weak.");
        }
      } else {
        setMsg("An unknown error occurred.");
      }
    }
  };

  const handleSendVerification = async () => {
    if (user && !user.emailVerified) {
      try {
        await sendEmailVerification(user);
        setMsg("Verification email sent!");
        setTimeout(() => {
          onClose();
        }, 1000);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log(error.message);
          if (error.message.includes("auth/invalid-email")) {
            setMsg("Invalid email address.");
          } else if (error.message.includes("auth/user-not-found")) {
            setMsg("User not found.");
          } else if (error.message.includes("auth/too-many-requests")) {
            setMsg("Too many requests. Please try again later.");
          }
        } else {
          console.log("An unknown error occurred.");
        }
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      await deleteUser();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        setMsg("An error occurred while logging out.");
      } else {
        console.log("An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
        <ModalContent className="py-8 px-4 bg-amber-50 rounded-none m-4">
          <ModalHeader className="flex flex-col gap-2">
            Edit Your Profile
          </ModalHeader>
          <ModalBody>
            <Input
              label="Full Name"
              variant="underlined"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              label="Email"
              variant="underlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Phone"
              variant="underlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </ModalBody>
          <ModalFooter className="flex flex-col gap-4">
            <div className="flex items-end justify-end gap-2">
              <Button
                variant="solid"
                radius="none"
                className="bg-red-300 text-red-600"
                onPress={handleLogout}
              >
                Logout
              </Button>
              {!user?.emailVerified && (
                <Button
                  variant="solid"
                  radius="none"
                  className="bg-gray-400 text-white"
                  onPress={handleSendVerification}
                >
                  Verify email
                </Button>
              )}
              <Button
                onPress={handleChanges}
                variant="solid"
                radius="none"
                className="bg-gray-700 text-white"
              >
                Save Changes
              </Button>
            </div>
            <div>
              <p>{msg}</p>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
