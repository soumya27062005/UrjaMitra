import { EnergyCard } from "@/components/EnergyCard";
import { EnergyChart } from "@/components/EnergyChart";
import { CommunityImpact } from "@/components/CommunityImpact";
import { StatusPanel } from "@/components/StatusPanel";
import { Sun, Battery, Zap, IndianRupee } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-6">
      {/* Energy Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <EnergyCard
          title="Solar Generation"
          value="4.2"
          unit="kW"
          subtitle="Peak: 6.5 kW at 12:30 PM"
          icon={<Sun className="w-6 h-6 text-energy-orange" />}
          variant="solar"
        />
        <EnergyCard
          title="Battery Storage"
          value="88"
          unit="%"
          subtitle="12.5 kWh remaining"
          icon={<Battery className="w-6 h-6 text-energy-green" />}
          variant="battery"
        />
        <EnergyCard
          title="Current Usage"
          value="3.1"
          unit="kW"
          subtitle="47 homes connected"
          icon={<Zap className="w-6 h-6 text-energy-blue" />}
          variant="consumption"
        />
        <EnergyCard
          title="Daily Savings"
          value="₹156"
          unit=""
          subtitle="vs grid electricity"
          icon={<IndianRupee className="w-6 h-6 text-energy-yellow" />}
          variant="savings"
        />
      </div>

      {/* Charts and Monitoring */}
      <div className="lg:col-span-2">
        <EnergyChart />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommunityImpact />
        <StatusPanel />
      </div>
    </div>
  );
};

export default Index;
