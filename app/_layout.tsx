import { AuthContextProvider, useAuth } from "@/context/authContext";
import { Slot, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import "../global.css";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const sengment = useSegments();
  const router = useRouter();

  useEffect(() => {
    //  check that the user is authenticated or not

    if (typeof isAuthenticated === "undefined") return;
    const isApp = sengment[0] == "(app)";

    if (isAuthenticated && !isApp) {
      // redirect to home
      router.replace("/home");
    } else if (!isAuthenticated) {
      // redirect to login
      router.replace("/signIn");
    }
  }, [isAuthenticated]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
};

export default RootLayout;
