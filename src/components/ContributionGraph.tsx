import { format, eachDayOfInterval, subDays, startOfWeek, addDays } from 'date-fns';

// Generate sample contribution data
const generateContributionData = () => {
  const today = new Date();
  const oneYearAgo = subDays(today, 365);
  
  // Generate all days in the interval
  const days = eachDayOfInterval({
    start: oneYearAgo,
    end: today
  });
  
  // Create a map of contributions
  const contributions = new Map();
  
  // Assign random contribution counts to some days
  days.forEach(day => {
    // Generate random contribution level (0-4)
    // 0: no contribution, 1-4: increasing levels of contribution
    const random = Math.random();
    let level = 0;
    
    if (random > 0.7) level = 1;
    if (random > 0.8) level = 2;
    if (random > 0.9) level = 3;
    if (random > 0.95) level = 4;
    
    // Format date as YYYY-MM-DD for the key
    const dateKey = format(day, 'yyyy-MM-dd');
    contributions.set(dateKey, level);
  });
  
  return contributions;
};

// Get contribution level color
const getContributionColor = (level: number) => {
  switch (level) {
    case 0: return 'bg-[#ebedf0] dark:bg-[#161b22]';
    case 1: return 'bg-[#9be9a8] dark:bg-[#0e4429]';
    case 2: return 'bg-[#40c463] dark:bg-[#006d32]';
    case 3: return 'bg-[#30a14e] dark:bg-[#26a641]';
    case 4: return 'bg-[#216e39] dark:bg-[#39d353]';
    default: return 'bg-[#ebedf0] dark:bg-[#161b22]';
  }
};

// Get month labels for the graph
const getMonthLabels = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months;
};

export default function ContributionGraph() {
  const contributionData = generateContributionData();
  const today = new Date();
  const oneYearAgo = subDays(today, 365);
  const monthLabels = getMonthLabels();
  
  // Get the start of the week (Sunday) for the one year ago date
  const startDate = startOfWeek(oneYearAgo);
  
  // Create a 7x53 grid (7 days per week, ~53 weeks per year)
  const weeks = [];
  for (let i = 0; i < 53; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      const day = addDays(startDate, i * 7 + j);
      const dateKey = format(day, 'yyyy-MM-dd');
      const level = contributionData.get(dateKey) || 0;
      
      // Only include days that are within our range
      const isInRange = day >= oneYearAgo && day <= today;
      
      week.push({
        date: day,
        level: isInRange ? level : -1, // -1 for days outside our range
        dateKey
      });
    }
    weeks.push(week);
  }
  
  // Day labels (Mon, Wed, Fri)
  const dayLabels = ['Mon', '', 'Wed', '', 'Fri', '', ''];

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-col">
        <div className="flex mb-2">
          <div className="w-8"></div>
          <div className="flex justify-between w-full px-1">
            {monthLabels.map((month, i) => (
              <div key={i} className="text-xs text-gray-500">{month}</div>
            ))}
          </div>
        </div>
        
        <div className="flex">
          <div className="flex flex-col mr-2 space-y-[10px]">
            {dayLabels.map((day, i) => (
              <div key={i} className="h-[10px] text-xs text-gray-500 flex items-center">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-flow-col gap-[2px]">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-flow-row gap-[2px]">
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-[10px] h-[10px] rounded-sm ${
                      day.level === -1 ? 'opacity-0' : getContributionColor(day.level)
                    }`}
                    title={day.level > 0 ? `${day.level} contributions on ${format(day.date, 'MMM d, yyyy')}` : `No contributions on ${format(day.date, 'MMM d, yyyy')}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-2">
          <div className="text-xs text-gray-500">
            <button className="hover:text-blue-500">Learn how we count contributions</button>
          </div>
          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-2">Less</span>
            <div className="flex space-x-1">
              {[0, 1, 2, 3, 4].map(level => (
                <div
                  key={level}
                  className={`w-[10px] h-[10px] rounded-sm ${getContributionColor(level)}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}