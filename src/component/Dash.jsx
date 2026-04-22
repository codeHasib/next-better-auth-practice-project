export default function Dash() {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-200">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col">
        {/* Top Navbar for Mobile */}
        <div className="navbar bg-base-100 lg:hidden shadow-sm">
          <div className="flex-none">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold italic">codeHasib</a>
          </div>
        </div>

        {/* Main Section */}
        <main className="p-6 md:p-10 space-y-8">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight">
                Project Overview
              </h1>
              <p className="text-base-content/60">
                Manage your better-auth integration and user metrics.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-primary shadow-lg">New Project</button>
              <button className="btn btn-outline">Export</button>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">Total Users</div>
                <div className="stat-value text-primary">1,240</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>

            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">Active Sessions</div>
                <div className="stat-value text-secondary">452</div>
                <div className="stat-desc">Better Auth + MongoDB</div>
              </div>
            </div>

            <div className="stats shadow bg-base-100">
              <div className="stat">
                <div className="stat-title">API Latency</div>
                <div className="stat-value">24ms</div>
                <div className="stat-desc text-success">
                  Optimal performance
                </div>
              </div>
            </div>
          </div>

          {/* Table / Content Area */}
          <div className="card bg-base-100 shadow-xl overflow-hidden">
            <div className="card-body p-0">
              <div className="px-6 py-4 border-b border-base-200">
                <h3 className="font-bold text-lg">Recent Users</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hasib</td>
                      <td>hasib@codehasib.com</td>
                      <td>
                        <span className="badge badge-success badge-outline">
                          Admin
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-ghost btn-xs">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Jane Doe</td>
                      <td>jane@example.com</td>
                      <td>
                        <span className="badge badge-ghost badge-outline">
                          User
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-ghost btn-xs">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Sidebar Navigation */}
      <div className="drawer-side z-20">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-6 w-80 min-h-full bg-base-100 text-base-content border-r border-base-200">
          {/* Logo */}
          <li className="mb-10">
            <div className="flex items-center gap-3 hover:bg-transparent px-0">
              <div className="bg-primary text-primary-content rounded-xl p-2 font-black text-xl">
                CH
              </div>
              <span className="text-xl font-black tracking-tighter">
                codeHasib
              </span>
            </div>
          </li>

          <li className="menu-title">Menu</li>
          <li>
            <a className="active font-medium">Dashboard</a>
          </li>
          <li>
            <a>User Management</a>
          </li>
          <li>
            <a>Database (Atlas)</a>
          </li>

          <li className="menu-title mt-6">System</li>
          <li>
            <a>Auth Settings</a>
          </li>
          <li>
            <a>API Keys</a>
          </li>

          {/* Bottom Profile Section */}
          <div className="mt-auto pt-10">
            <div className="flex items-center gap-4 px-4 py-3 bg-base-200 rounded-2xl">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-10">
                  <span>H</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">Hasib</span>
                <span className="text-xs opacity-50">Log out</span>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
