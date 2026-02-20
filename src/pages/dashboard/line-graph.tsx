import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A line chart showing weekly revenue";

const chartData = [
  { day: "Monday", revenue: 1200 },
  { day: "Tuesday", revenue: 1850 },
  { day: "Wednesday", revenue: 980 },
  { day: "Thursday", revenue: 2100 },
  { day: "Friday", revenue: 2500 },
  { day: "Saturday", revenue: 3200 },
  { day: "Sunday", revenue: 1700 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartLineLabel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Revenue</CardTitle>
        <CardDescription>Monday - Sunday</CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Line
              dataKey="revenue"
              type="natural"
              stroke="var(--color-primary)"
              strokeWidth={2}
              dot={{ fill: "var(--color-primary)" }}
              activeDot={{ r: 6 }}
            >
              <LabelList
                dataKey="revenue"
                position="top"
                offset={10}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => `$${value}`}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Revenue increased by 8.4% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total revenue for the current week
        </div>
      </CardFooter>
    </Card>
  );
}
