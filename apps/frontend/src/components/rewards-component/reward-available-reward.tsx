import React from "react";

type Reward = {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: number;
  disabled?: boolean;
  extraBadge?: string;
};

const rewards: Reward[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-coffee w-5 h-5"
        aria-hidden="true"
      >
        <path d="M10 2v2"></path>
        <path d="M14 2v2"></path>
        <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path>
        <path d="M6 2v2"></path>
      </svg>
    ),
    title: "Free Coffee",
    description: "Any regular coffee of your choice",
    points: 500,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-cookie w-5 h-5"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
        <path d="M8.5 8.5v.01"></path>
        <path d="M16 15.5v.01"></path>
        <path d="M12 12v.01"></path>
        <path d="M11 17v.01"></path>
        <path d="M7 14v.01"></path>
      </svg>
    ),
    title: "Free Pastry",
    description: "Choose from our daily selection",
    points: 300,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-gift w-5 h-5"
        aria-hidden="true"
      >
        <rect x="3" y="8" width="18" height="4" rx="1"></rect>
        <path d="M12 8v13"></path>
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
      </svg>
    ),
    title: "20% Off Next Order",
    description: "Valid for 30 days",
    points: 200,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-award w-5 h-5"
        aria-hidden="true"
      >
        <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
        <circle cx="12" cy="8" r="6"></circle>
      </svg>
    ),
    title: "Premium Blend",
    description: "Our signature premium coffee blend",
    points: 1000,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-star w-5 h-5"
        aria-hidden="true"
      >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
      </svg>
    ),
    title: "Coffee for a Week",
    description: "7 free regular coffees",
    points: 2000,
    disabled: true,
    extraBadge: "Not enough points",
  },
];

// Simulate user points for demo
const userPoints = 800;

function AvailableReward() {
  return (
    <div>
      <h2 className="mb-4 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-gift w-5 h-5"
          aria-hidden="true"
        >
          <rect x="3" y="8" width="18" height="4" rx="1"></rect>
          <path d="M12 8v13"></path>
          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
        </svg>
        Available Rewards
      </h2>
      <div className="space-y-3">
        {rewards.map((reward) => {
          const notEnoughPoints = userPoints < reward.points;
          const isDisabled = reward.disabled || notEnoughPoints;
          return (
            <div
              key={reward.title}
              data-slot="card"
              className={`bg-card text-card-foreground flex flex-col gap-6 rounded-xl border transition-all ${
                isDisabled ? "opacity-60" : ""
              }`}
            >
              <div data-slot="card-content" className="[&:last-child]:pb-6 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {reward.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{reward.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {reward.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          data-slot="badge"
                          className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 text-xs"
                        >
                          {reward.points} points
                        </span>
                        {isDisabled && reward.extraBadge && (
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground text-xs"
                          >
                            {reward.extraBadge}
                          </span>
                        )}
                        {isDisabled && !reward.extraBadge && notEnoughPoints && (
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground text-xs"
                          >
                            Not enough points
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    data-slot="button"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([className*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 shrink-0"
                    disabled={isDisabled}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AvailableReward;
