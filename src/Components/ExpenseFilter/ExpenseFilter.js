import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  const year=[2000,2001,2002,2003,2004,2005,2006,2007,2008, 2009,2010,2011,2012,2013,2014,2015,2016,2018,2019,2020,2021,2022,
  2023,2024,2025,2026,2027,2028,2029]
  const dropDownHandle=(e)=>{
   console.log(e.target.value) 
   props.onChangeFilter(e.target.value)

  }
    return (

    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownHandle}>
          {year.map(fullYears=>{return<option key={fullYears}>{fullYears}</option>})}
      
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
