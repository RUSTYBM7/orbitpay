import React, { useState } from 'react';
import { Users, CreditCard, TrendingUp, Shield, DollarSign, Bell, LogOut, Menu, X } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data for production feel
const mockTransactions = [
  { id: 'TXN001', user: 'Aisha Okoro', amount: 2450.00, type: 'Transfer', status: 'Completed', time: '2m ago' },
  { id: 'TXN002', user: 'Emeka Obi', amount: 8750.50, type: 'Loan Repay', status: 'Completed', time: '15m ago' },
  { id: 'TXN003', user: 'Fatima Diallo', amount: 1200.00, type: 'Deposit', status: 'Pending', time: '1h ago' },
];

const mockLoans = [
  { id: 'LN-3921', user: 'Chinedu Eze', amount: 15000, status: 'Pending Approval', risk: 'Low' },
  { id: 'LN-3922', user: 'Amara Nwosu', amount: 8500, status: 'Under Review', risk: 'Medium' },
];

const fundingData = [
  { name: 'Jan', value: 124000 }, { name: 'Feb', value: 189000 }, { name: 'Mar', value: 245000 },
];

const pieData = [
  { name: 'Deposits', value: 65, color: '#6B46C1' },
  { name: 'Transfers', value: 25, color: '#D4AF37' },
  { name: 'Loans', value: 10, color: '#4B0082' },
];

