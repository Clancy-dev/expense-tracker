import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { calculationData } from "@/data/calculationData";
import { formatCurrency } from "@/lib/formatCurrency";


export default function SpendingTracker() {
  const calculateWeekTotal = (days: any[], week: string) => {
    return days.reduce((sum, day) => sum + (day[week] || 0), 0);
  };

  const calculateDayTotal = (day: any) => {
    return day.week1 + day.week2 + day.week3 + day.week4 + day.week5;
  };

  const calculateCategoryTotal = (days: any[]) => {
    return days.reduce((sum, day) => sum + calculateDayTotal(day), 0);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-full mx-auto space-y-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Calculation of Expenses
          </h1>
          <p className="text-slate-600">Weekly spending patterns by category</p>
        </div>

        {calculationData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              {category.title}
            </h2>

            <div className="overflow-x-auto rounded-lg shadow-md border border-slate-200 bg-white">
              <Table>
                {category.title === "Other Items" ? (
                  <>
                    {/* Other Items - Simple 2 Column Layout */}
                    <TableHeader>
                      <TableRow className="bg-slate-100">
                        <TableHead className="font-bold text-slate-900">
                          Item
                        </TableHead>
                        <TableHead className="text-right font-bold text-slate-900 bg-blue-50 min-w-24">
                          Total
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.days.map((day, dayIndex) => (
                        <TableRow key={dayIndex} className="hover:bg-slate-50 border-b">               
                          <TableCell className="text-slate-700">
                            {day.itemName}
                          </TableCell>
                          <TableCell className="text-right font-bold text-blue-900 bg-blue-50">
                            {formatCurrency(calculateDayTotal(day))}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="bg-slate-200 font-bold">
                        <TableCell colSpan={1} className="text-slate-900">
                          Category Total
                        </TableCell>
                        <TableCell className="text-right text-slate-900">
                          {formatCurrency(calculateCategoryTotal(category.days))}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </>
                ) : (
                  
                  <>
                    {/* Sauce and Food - Full Layout */}
                    <TableHeader>
                      {/* Days of Week Row */}
                      <TableRow className="bg-slate-100">
                        <TableHead className="font-bold text-slate-900">
                          Week
                        </TableHead>
                        {category.days.map((day, dayIndex) => (
                          <TableHead
                            key={dayIndex}
                            className="text-center font-bold text-slate-900"
                          >
                            {day.day}
                          </TableHead>
                        ))}
                        <TableHead className="text-right font-bold text-slate-900 bg-blue-50">
                          Total
                        </TableHead>
                      </TableRow>

                      {/* Item Names Row */}
                      <TableRow className="bg-slate-50 border-b-2">
                        <TableCell className="font-bold text-slate-900">
                          Item
                        </TableCell>
                        {category.days.map((day, dayIndex) => (
                          <TableCell
                            key={dayIndex}
                            className="text-center text-sm text-slate-700 font-medium"
                          >
                            <div className="wrap-break-word text-ellipsis max-w-32 mx-auto">
                              {day.itemName}
                            </div>
                          </TableCell>
                        ))}
                        <TableCell className="text-right bg-blue-50" />
                      </TableRow>
                    </TableHeader>








                    <TableBody>
                      {/* Week 1 Row */}
                      <TableRow className="hover:bg-slate-50 border-b">
                        <TableCell className="font-bold text-slate-900">
                          Week 1
                        </TableCell>
                        {category.days.map((day, dayIndex) => (
                          <TableCell
                            key={dayIndex}
                            className="text-center text-slate-700"
                          >
                            {formatCurrency(day.week1)}
                          </TableCell>
                        ))}
                        <TableCell className="text-right font-bold text-blue-900 bg-blue-50">
                          {formatCurrency(calculateWeekTotal(category.days, "week1"))}
                        </TableCell>
                      </TableRow>

                      {/* Week 2 Row */}
                      <TableRow className="hover:bg-slate-50 border-b">
                        <TableCell className="font-bold text-slate-900">
                          Week 2
                        </TableCell>
                        {category.days.map((day, dayIndex) => (
                          <TableCell
                            key={dayIndex}
                            className="text-center text-slate-700"
                          >
                            {formatCurrency(day.week2)}
                          </TableCell>
                        ))}
                        <TableCell className="text-right font-bold text-blue-900 bg-blue-50">
                          {formatCurrency(calculateWeekTotal(category.days, "week2"))}
                        </TableCell>
                      </TableRow>

                      {/* Week 3 Row */}
                      <TableRow className="hover:bg-slate-50 border-b">
                        <TableCell className="font-bold text-slate-900">
                          Week 3
                        </TableCell>
                        {category.days.map((day, dayIndex) => (
                          <TableCell
                            key={dayIndex}
                            className="text-center text-slate-700"
                          >
                            {formatCurrency(day.week3)}
                          </TableCell>
                        ))}
                        <TableCell className="text-right font-bold text-blue-900 bg-blue-50">
                          {formatCurrency(calculateWeekTotal(category.days, "week3"))}
                        </TableCell>
                      </TableRow>

                      {/* Week 4 Row */}
                      <TableRow className="hover:bg-slate-50 border-b">
                        <TableCell className="font-bold text-slate-900">
                          Week 4
                        </TableCell>
                        {category.days.map((day, dayIndex) => (
                          <TableCell
                            key={dayIndex}
                            className="text-center text-slate-700"
                          >
                            {formatCurrency(day.week4)}
                          </TableCell>
                        ))}
                        <TableCell className="text-right font-bold text-blue-900 bg-blue-50">
                          {formatCurrency(calculateWeekTotal(category.days, "week4"))}
                        </TableCell>
                      </TableRow>

                      {/* Week 5 Row */}
                      <TableRow className="hover:bg-slate-50 border-b">
                        <TableCell className="font-bold text-slate-900">
                          Week 5
                        </TableCell>
                        {category.days.map((day, dayIndex) => (
                          <TableCell
                            key={dayIndex}
                            className="text-center text-slate-700"
                          >
                            {formatCurrency(day.week5)}
                          </TableCell>
                        ))}
                        <TableCell className="text-right font-bold text-blue-900 bg-blue-50">
                          {formatCurrency(calculateWeekTotal(category.days, "week5"))}
                        </TableCell>
                      </TableRow>

                      {/* Total Row (sum of all weeks for each day) */}
                      <TableRow className="bg-slate-100 font-bold border-b-2">
                        <TableCell className="text-slate-900">Total</TableCell>
                        {category.days.map((day, dayIndex) => (
                          <TableCell
                            key={dayIndex}
                            className="text-center font-bold text-slate-900"
                          >
                            {formatCurrency(calculateDayTotal(day))}
                          </TableCell>
                        ))}
                        <TableCell className="text-right font-bold text-slate-900 bg-slate-200">
                          {formatCurrency(calculateCategoryTotal(category.days))}
                        </TableCell>
                      </TableRow>

                      {/* Category Total Row */}
                      <TableRow className="bg-slate-200 font-bold">
                        <TableCell className="text-slate-900">
                          Category Total
                        </TableCell>
                        <TableCell
                          colSpan={category.days.length + 1}
                          className="text-right text-slate-900"
                        >
                          {formatCurrency(
                            calculateCategoryTotal(category.days)
                          )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </>
                )}
              </Table>
            </div>
          </div>
        ))}

        {/* Grand Total */}
        <div className="bg-slate-900 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-lg font-bold mb-2">Grand Total (All Categories)</h3>
          <p className="text-4xl font-bold">
            {formatCurrency(
              calculationData.reduce((sum, category) => {
                return (
                  sum +
                  calculateCategoryTotal(category.days)
                );
              }, 0)
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
