import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SiteHeader from "@/components/site-header";
import { ChartLineLabel } from "./line-graph";
import { ChartPieLabel } from "./pie-chart";
import { ChartAreaInteractive } from "./area-chart";

const Dashboard = () => {
  const cardData = [
    {
      title: "Today’s Sales",
      value: "GHS 4,850",
      description: "Compared to yesterday",
      badge: {
        text: "+8%",
        icon: <IconTrendingUp />,
      },
      footerNote: "42 transactions completed today",
    },
    {
      title: "This Month Revenue",
      value: "GHS 85,420",
      description: "Trending up this month",
      badge: {
        text: "+12.5%",
        icon: <IconTrendingUp />,
      },
      footerNote: "Total revenue generated this month",
    },
    {
      title: "Low Stock Items",
      value: "12",
      description: "Require urgent restock",
      badge: {
        text: "5 critical",
        icon: <IconTrendingDown />,
      },
      footerNote: "Items below reorder level",
    },
    {
      title: "Expiring Soon",
      value: "6",
      description: "Within next 30 days",
      badge: {
        text: "GHS 2,300",
        icon: <IconTrendingDown />,
      },
      footerNote: "Inventory at risk of expiry",
    },
  ];

  return (
    <div>
      <div className="sticky top-0 left-0 z-10 border-b bg-background">
        <SiteHeader title="Dashboard" />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-2 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
              {cardData?.map((card, index) => {
                return (
                  <Card key={index} className="@container/card">
                    <CardHeader>
                      <CardDescription>{card?.title}</CardDescription>
                      <CardTitle className="text-xl font-semibold tabular-nums @[250px]/card:text-2xl">
                        {card?.value}
                      </CardTitle>
                      <CardAction>
                        <Badge variant="outline">
                          {card?.badge?.icon}
                          {card?.badge?.text}
                        </Badge>
                      </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                      <div className="line-clamp-1 flex gap-2 font-medium">
                        {card?.description} {card?.badge?.icon}
                      </div>
                      <div className="text-muted-foreground">
                        {card?.footerNote}
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
            <div className="px-2 lg:px-6 grid grid-cols-8 gap-4">
              <div className="col-span-8 lg:col-span-6">
                <ChartLineLabel />
                <div className="mt-10">
                  <div className="flex flex-col gap-4 lg:flex-row">
                    <ChartAreaInteractive />
                    <ChartPieLabel />
                  </div>
                </div>
              </div>
              <div className="col-span-8 lg:col-span-2">
                <div className="rounded-lg border bg-card flex items-center justify-center gap-2">
                  <div className="text-center flex items-center justify-center space-x-2">
                    <h1 className="font-semibold text-md">LIVE UPDATES</h1>
                    <IconTrendingUp className="mx-auto my-4 h-8 w-8 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