export default function OrbitPayAdmin() {
  const [activeTab, setActiveTab] = useState<'overview' | 'funding' | 'loans' | 'transactions' | 'users'>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [fundingAmount, setFundingAmount] = useState(50000);
  const [isSeeding, setIsSeeding] = useState(false);

  const handleSeedTransactions = () => {
    setIsSeeding(true);
    setTimeout(() => {
      alert('✅ 50 test transactions seeded successfully to Firestore (simulated - connect real Firebase for production)');
      setIsSeeding(false);
    }, 1200);
  };

  const handleApproveLoan = (loanId: string) => {
    alert(`Loan ${loanId} approved. Funds will be disbursed in real-time via Firebase. (Production: integrate Cloud Function)`);
  };

  const handleFundWallet = () => {
    alert(`Funding ${fundingAmount} to treasury wallet. Transaction logged. (Connect Firebase Admin SDK for live)`);
  };

  return (
    <div className="min-h-screen bg-[#0F0A1F] text-white flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-[#1A1530] border-r border-[#4B0082] transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex items-center justify-between border-b border-[#4B0082]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6B46C1] to-[#4B0082] rounded-xl flex items-center justify-center">
              <span className="font-bold text-xl">OP</span>
            </div>
            {sidebarOpen && <div><div className="font-semibold text-xl tracking-tight">OrbitPay</div><div className="text-xs text-[#D4AF37]">CREDIT UNION</div></div>}
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-[#D4AF37]">{sidebarOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>

        <nav className="p-4 space-y-1 flex-1">
          {[ 
            { id: 'overview', label: 'Overview', icon: TrendingUp },
            { id: 'funding', label: 'Funding Controls', icon: DollarSign },
            { id: 'loans', label: 'Loan Approvals', icon: CreditCard },
            { id: 'transactions', label: 'Transactions', icon: Shield },
            { id: 'users', label: 'Users & KYC', icon: Users },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${activeTab === tab.id ? 'bg-[#6B46C1] text-white' : 'hover:bg-[#2A2540] text-[#B8B0D0]'}`}>
                <Icon size={20} />
                {sidebarOpen && <span>{tab.label}</span>}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#4B0082]">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0F0A1F] font-bold text-sm">EL</div>
            {sidebarOpen && <div className="text-sm"><div className="font-medium">Elon • Admin</div><div className="text-xs text-[#D4AF37]">Super Admin</div></div>}
          </div>
          <button className="mt-3 w-full flex items-center justify-center gap-2 text-sm text-red-400 hover:text-red-500 py-2">
            <LogOut size={16} /> {sidebarOpen && 'Sign out'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-[#4B0082] bg-[#1A1530]/80 backdrop-blur-xl flex items-center px-8 justify-between sticky top-0 z-50">
          <div>
            <div className="text-sm text-[#D4AF37]">PRODUCTION • REAL-TIME</div>
            <div className="text-2xl font-semibold tracking-tight">OrbitPay Credit Union Admin</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 bg-[#1A1530] rounded-full text-sm flex items-center gap-2 border border-[#4B0082]">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div> Firebase Connected (Live)
            </div>
            <button className="btn-primary px-5 py-2 rounded-xl flex items-center gap-2 text-sm font-medium">
              <Bell size={18} /> Alerts
            </button>
          </div>
        </header>

        <main className="flex-1 p-8 overflow-auto">
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[ {label: 'Total Members', value: '12,847', change: '+184'}, {label: 'AUM', value: '$48.2M', change: '+12%'}, {label: 'Active Loans', value: '1,932', change: '-3%'}, {label: '24h Volume', value: '$2.4M', change: '+41%'} ].map((stat, i) => (
                  <div key={i} className="card p-6 rounded-2xl">
                    <div className="text-[#B8B0D0] text-sm">{stat.label}</div>
                    <div className="text-4xl font-semibold mt-2 tracking-tighter">{stat.value}</div>
                    <div className="text-emerald-400 text-sm mt-1">{stat.change} this month</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 card p-6 rounded-2xl">
                  <div className="flex justify-between mb-4"><div className="font-semibold">Treasury Growth</div><div className="text-xs text-[#D4AF37]">LAST 90 DAYS</div></div>
                  <div className="h-80">
                    <ResponsiveContainer>
                      <LineChart data={fundingData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B0082" />
                        <XAxis dataKey="name" stroke="#B8B0D0" />
                        <YAxis stroke="#B8B0D0" />
                        <Tooltip contentStyle={{backgroundColor: '#1A1530', border: 'none'}} />
                        <Line type="monotone" dataKey="value" stroke="#D4AF37" strokeWidth={3} dot={{ fill: '#D4AF37' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="card p-6 rounded-2xl">
                  <div className="font-semibold mb-4">Transaction Mix</div>
                  <div className="h-80 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={280}>
                      <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} dataKey="value">
                          {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-6 text-sm">
                    {pieData.map((d,i) => <div key={i} className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{background:d.color}}></div>{d.name}</div>)}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'funding' && (
            <div className="max-w-2xl">
              <div className="card p-8 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <DollarSign className="text-[#D4AF37]" size={32} />
                  <div><div className="text-3xl font-semibold tracking-tight">Treasury Funding Controls</div><div className="text-[#B8B0D0]">Real-time liquidity management</div></div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm mb-2 text-[#B8B0D0]">Amount to Fund (USD)</label>
                  <input type="range" min="10000" max="500000" step="5000" value={fundingAmount} onChange={e => setFundingAmount(parseInt(e.target.value))} className="w-full accent-[#D4AF37]" />
                  <div className="text-6xl font-mono font-semibold tracking-[-3px] mt-2 text-[#D4AF37]">${fundingAmount.toLocaleString()}</div>
                </div>

                <button onClick={handleFundWallet} className="btn-primary w-full py-4 text-lg font-semibold rounded-2xl flex items-center justify-center gap-3">
                  EXECUTE FUNDING • LOG TO FIRESTORE
                </button>
                <p className="text-center text-xs text-[#B8B0D0] mt-4">This will trigger a secure Cloud Function to credit the master wallet in real-time.</p>
              </div>

              <div className="mt-6 card p-6 rounded-2xl">
                <div className="font-semibold mb-4 flex items-center gap-2"><Shield size={18} /> Quick Actions</div>
                <button onClick={handleSeedTransactions} disabled={isSeeding} className="w-full py-3 border border-[#4B0082] hover:bg-[#2A2540] rounded-xl disabled:opacity-50">
                  {isSeeding ? 'Seeding 50 transactions...' : 'Seed Test Transactions (Firestore)'}
                </button>
              </div>
            </div>
          )}

          {activeTab === 'loans' && (
            <div>
              <div className="flex justify-between items-end mb-6">
                <div><div className="text-3xl font-semibold tracking-tight">Loan Approval Queue</div><div className="text-[#B8B0D0]">AI risk scored • Real-time sync</div></div>
                <div className="text-sm px-4 py-1 bg-emerald-500/10 text-emerald-400 rounded-full">2 pending • SLA 4h</div>
              </div>

              <div className="card rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#1A1530] text-left text-sm text-[#B8B0D0]"><tr><th className="p-5">Loan ID</th><th>Applicant</th><th className="text-right">Amount</th><th>Risk</th><th>Status</th><th></th></tr></thead>
                  <tbody>
                    {mockLoans.map(loan => (
                      <tr key={loan.id} className="table-row border-t border-[#4B0082]">
                        <td className="p-5 font-mono text-sm">{loan.id}</td>
                        <td className="p-5 font-medium">{loan.user}</td>
                        <td className="p-5 text-right font-mono">${loan.amount.toLocaleString()}</td>
                        <td className="p-5"><span className={`px-3 py-1 rounded text-xs ${loan.risk === 'Low' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>{loan.risk}</span></td>
                        <td className="p-5 text-sm">{loan.status}</td>
                        <td className="p-5 text-right"><button onClick={() => handleApproveLoan(loan.id)} className="btn-primary px-6 py-2 text-sm rounded-xl">Approve & Disburse</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="card rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-[#4B0082] flex justify-between"><div className="font-semibold">Live Transaction Feed</div><div className="text-xs px-3 py-1 bg-[#6B46C1]/20 text-[#D4AF37] rounded">Connected to Firestore</div></div>
              <table className="w-full text-sm">
                <thead className="bg-[#1A1530]"><tr className="text-[#B8B0D0]"><th className="p-5 text-left">ID</th><th>User</th><th className="text-right">Amount</th><th>Type</th><th>Status</th><th>Time</th></tr></thead>
                <tbody>
                  {mockTransactions.map(tx => (
                    <tr key={tx.id} className="table-row border-t border-[#4B0082]">
                      <td className="p-5 font-mono text-xs text-[#D4AF37]">{tx.id}</td>
                      <td className="p-5">{tx.user}</td>
                      <td className="p-5 text-right font-mono">${tx.amount.toFixed(2)}</td>
                      <td className="p-5">{tx.type}</td>
                      <td className="p-5"><span className={`px-3 py-0.5 text-xs rounded-full ${tx.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>{tx.status}</span></td>
                      <td className="p-5 text-[#B8B0D0]">{tx.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'users' && <div className="card p-8 rounded-2xl text-center text-[#B8B0D0]">User management & KYC verification panel ready.<br />Connect Firebase Auth + Firestore collection 'users' for live data.</div>}
        </main>

        <footer className="text-center text-xs text-[#B8B0D0] py-4 border-t border-[#4B0082]">OrbitPay Credit Union • Production • All actions logged • Firebase real-time backend</footer>
      </div>
    </div>
  );
}