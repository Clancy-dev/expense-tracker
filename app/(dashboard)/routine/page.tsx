'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { specialNotes, sundayRoutine, weekdayRoutine } from '@/data/routineData';

export default function RoutinePage() {
  const [activeTab, setActiveTab] = useState('weekday');

  const currentRoutine = activeTab === 'weekday' ? weekdayRoutine : sundayRoutine;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Daily Routine
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            My structured daily schedule to follow consistently
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white dark:bg-slate-800 shadow-sm rounded-lg p-1">
              <TabsTrigger value="weekday" className="rounded-md data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Monday - Saturday
              </TabsTrigger>
              <TabsTrigger value="sunday" className="rounded-md data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Sunday
              </TabsTrigger>
            </TabsList>

            {/* Weekday Content */}
            <TabsContent value="weekday" className="space-y-6 mt-6">
              {weekdayRoutine.sections.map((section, idx) => (
                <Card key={idx} className="overflow-hidden shadow-md border-slate-200 dark:border-slate-700">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-slate-900 dark:text-white">{section.period}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                              Time
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                              Activity
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                              Duration
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                              Type
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.items.map((item, itemIdx) => (
                            <tr
                              key={itemIdx}
                              className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                            >
                              <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                                {item.startTime} → {item.endTime}
                              </td>
                              <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                                {item.activity}
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                {item.duration}
                              </td>
                              <td className="px-6 py-4">
                                <Badge
                                  variant={item.category === 'main' ? 'default' : 'secondary'}
                                  className={item.category === 'main' ? 'bg-blue-500 text-white' : ''}
                                >
                                  {item.category === 'main' ? 'Main' : 'Other'}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Sunday Content */}
            <TabsContent value="sunday" className="space-y-6 mt-6">
              {sundayRoutine.sections.map((section, idx) => (
                <Card key={idx} className="overflow-hidden shadow-md border-slate-200 dark:border-slate-700">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl text-slate-900 dark:text-white">{section.period}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                              Time
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                              Activity
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                              Duration
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-300">
                              Type
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.items.map((item, itemIdx) => (
                            <tr
                              key={itemIdx}
                              className="border-b border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors"
                            >
                              <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                                {item.startTime} → {item.endTime}
                              </td>
                              <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">
                                {item.activity}
                              </td>
                              <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400 whitespace-nowrap">
                                {item.duration}
                              </td>
                              <td className="px-6 py-4">
                                <Badge
                                  variant={item.category === 'main' ? 'default' : 'secondary'}
                                  className={item.category === 'main' ? 'bg-blue-500 text-white' : ''}
                                >
                                  {item.category === 'main' ? 'Main' : 'Other'}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Special Notes */}
        {specialNotes.length > 0 && (
          <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800 shadow-md">
            <CardHeader>
              <CardTitle className="text-amber-900 dark:text-amber-100">Special Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {specialNotes.map((note, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-amber-900 dark:text-amber-100"
                  >
                    <span className="text-amber-600 dark:text-amber-400 font-bold mt-0.5">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  );
}
