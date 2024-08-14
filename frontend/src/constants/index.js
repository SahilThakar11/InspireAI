export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "Features",
    url: "/#features",
  },
  {
    id: "2",
    title: "Pricing",
    url: "/#pricing",
  },
  {
    id: "3",
    title: "Community",
    url: "/community",
  },
  {
    id: "4",
    title: "Create Images",
    url: "/generate-image",
  },
  {
    id: "5",
    title: "Sign In",
    url: "/signin",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "New Account",
    url: "/new-account",
    onlyMobile: true,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Free",
    description:
      "Get started with our basic image generation service without spending a dime! Ideal for those who are just exploring or testing the capabilities of AI-driven creativity.",
    price: "0",
    features: [
      "Limited to 10 credits",
      "Access to Basic Image Generation",
      "Perfect for trying model features",
      "Community Images access",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description:
      "Unlock the full potential of our advanced image generation tools with the Premium plan. Perfect for creatives and professionals that require high-quality images on a regular basis.",
    price: "9.99",
    features: [
      "500 credits per month",
      "HD Image Generation with superior quality",
      "Access to Premium AI Models",
      "Exclusive access to new features and updates",
    ],
  },
];

export const filters = ["All", "Most Liked", "Recent", "Trending", "HD"];
