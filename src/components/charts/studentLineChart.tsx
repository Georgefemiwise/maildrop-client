import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Legend,
} from "recharts";



interface ChartData {
  year?: string;
  enrolledYear: number;
}

interface StudentLineChartProps {
  studentData?: Student[];
}

const StudentLineChart: React.FC<StudentLineChartProps> = ({
  studentData = [],
}) => {
  // Ensure studentData is defined before proceeding
  if (!studentData) {
    return null; // Or display a loading indicator or an appropriate message
  }

  // Extract relevant data for plotting
  const yearCounts: Record<string, number> = studentData.reduce(
    (accumulator, student) => {
      accumulator[student.year_enrolled] =
        (accumulator[student.year_enrolled] || 0) + 1;
      return accumulator;
    },
    {} as Record<string, number>
  );

  // Convert data to an array of objects
  const chartData: ChartData[] = Object.keys(yearCounts).map((year) => ({
    year,
    enrolledYear: yearCounts[year],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={chartData}
        margin={{ top:20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid
          strokeDasharray="2"
          vertical={false}
        />
        <XAxis dataKey="year" />
        <YAxis />
        <Legend />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Line dataKey="enrolledYear" fill="#8884d8" radius={5}>
          <LabelList dataKey="enrolledYear" position="top" />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StudentLineChart;
