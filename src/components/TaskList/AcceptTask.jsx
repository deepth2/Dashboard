import React, { useState } from 'react';

const AcceptTask = ({ data }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const handleComplete = () => {
    if (!isCompleted && !isFailed) {
      setIsCompleted(true);
    }
  };

  const handleFail = () => {
    if (!isFailed && !isCompleted) {
      setIsFailed(true);
    }
  };

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>

      <div className='flex justify-between mt-6'>
        {!isFailed && (
          <button
            onClick={handleComplete}
            className='bg-green-500 rounded font-medium py-1 px-2 text-xs'
          >
            {isCompleted ? 'Completed' : 'Mark as Completed'}
          </button>
        )}
        {!isCompleted && (
          <button
            onClick={handleFail}
            className='bg-red-500 rounded font-medium py-1 px-2 text-xs'
          >
            {isFailed ? 'Failed' : 'Mark as Failed'}
          </button>
        )}
      </div>
    </div>
  );
};

export default AcceptTask;
