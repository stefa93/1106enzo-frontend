'use client';

import { Bell, ChevronRight, Menu } from 'lucide-react';
import { toast } from 'react-toastify';

export default function UITest() {
  const showSuccessToast = () => {
    toast.success('This is a success message!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const showErrorToast = () => {
    toast.error('This is an error message!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="p-4 space-y-4" data-testid="ui-test">
      <h2 className="text-2xl font-bold">UI Components Test</h2>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Icons Test</h3>
          <div className="flex items-center gap-4">
            <Bell data-testid="icon-bell" className="h-6 w-6 text-brand" />
            <Menu data-testid="icon-menu" className="h-6 w-6 text-brand-600" />
            <ChevronRight data-testid="icon-chevron" className="h-4 w-4 text-brand-800" />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Toast Notifications Test</h3>
          <div className="flex gap-4">
            <button
              type="button"
              data-testid="show-success-toast"
              onClick={showSuccessToast}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Show Success Toast
            </button>
            <button
              type="button"
              data-testid="show-error-toast"
              onClick={showErrorToast}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Show Error Toast
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
