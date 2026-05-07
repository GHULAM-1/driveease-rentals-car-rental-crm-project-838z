import Sidebar from '@/components/Sidebar';

const SettingsPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-slate-950 text-white p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Settings</h1>
        </header>
        <div className="space-y-4">
          <section className="bg-slate-900 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Profile Settings</h2>
            <p className="text-slate-400">Manage your account details and preferences.</p>
          </section>
          <section className="bg-slate-900 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Branch Settings</h2>
            <p className="text-slate-400">Set preferences for different branches.</p>
          </section>
          <section className="bg-slate-900 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Notifications Settings</h2>
            <p className="text-slate-400">Manage notification preferences and alerts.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
