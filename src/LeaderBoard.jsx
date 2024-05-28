import React from 'react';
import uniqid from 'uniqid';
import classes from './LeaderBoard.module.css';

const LeaderBoard = () => {
  const rows = [
    {
      rank: '1',
      name: 'Selling with re entr',
      calmar: '3.96',
      overall_profit: 381845,
      avg_profit: 319.54,
      win_day: 0.65,
      price: '-',
      action: 'View',
    },
    {
      rank: '2',
      name: 'Based on premium and',
      calmar: '3.32',
      overall_profit: 312345,
      avg_profit: 319.54,
      win_day: 0.65,
      price: '300',
      action: 'View',
    },
    {
      rank: '3',
      name: 'strategy_name',
      calmar: '2.62',
      overall_profit: 282845,
      avg_profit: 319.54,
      win_day: 0.65,
      price: '-',
      action: 'Buy',
    },
    {
      rank: '4',
      name: 'Selling with re entr',
      calmar: '3.96',
      overall_profit: 381845,
      avg_profit: 319.54,
      win_day: 0.65,
      price: '-',
      action: 'View',
    },
    {
      rank: '5',
      name: 'Based on premium and',
      calmar: '3.32',
      overall_profit: 312345,
      avg_profit: 319.54,
      win_day: 0.65,
      price: '-',
      action: 'View',
    },
    {
      rank: '6',
      name: 'strategy_name',
      calmar: '2.62',
      overall_profit: 282845,
      avg_profit: 319.54,
      win_day: 0.65,
      price: '500',
      action: 'Buy',
    },
    {
      rank: '7',
      name: 'Selling with re entr',
      calmar: '3.96',
      overall_profit: 381845,
      avg_profit: 319.54,
      win_day: 0.65,
      price: '-',
      action: 'View',
    },
    {
      rank: '8',
      name: 'Based on premium and',
      calmar: '3.32',
      overall_profit: 312345,
      avg_profit: 319.54,
      win_day: 0.65,
      price: '-',
      action: 'View',
    },
    {
      rank: '9',
      name: 'strategy_name',
      calmar: '2.62',
      overall_profit: 282845,
      avg_profit: 319.54,
      win_day: 0.65,
      price: '800',
      action: 'View',
    },
  ];

  const columns = [
    {
      key: 'rank',
      label: 'Rank',
    },
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'calmar',
      label: 'Calmar Ratio',
    },
    {
      key: 'overall_profit',
      label: 'Overall Profit',
    },
    {
      key: 'avg_profit',
      label: 'Avg. Daily Profit',
    },
    { key: 'win_day', label: 'Win%(Day)' },
    {
      key: 'price',
      label: 'Price(Rs)',
    },
    { key: 'action', label: 'Action' },
  ];

  return (
    <div className={classes.wrapper}>
      <h1 class='text-5xl text-gray-800 mb-6 font-extrabold'>LeaderBoards</h1>
      <div class='relative overflow-x-auto shadow-md sm:rounded-lg w-9/12'>
        <div class='w-full bg-indigo-900 text-white flex flex-column justify-between px-5 py-2'>
          <h2 class='text-4xl'>Basic Backtest</h2>
          <div class='border-white border h-9 flex'>
            <div class='border-white border-r h-full p-1'>
              <h2>slippage</h2>
            </div>
            <div class='h-full p-1 w-20 '>
              <select class='w-full text-center'>
                <option class='bg-white' value='1'>
                  0%
                </option>
                <option class='bg-white' value='1'>
                  0.5%
                </option>
                <option class='bg-white' value='1'>
                  1%
                </option>
              </select>
            </div>
          </div>
        </div>

        <table class='w-full text-sm text-left rtl:text-right text-gray-500 '>
          <thead class='text-xs text-white uppercase bg-indigo-900 bg-gray-50'>
            <tr>
              {columns.map((col) => {
                return (
                  <th scope='col' class='px-6 py-3' key={col.key}>
                    {col.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const rowData = (
                <tr class='bg-white text-black border-b'>
                  {columns.map((col) => {
                    if (col.key == 'action') {
                      return (
                        <th
                          scope='row'
                          class='px-6 py-4 font-medium whitespace-nowrap text-blue-800 cursor-pointer'
                        >
                          {row[col.key]}
                        </th>
                      );
                    }
                    return <td class='px-6 py-4'>{row[col.key]}</td>;
                  })}
                </tr>
              );
              return rowData;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
