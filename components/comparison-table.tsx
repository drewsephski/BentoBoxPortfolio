"use client";

import { useState } from "react";

interface ComparisonTableProps {
  data: {
    platform: string;
    baseCost: string;
    totalCost: string;
    features: string[];
    recommended?: boolean;
  }[];
}

export function ComparisonTable({ data }: ComparisonTableProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-6 py-4 text-left font-semibold text-foreground">
                Platform
              </th>
              <th className="px-6 py-4 text-left font-semibold text-foreground">
                Base Cost
              </th>
              <th className="px-6 py-4 text-left font-semibold text-foreground">
                Total Est. Cost/Min
              </th>
              <th className="px-6 py-4 text-left font-semibold text-foreground">
                Key Features
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.platform}
                className={`border-b border-border transition-all duration-200 ${
                  hoveredRow === index ? "bg-muted/50" : ""
                } ${
                  row.recommended ? "bg-primary/5 hover:bg-primary/10" : ""
                }`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      {row.platform}
                    </span>
                    {row.recommended && (
                      <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-sm text-foreground">
                  {row.baseCost}
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-sm text-foreground">
                    {row.totalCost}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    {row.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
