import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Category 1',
    neutral:10,
    unSatisfied:20,
    verySatisfied:20,
    veryUnsatisfied:20,
    satisfied:30
  },
  {
    name: 'Category 2',
    neutral:35,
    unSatisfied:0,
    verySatisfied:25,
    veryUnsatisfied:0,
    satisfied:40
  },
  {
    name: 'Category 3',
    neutral:0,
    unSatisfied:10,
    verySatisfied:30,
    veryUnsatisfied:20,
    satisfied:40
  },
  {
    name: 'Category 4',
    neutral:20,
    unSatisfied:20,
    verySatisfied:20,
    veryUnsatisfied:15,
    satisfied:25
  },
];

export default class Barchart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={50}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="none"  />
          <XAxis dataKey="name" tick={{ fill: '#B1B6B4' }} stroke="none" />
          <YAxis  ticks={[0, 20, 40, 60, 80, 100]}
          tickFormatter={(value) => `${value}%`} tick={{ fill: '#B1B6B4' }} stroke="none"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="satisfied" stackId="a" fill="#57C7F1" />
          <Bar dataKey="veryUnsatisfied" stackId="a" fill="#F24630" />
          <Bar dataKey="verySatisfied" stackId="a" fill="#53D14D" />
          <Bar dataKey="unSatisfied" stackId="a" fill="#E8E72A" />
          <Bar dataKey="neutral" stackId="a" fill="#7C7F7C" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
