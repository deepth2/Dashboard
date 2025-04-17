import React, { useState } from 'react';

const NewTask = ({ data }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

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
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>

      <div className='mt-6 flex gap-2'>
        {!isAccepted && (
          <button
            onClick={handleAccept}
            className='bg-blue-500 rounded font-medium py-1 px-2 text-xs'
          >
            Accept Task
          </button>
        )}
        {isAccepted && !isCompleted && !isFailed && (
          <>
            <button
              onClick={handleComplete}
              className='bg-green-500 rounded font-medium py-1 px-2 text-xs'
            >
              Mark as Completed
            </button>
            <button
              onClick={handleFail}
              className='bg-red-500 rounded font-medium py-1 px-2 text-xs'
            >
              Mark as Failed
            </button>
          </>
        )}
        {isCompleted && (
          <button className='bg-green-700 rounded font-medium py-1 px-2 text-xs cursor-default'>
            Completed
          </button>
        )}

        {isFailed && (
          <button className='bg-red-700 rounded font-medium py-1 px-2 text-xs cursor-default'>
            Failed
          </button>
        )}
      </div>
    </div>
  );
};

export default NewTask;
