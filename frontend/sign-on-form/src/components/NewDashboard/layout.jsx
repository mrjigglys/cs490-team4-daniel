import React from 'react';
import { Sidebar } from '@/components/NewDashboard/DashComponents/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex items-center justify-center h-[69vh] w-[150%] bg-background p-4 dark">
      <div className="w-[95%] h-[90%] bg-card rounded-3xl shadow-xl overflow-hidden flex">
        <Sidebar className="h-full w-64 flex-shrink-0" />
        <main className="flex-1 overflow-hidden p-6 bg-background text-foreground">
          <div className="h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

