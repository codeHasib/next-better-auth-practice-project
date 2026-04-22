import { useSession } from "@/lib/auth-client";
import { Button, Chip, Avatar } from "@heroui/react";

export default function Dash() {
  // Sample Data
  const { data, isPending } = useSession();

  if (isPending) {
    return <p>Loading...</p>;
  }

  const userName = data?.user?.name;
  const userEmail = data?.user?.email;

  if (!data) {
    return <h2>No data to show</h2>;
  }
  const recentUsers = [
    { id: 1, name: userName, email: userEmail, status: "Success" },
  ];

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 p-6 flex flex-col">
        <div className="font-bold text-xl mb-10 text-blue-600">codeHasib</div>
        <nav className="space-y-2 flex-grow">
          <Button
            variant="flat"
            color="primary"
            className="w-full justify-start"
          >
            Dashboard
          </Button>
          <Button variant="light" className="w-full justify-start">
            Settings
          </Button>
        </nav>
        <div className="flex items-center gap-3 pt-4 border-t">
          <Avatar size="sm" name="H" />
          <span className="text-sm font-medium">Hasib</span>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Overview</h1>

        {/* Custom "Table" using Divs to avoid Collection Errors */}
        <div className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b bg-slate-50 flex justify-between font-bold text-xs text-slate-500 uppercase tracking-wider">
            <span className="w-1/3">User</span>
            <span className="w-1/3 text-center">Status</span>
            <span className="w-1/3 text-right">Action</span>
          </div>

          <div className="divide-y divide-slate-100">
            {recentUsers.map((user) => (
              <div
                key={user.id}
                className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <div className="w-1/3 flex flex-col">
                  <span className="font-semibold text-sm">{user.name}</span>
                  <span className="text-xs text-slate-400">{user.email}</span>
                </div>
                <div className="w-1/3 flex justify-center">
                  <Chip
                    size="sm"
                    color={user.status === "Success" ? "success" : "warning"}
                    variant="flat"
                  >
                    {user.status}
                  </Chip>
                </div>
                <div className="w-1/3 flex justify-end">
                  <Button size="sm" variant="light">
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
