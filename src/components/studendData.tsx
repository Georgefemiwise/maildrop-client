import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface Student {
  id: any;
  index: string;
  academic_year: string;
  program: string;
  email: string;
  course: string;
  graduation_year: string;
}

interface ChartData {
  program: string;
  count: number;
}

interface StudentChartProps {
  studentData?: Student[];
}

const StudentChart: React.FC<StudentChartProps> = ({ studentData=[] }) => {
  // Ensure studentData is defined before proceeding
  if (!studentData) {
    return null; // Or display a loading indicator or an appropriate message
  }

  // Extract relevant data for plotting
  const programCounts: Record<string, number> = studentData.reduce(
    (accumulator, student) => {
      accumulator[student.program] = (accumulator[student.program] || 0) + 1;
      return accumulator;
    },
    {} as Record<string, number>
  );

  // Convert data to an array of objects
  const chartData: ChartData[] = Object.keys(programCounts).map((program) => ({
    program,
    count: programCounts[program],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="program" />
        <YAxis />
        <Tooltip cursor={{fill:'transparent'}}/>
        {/* <Legend /> */}
        <Bar dataKey="count" fill="#8884d8" radius={5} >
          <LabelList  dataKey='count' position='top'/>
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StudentChart;
