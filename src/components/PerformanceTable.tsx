import { performanceMetrics } from '@/types';

interface PerformanceTableProps {
  className?: string;
}

export default function PerformanceTable({ className = '' }: PerformanceTableProps) {
  const getStatusColor = (status: 'good' | 'warning' | 'poor') => {
    switch (status) {
      case 'good':
        return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20';
      case 'warning':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20';
      case 'poor':
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${className}`}>
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          📊 So sánh Performance Chi tiết
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Đánh giá các metrics quan trọng giữa CSR và SSR
        </p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Metrics
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                CSR (Client Side)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                SSR (Server Side)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {performanceMetrics.map((metric, index) => (
              <tr key={metric.label} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700'}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {metric.label}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(metric.csr.status)}`}>
                      {metric.csr.value}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {metric.csr.description}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(metric.ssr.status)}`}>
                      {metric.ssr.value}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {metric.ssr.description}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Legend */}
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center space-x-6 text-xs">
          <div className="flex items-center space-x-1">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-gray-600 dark:text-gray-400">Tốt</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="text-gray-600 dark:text-gray-400">Trung bình</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="text-gray-600 dark:text-gray-400">Kém</span>
          </div>
        </div>
      </div>
    </div>
  );
}
