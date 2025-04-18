import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meeting Chat — Ell-ena',
};

export default function MeetingChat() {

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="h2-bold text-dark100_light900 mb-4">This Chat UI is under construction</h1>
      <div className="card-wrapper rounded-[10px] p-6 w-full max-w-3xl">
        <p className="text-center primary-text-gradient body-regular">
          Working on it, connecting the sockets...
        </p>
        <div className="mt-6 w-full h-2 bg-light-700 dark:bg-dark-400 rounded-full overflow-hidden">
          <div className="h-full bg-primary-500 rounded-full animate-pulse w-1/3"></div>
        </div>
      </div>
    </div>
  );
} 