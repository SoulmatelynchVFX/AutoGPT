import { NetworkStatusMonitor } from "@/services/network-status/NetworkStatusMonitor";
import { PushNotificationProvider } from "@/services/push-notifications/PushNotificationProvider";
import { ReactNode, Suspense } from "react";
import { AutoPilotBridgeProvider } from "@/contexts/AutoPilotBridgeContext";
import { CopilotNotificationsListener } from "./copilot/components/CopilotNotificationsListener/CopilotNotificationsListener";
import { PlatformChrome } from "./PlatformChrome/PlatformChrome";
import { ProActivationProvider } from "@/services/pro-activation/ProActivationProvider";
import { TrialStatusSync } from "@/services/trials/TrialStatusSync";

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return (
    <AutoPilotBridgeProvider>
      <NetworkStatusMonitor />
      <PushNotificationProvider />
      {/* Reads useSearchParams(), which Next.js requires to be wrapped. */}
      <Suspense fallback={null}>
        <CopilotNotificationsListener />
      </Suspense>
      <TrialStatusSync />
      <ProActivationProvider>
        <PlatformChrome>{children}</PlatformChrome>
      </ProActivationProvider>
    </AutoPilotBridgeProvider>
  );
}
