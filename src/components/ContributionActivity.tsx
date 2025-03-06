import { FaCode, FaHtml5 } from 'react-icons/fa';
import { GoGitPullRequest, GoRepo } from 'react-icons/go';
import { BsThreeDots } from 'react-icons/bs';

export default function ContributionActivity() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-medium mb-4">Contribution activity</h2>
      
      <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
        <h3 className="text-base font-medium mb-4">March 2025</h3>
        
        <div className="relative pl-6 border-l border-gray-200 dark:border-gray-700">
          {/* Created 10 commits */}
          <div className="mb-8 relative">
            <div className="absolute -left-[25px] bg-white dark:bg-gray-900 p-1">
              <FaCode className="text-gray-500" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">Created 10 commits in 1 repository</p>
              </div>
              <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <BsThreeDots />
              </button>
            </div>
            
            <div className="mt-2 pl-4 border-l border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <a href="#" className="text-blue-500 hover:underline text-sm">hydrangeas/v0-portfolio</a>
                  <span className="ml-2 text-xs text-gray-500">10 commits</span>
                </div>
                <div className="w-32 h-2 bg-green-100 dark:bg-green-900 rounded-full">
                  <div className="h-full bg-green-500 rounded-full w-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Created 1 repository */}
          <div className="mb-8 relative">
            <div className="absolute -left-[25px] bg-white dark:bg-gray-900 p-1">
              <GoRepo className="text-gray-500" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">Created 1 repository</p>
              </div>
              <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <BsThreeDots />
              </button>
            </div>
            
            <div className="mt-2 pl-4 border-l border-gray-200 dark:border-gray-700">
              <div className="flex items-center py-2">
                <GoRepo className="text-gray-500 mr-2" />
                <a href="#" className="text-blue-500 hover:underline text-sm">hydrangeas/v0-portfolio</a>
                <div className="ml-4 flex items-center">
                  <FaHtml5 className="text-orange-500 mr-1" />
                  <span className="text-xs text-gray-500">HTML</span>
                  <span className="mx-2 text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-500">Built by</span>
                  <div className="flex ml-1">
                    <div className="w-4 h-4 rounded-full bg-red-500 -mr-1"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-500 -mr-1"></div>
                    <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                  </div>
                </div>
                <div className="ml-auto text-xs text-gray-500">Mar 2</div>
              </div>
            </div>
          </div>
          
          {/* Created a pull request */}
          <div className="mb-8 relative">
            <div className="absolute -left-[25px] bg-white dark:bg-gray-900 p-1">
              <GoGitPullRequest className="text-gray-500" />
            </div>
            <div className="flex items-start">
              <div>
                <p className="text-sm font-medium">
                  Created a pull request in <a href="#" className="text-blue-500 hover:underline">hydrangeas/v0-portfolio</a> that received 3 comments
                </p>
                <div className="ml-auto text-xs text-gray-500">Mar 5</div>
              </div>
            </div>
            
            <div className="mt-2 pl-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4">
                <div className="flex items-center mb-2">
                  <GoGitPullRequest className="text-purple-500 mr-2" />
                  <h4 className="text-base font-medium">テストカバレッジの向上</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  変更内容 カバレッジ閾値を調整 主要コンポーネントとライブラリのみ高いカバレッジを要求 全体的なカバレッジは低めに設定 テストの修正 theme-toggle.testのアイコン検証方法を修正 目的 テストカバレッジを向上させ、主要コンポーネントの品質を確保します。
                </p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="text-green-500 font-medium">+64</span>
                  <span className="text-red-500 font-medium ml-1">-2</span>
                  <div className="ml-2 flex">
                    <div className="w-2 h-2 bg-green-500 mr-[1px]"></div>
                    <div className="w-2 h-2 bg-green-500 mr-[1px]"></div>
                    <div className="w-2 h-2 bg-green-500 mr-[1px]"></div>
                    <div className="w-2 h-2 bg-green-500 mr-[1px]"></div>
                    <div className="w-2 h-2 bg-green-500"></div>
                  </div>
                  <span className="ml-2">lines changed</span>
                  <span className="mx-2">•</span>
                  <span>3 comments</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Opened 5 other pull requests */}
          <div className="relative">
            <div className="absolute -left-[25px] bg-white dark:bg-gray-900 p-1">
              <GoGitPullRequest className="text-gray-500" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium">Opened 5 other pull requests in 1 repository</p>
              </div>
              <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <BsThreeDots />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}