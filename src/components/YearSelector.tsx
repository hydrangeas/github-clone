type YearSelectorProps = {
  currentYear: number;
}

export default function YearSelector({ currentYear }: YearSelectorProps) {
  // Generate years from 2011 to current year + 1
  const years = [];
  for (let year = 2011; year <= currentYear + 1; year++) {
    years.push(year);
  }
  
  return (
    <div className="flex flex-col space-y-1 mt-4 sticky top-4">
      {years.map(year => (
        <button
          key={year}
          className={`px-4 py-1.5 text-sm rounded-md text-left ${
            year === currentYear
              ? 'bg-blue-500 text-white font-medium'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}
        >
          {year}
        </button>
      ))}
    </div>
  );
}