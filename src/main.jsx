import { useState, useEffect } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md bg-opacity-80 border-b ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
            <span className="text-xl font-bold">P2PLedger</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "how it works", "borrow", "lend", "reputation", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`capitalize hover:text-yellow-500 transition-colors ${activeTab === item ? "text-yellow-500 font-semibold" : ""}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>

            <button className="px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium transition-colors hidden md:block">
              Connect Wallet
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden pb-4 px-4 space-y-3 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
            {["home", "how it works", "borrow", "lend", "reputation", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left capitalize py-2 hover:text-yellow-500 transition-colors ${activeTab === item ? "text-yellow-500 font-medium" : ""}`}
              >
                {item}
              </button>
            ))}
            <button className="w-full mt-2 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium transition-colors">
              Connect Wallet
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      {activeTab === "home" && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-transparent to-blue-100 dark:from-yellow-900/20 dark:to-blue-900/20"></div>
          <div className="container mx-auto px-4 py-20 md:py-32 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Decentralized Peer-to-Peer Lending on Bitcoin Blockchain
              </h1>
              <p className="text-lg md:text-xl mb-10 opacity-80 max-w-2xl mx-auto">
                Earn interest or borrow funds directly from peers using Bitcoin and reputation-based trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-medium shadow-lg transform hover:-translate-y-1 transition-all">
                  Get Started
                </button>
                <button className={`px-8 py-3 rounded-lg font-medium border ${darkMode ? "border-gray-600 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"} transition-colors`}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {activeTab === "how it works" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg opacity-80">Transparent, secure, and powered by Bitcoin blockchain technology.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "1. Reputation Score",
                  description:
                    "Your lending/borrowing history is recorded on the blockchain and used to calculate a trust score.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a5 5 0 0 0-5-5v0a4 4 0 0 0-4-4"></path>
                    </svg>
                  ),
                },
                {
                  title: "2. Create Loan Offer",
                  description:
                    "Set loan terms including amount, duration, and interest rate. Backed by smart contracts on Bitcoin blockchain.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  ),
                },
                {
                  title: "3. Smart Contract Execution",
                  description:
                    "Once agreed upon, the loan is executed via Bitcoin-based smart contracts ensuring transparency and security.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  ),
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}
                >
                  <div className="mb-4 text-yellow-500">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="opacity-80">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Borrow Section */}
      {activeTab === "borrow" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Borrow BTC</h2>
              <p className="text-lg opacity-80">Secure loans in Bitcoin with competitive rates based on your reputation score.</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className={`p-8 rounded-xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <form className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium">Loan Amount (BTC)</label>
                    <input
                      type="number"
                      placeholder="e.g., 0.5"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Loan Duration (Days)</label>
                    <input
                      type="number"
                      placeholder="e.g., 30"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Collateral Type</label>
                    <select className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}>
                      <option>BTC</option>
                      <option>ETH</option>
                      <option>USDT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Collateral Amount</label>
                    <input
                      type="number"
                      placeholder="e.g., 1.0"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}
                    />
                  </div>
                  <button type="submit" className="w-full px-6 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors">
                    Submit Loan Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lend Section */}
      {activeTab === "lend" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Lend BTC</h2>
              <p className="text-lg opacity-80">Earn interest by funding peer-to-peer loans secured on the Bitcoin blockchain.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Active Loans Card */}
              <div className={`p-6 rounded-xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h3 className="text-xl font-semibold mb-4">Active Loans</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((loan) => (
                    <div key={loan} className={`p-4 rounded-lg border ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                      <div className="flex justify-between mb-2">
                        <span>BTC 0.25</span>
                        <span className="text-green-500">5.5% APR</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                      <div className="flex justify-between text-sm mt-2 opacity-70">
                        <span>Due: 15 Days</span>
                        <span>Status: Active</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lend Form Card */}
              <div className={`p-6 rounded-xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h3 className="text-xl font-semibold mb-4">Start Lending</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Amount (BTC)</label>
                    <input
                      type="number"
                      placeholder="e.g., 0.1"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Interest Rate (%)</label>
                    <input
                      type="number"
                      placeholder="e.g., 5.0"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Duration (Days)</label>
                    <input
                      type="number"
                      placeholder="e.g., 30"
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}
                    />
                  </div>
                  <button type="submit" className="w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors">
                    Provide Liquidity
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reputation System Section */}
      {activeTab === "reputation" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Reputation System</h2>
              <p className="text-lg opacity-80">Trust built on immutable transaction history stored securely on the blockchain.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className={`p-8 rounded-xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h3 className="text-2xl font-semibold mb-4">What is a Reputation Score?</h3>
                <p className="mb-4 opacity-80">
                  Your reputation score reflects your reliability as a borrower or lender. It's calculated based on your past transactions,
                  repayment history, and user ratings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Timely repayments improve your score
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Positive feedback from lenders boosts credibility
                  </li>
                  <li className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Immutable records ensure fair evaluations
                  </li>
                </ul>
              </div>

              <div className={`p-8 rounded-xl shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h3 className="text-2xl font-semibold mb-4">Benefits of High Reputation</h3>
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-yellow-50"}`}>
                    <h4 className="font-medium mb-1">Lower Interest Rates</h4>
                    <p className="text-sm opacity-80">High reputation borrowers get preferential lending terms.</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-yellow-50"}`}>
                    <h4 className="font-medium mb-1">Higher Loan Limits</h4>
                    <p className="text-sm opacity-80">Proven track record unlocks larger borrowing capacity.</p>
                  </div>
                  <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-yellow-50"}`}>
                    <h4 className="font-medium mb-1">Priority Matching</h4>
                    <p className="text-sm opacity-80">Top-rated users get matched faster with lenders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      </div>
    );
}
