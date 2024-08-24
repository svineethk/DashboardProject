import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    month:'Jan',
    CSAT:50
  },
  {
     month:'Feb',
    CSAT:45
  },
  {
     month:'Mar',
    CSAT:80
  },
  {
     month:'Apr',
    CSAT:55
  },
  {
     month:'May',
    CSAT:'75',
  },
  {
    month:'Jun',
    CSAT:'70'
  },
];


export default class Example extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid stroke="none"/>
          <XAxis dataKey="month" />
          <YAxis ticks={[0, 20, 40, 60, 80, 100]}
          tickFormatter={(value) => `${value}%`} tick={{ fill: '#B1B6B4' }} stroke="none"/>
          <Tooltip />
          <Area type="monotone" dataKey="CSAT" stroke="none" fill="#52C9F1" fillOpacity={1} />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
