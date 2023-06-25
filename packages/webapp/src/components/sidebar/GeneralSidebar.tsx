import React from 'react';
import SidebarOption from './SidebarOption';

function GeneralSidebar() {
  return (
    <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3 lg:h-screen">
      {/* Group 1 */}
      <div>
        <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
          <SidebarOption pathName="/home" icon="HomeIcon" label="Home" />
          <SidebarOption pathName="/analytics" icon="AnalyticsIcon" label="Analytics" />
          <SidebarOption pathName="/budgets" icon="BudgetIcon" label="Budgets" />
          <SidebarOption pathName="/transactions" icon="TransactionIcon" label="Transactions" />
          <SidebarOption pathName="/accounts" icon="AccountIcon" label="Accounts" />
          <br />
          <span className="text-xs font-bold pl-2">ASSETS</span>
          <SidebarOption pathName="/labels" icon="LabelsIcon" label="Labels" />
          <SidebarOption pathName="/categories" icon="CategoriesIcon" label="Categories" />
          <SidebarOption pathName="/triggers" icon="TriggersIcon" label="Triggers" />
          <SidebarOption pathName="/recurringTransactions" icon="RecurringTransactionIcon" label="Recurring Transaction" />
          <hr className="my-4" />
          <SidebarOption pathName="/settings" icon="SettingsIcon" label="Settings" />
        </ul>
      </div>
    </div>
  );
}

export default GeneralSidebar;
