import Header from '@/components/Header';
import ContributionGraph from '@/components/ContributionGraph';
import ActivityOverview from '@/components/ActivityOverview';
import ContributionActivity from '@/components/ContributionActivity';
import YearSelector from '@/components/YearSelector';
import { FaChevronDown } from 'react-icons/fa';

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h1 className="text-xl font-medium mb-2 sm:mb-0">268 contributions in 2024</h1>
              
              <button className="flex items-center px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                Contribution settings
                <FaChevronDown className="ml-2 text-xs" />
              </button>
            </div>
            
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
              <ContributionGraph />
            </div>
            
            <ActivityOverview />
            
            <ContributionActivity />
          </div>
          
          <div className="w-full md:w-1/4">
            <YearSelector currentYear={currentYear} />
          </div>
        </div>
      </main>
    </div>
  );
}
