import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import MemberArea from "./components/MemberArea";
import { ViewType } from "./types";

export default function App() {
  const [view, setView] = useState<ViewType>("landing");
  const [userData, setUserData] = useState<{ name: string; email: string; phone: string } | null>(null);
  
  // Shared coupon states
  const [couponCode, setCouponCode] = useState<string>("");
  const [couponDiscount, setCouponDiscount] = useState<number>(0);

  const handleApplyCoupon = (code: string, discount: number) => {
    setCouponCode(code);
    setCouponDiscount(discount);
  };

  const handleLogout = () => {
    setUserData(null);
    setView("landing");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {view === "landing" && (
        <LandingPage
          onNavigate={setView}
          couponCode={couponCode}
          setCouponCode={setCouponCode}
          couponDiscount={couponDiscount}
          setCouponDiscount={setCouponDiscount}
        />
      )}

      {view === "member" && (
        <MemberArea
          userData={userData}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}
