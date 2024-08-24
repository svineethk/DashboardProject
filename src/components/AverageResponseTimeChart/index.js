import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from 'recharts';

const data = [
  {
    month: 'Jan',
    AverageResponseTime: 14
  },
  {
    month: 'Feb',
    AverageResponseTime: 10
  },
  {
    month: 'Mar',
    AverageResponseTime: 7
  },
  {
    month: 'Apr',
    AverageResponseTime: 5
  },
  {
    month: 'May',
    AverageResponseTime: 12
  },
  {
    month: 'Jun',
    AverageResponseTime: 17
  },
];

export default class AverageResponseTimeChart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="none"/>
          <XAxis dataKey="month"/>
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="AverageResponseTime" stroke="#54C9EF" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
