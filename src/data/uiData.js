export const activities = [
  { icon: "🛒", title: "Amazon Purchase", date: "Oct 19, 2025", amount: "-$89.99", color: "loss", chip: "green" },
  { icon: "₿", title: "BTC Purchase", date: "Oct 18, 2025", amount: "-$500.00", color: "loss", chip: "orange" },
  { icon: "💰", title: "Salary Deposit", date: "Oct 15, 2025", amount: "+$3,200.00", color: "gain", chip: "mint" }
];

export const walletVariants = {
  primary: {
    label: "Balance",
    balance: "$12,453.87",
    subBalance: "",
    bottomLabel: "Card Number",
    bottomValue: "•••• 4532",
    cardClass: "",
    topChip: "Main",
    topIcon: "card",
    rightMark: "master"
  },
  bitcoin: {
    label: "BTC Balance",
    balance: "0.4582 BTC",
    subBalance: "≈ $19,244.40",
    bottomLabel: "Wallet",
    bottomValue: "BTC",
    cardClass: "bank-card-bitcoin",
    topChip: "",
    topIcon: "wallet",
    rightMark: "btc"
  },
  ethereum: {
    label: "ETH Balance",
    balance: "5.932 ETH",
    subBalance: "≈ $20,716.40",
    bottomLabel: "Wallet",
    bottomValue: "ETH",
    cardClass: "bank-card-ethereum",
    topChip: "ETH",
    topIcon: "eth-logo",
    rightMark: "eth-logo"
  },
  savings: {
    label: "Savings Balance",
    balance: "$8,920.42",
    subBalance: "Goal $12,000.00",
    bottomLabel: "Account",
    bottomValue: "Savings",
    cardClass: "bank-card-savings",
    topChip: "Save",
    topIcon: "savings-logo",
    rightMark: "savings-logo"
  }
};

export const walletOrder = ["primary", "bitcoin", "ethereum", "savings"];
