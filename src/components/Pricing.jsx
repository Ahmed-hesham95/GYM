import React from "react";

export default function Pricing() {
  const plans = [
    {
      title: "Basic Plan",
      price: "$50",
      period: "/Monthly",
      desc: "Perfect for beginners & casual gym-goers",
      features: [
        "Full gym access (off-peak hours)",
        "Access to cardio & weight areas",
        "Locker room & shower use",
        "No commitment - cancel anytime",
      ],
      isPopular: false,
    },
    {
      title: "Starter Plan",
      price: "$55",
      period: "/Monthly",
      desc: "Great for regular fitness enthusiasts",
      features: [
        "Full gym access (any time)",
        "Access to cardio & weight areas",
        "Locker room & locker space",
        "1 Free fitness assessment",
      ],
      isPopular: false,
    },
    {
      title: "Standard Plan",
      price: "$60",
      period: "/Monthly",
      desc: "Our most popular plan — great value!",
      features: [
        "24/7 gym access",
        "Unlimited group fitness classes",
        "Access to all equipment & facilities",
        "1 free personal training session/month",
        "Member mobile app access",
      ],
      isPopular: true, // المميز باللون الأورانج
    },
    {
      title: "Pro Plan",
      price: "$65",
      period: "/Monthly",
      desc: "For advanced members seeking flexibility",
      features: [
        "24/7 gym access + Guest pass",
        "Unlimited group fitness classes",
        "2 free personal training sessions/month",
        "Recovery area access",
      ],
      isPopular: false,
    },
    {
      title: "Premium Plan",
      price: "$70",
      period: "/Monthly",
      desc: "For serious athletes or those wanting more",
      features: [
        "All Standard Plan features",
        "Unlimited personal training sessions",
        "Nutrition coaching included",
        "Sauna & recovery room access",
        "Priority class booking",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="plans" className="py-20 max-w-7xl mx-auto px-6 border-t border-neutral-900">
      <div className="text-center mb-16">
        <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">
          PRICING
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
          FLEXIBLE PLANS FOR EVERY GOAL
        </h2>
      </div>

      {/* Grid يحتوي على 5 كروت بطريقة تجاوبية (Responsive Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl flex flex-col justify-between transition-transform duration-300 ${
              plan.isPopular
                ? "bg-[#ff4500] border-2 border-[#ff4500] text-white shadow-2xl lg:-translate-y-3"
                : "bg-neutral-900/50 border border-neutral-800 text-white"
            }`}
          >
            <div>
              <h3 className="text-lg font-bold">{plan.title}</h3>
              <div className="text-3xl font-extrabold my-3">
                {plan.price}{" "}
                <span
                  className={`text-xs font-normal ${
                    plan.isPopular ? "text-white/80" : "text-neutral-400"
                  }`}
                >
                  {plan.period}
                </span>
              </div>
              <p
                className={`text-xs mb-6 ${
                  plan.isPopular ? "text-white/90 font-semibold" : "text-neutral-400"
                }`}
              >
                {plan.desc}
              </p>
              <ul className="space-y-3 text-xs">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={plan.isPopular ? "text-white" : "text-neutral-300"}
                  >
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
            {/* تم إزالة أزرار "By This Plan" من هنا */}
          </div>
        ))}
      </div>
    </section>
  );
}