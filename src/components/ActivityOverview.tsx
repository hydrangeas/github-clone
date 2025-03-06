import { FaCodeBranch } from 'react-icons/fa';

export default function ActivityOverview() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 mt-6">
      <div className="w-full md:w-1/2 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h2 className="text-base font-medium mb-4">Activity overview</h2>
        
        <div className="flex items-start mb-2">
          <div className="mr-2 mt-1">
            <FaCodeBranch className="text-gray-500" />
          </div>
          <div>
            <p className="text-sm">
              Contributed to <a href="#" className="text-blue-500 hover:underline">hydrangeas/HardDB</a>,{' '}
              <a href="#" className="text-blue-500 hover:underline">hydrangeas/blog-test</a>,{' '}
              <a href="#" className="text-blue-500 hover:underline">hydrangeas/shikagikoujo-map</a>{' '}
              and 12 other repositories
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h2 className="text-base font-medium mb-4">Code review</h2>
        
        <div className="relative h-48 w-full">
          {/* Coordinate system */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Vertical line */}
            <div className="absolute h-full w-[1px] bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Horizontal line */}
            <div className="absolute w-full h-[1px] bg-gray-200 dark:bg-gray-700"></div>
            
            {/* Center dot */}
            <div className="absolute w-3 h-3 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full z-10"></div>
            
            {/* Commits line (97%) */}
            <div className="absolute left-1/2 w-[70%] h-[1px] bg-green-500 transform -translate-x-1/2"></div>
            
            {/* Commits label */}
            <div className="absolute top-4 left-4 text-xs text-gray-500">
              <div>97%</div>
              <div>Commits</div>
            </div>
            
            {/* Issues label */}
            <div className="absolute top-4 right-4 text-xs text-gray-500">Issues</div>
            
            {/* Pull requests label */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
              <div className="text-center">3%</div>
              <div>Pull requests</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}