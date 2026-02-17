export interface RoutineItem {
  startTime: string;
  endTime: string;
  activity: string;
  duration: string;
  category?: 'main' | 'other';
}

export interface RoutineSection {
  period: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
  items: RoutineItem[];
}

export interface DailyRoutine {
  day: string;
  sections: RoutineSection[];
}

export const weekdayRoutine: DailyRoutine = {
  day: 'Monday to Saturday',
  sections: [
    {
      period: 'Morning',
      items: [
        {
          startTime: '4:30 AM',
          endTime: '4:35 AM',
          activity: 'Washing my eyes to take of sleep',
          duration: '5 mins',
          category: 'main',
        },
        {
          startTime: '4:35 AM',
          endTime: '5:00 AM',
          activity: 'Exercises (Planks, Push ups, Sit ups)',
          duration: '25 mins',
          category: 'main',
        },
        {
          startTime: '5:00 AM',
          endTime: '5:30 AM',
          activity: 'Praying to God',
          duration: '30 mins',
          category: 'main',
        },
        {
          startTime: '5:30 AM',
          endTime: '5:45 AM',
          activity: 'Washing Utensils',
          duration: '15 mins',
          category: 'main',
        },
        {
          startTime: '5:45 AM',
          endTime: '6:00 AM',
          activity: 'Mopping the house & Neighboring Surrounding',
          duration: '15 mins',
          category: 'main',
        },
        {
          startTime: '6:00 AM',
          endTime: '6:10 AM',
          activity: 'Brushing Teeth',
          duration: '10 mins',
          category: 'main',
        },
        {
          startTime: '6:10 AM',
          endTime: '6:20 AM',
          activity: 'Toilet',
          duration: '10 mins',
          category: 'main',
        },
        {
          startTime: '6:20 AM',
          endTime: '6:30 AM',
          activity: 'Bathing',
          duration: '10 mins',
          category: 'main',
        },
        {
          startTime: '6:30 AM',
          endTime: '7:00 AM',
          activity: 'Breakfast + Plan my day',
          duration: '30 mins',
          category: 'main',
        },
        {
          startTime: '7:00 AM',
          endTime: '7:15 AM',
          activity: 'Ironing Clothes & Polishing Shoes',
          duration: '15 mins',
          category: 'main',
        },
        {
          startTime: '7:15 AM',
          endTime: '7:30 AM',
          activity: 'Applying Deodorant, Smearing Vaseline, Combing while looking at the Mirror, Wearing Clothes',
          duration: '15 mins',
          category: 'main',
        },
        {
          startTime: '7:30 AM',
          endTime: '8:30 AM',
          activity: 'Travelling for work',
          duration: '1 hour',
          category: 'other',
        },
      ],
    },
    {
      period: 'Afternoon',
      items: [
        {
          startTime: '1:00 PM',
          endTime: '2:00 PM',
          activity: 'Lunch',
          duration: '1 hour',
          category: 'main',
        },
      ],
    },
    {
      period: 'Evening',
      items: [
        {
          startTime: '6:30 PM',
          endTime: '7:30 PM',
          activity: 'Coming back home',
          duration: '1 hour',
          category: 'other',
        },
        {
          startTime: '7:30 PM',
          endTime: '8:30 PM',
          activity: 'Cooking supper',
          duration: '1 hours',
          category: 'main',
        },
        {
          startTime: '8:30 PM',
          endTime: '9:00 PM',
          activity: 'Toliet + Bathing',
          duration: '30 mins',
          category: 'main',
        },
        {
          startTime: '9:00 PM',
          endTime: '9:30 PM',
          activity: 'Praying',
          duration: '30 mins',
          category: 'main',
        },
        {
          startTime: '9:30 PM',
          endTime: '10:00 PM',
          activity: 'Eating Supper',
          duration: '30 mins',
          category: 'main',
        },
      ],
    },
    {
      period: 'Night',
      items: [
        {
          startTime: '10:00 PM',
          endTime: '4:30 AM',
          activity: 'Sleeping',
          duration: '6.5 hours',
          category: 'main',
        },
      ],
    },
  ],
};

export const sundayRoutine: DailyRoutine = {
  day: 'Sunday',
  sections: [
    {
      period: 'Morning',
      items: [
         {
          startTime: '4:30 AM',
          endTime: '4:35 AM',
          activity: 'Washing my eyes to take of sleep',
          duration: '5 mins',
          category: 'main',
        },
        {
          startTime: '4:35 AM',
          endTime: '5:00 AM',
          activity: 'Exercises (Planks, Push ups, Sit ups)',
          duration: '25 mins',
          category: 'main',
        },
        {
          startTime: '5:00 AM',
          endTime: '5:30 AM',
          activity: 'Praying to God',
          duration: '30 mins',
          category: 'main',
        },
        {
          startTime: '5:30 AM',
          endTime: '5:45 AM',
          activity: 'Washing Utensils',
          duration: '15 mins',
          category: 'main',
        },
        {
          startTime: '5:45 AM',
          endTime: '6:00 AM',
          activity: 'Mopping the house & Neighboring Surrounding',
          duration: '15 mins',
          category: 'main',
        },
        {
          startTime: '6:00 AM',
          endTime: '6:10 AM',
          activity: 'Brushing Teeth',
          duration: '10 mins',
          category: 'main',
        },
        {
          startTime: '6:10 AM',
          endTime: '6:20 AM',
          activity: 'Toilet',
          duration: '10 mins',
          category: 'main',
        },
        {
          startTime: '6:20 AM',
          endTime: '6:30 AM',
          activity: 'Bathing',
          duration: '10 mins',
          category: 'main',
        },
        {
          startTime: '6:30 AM',
          endTime: '7:00 AM',
          activity: 'Breakfast',
          duration: '30 mins',
          category: 'main',
        },
        {
          startTime: '7:00 AM',
          endTime: '7:15 AM',
          activity: 'Ironing Clothes & Polishing Shoes',
          duration: '15 mins',
          category: 'main',
        },
        {
          startTime: '7:15 AM',
          endTime: '7:30 AM',
          activity: 'Applying Deodorant, Smearing Vaseline, Combing while looking at the Mirror, Wearing Clothes',
          duration: '15 mins',
          category: 'main',
        },
        {
          startTime: '7:30 AM',
          endTime: '8:00 AM',
          activity: 'Washing clothes',
          duration: '30 mins',
          category: 'main',
        },
        {
          startTime: '8:00 AM',
          endTime: '8:30 AM',
          activity: 'Finalizing with washing clothes and hanging them',
          duration: '30 mins',
          category: 'main',
        },
        {
          startTime: '8:30 AM',
          endTime: '9:30 AM',
          activity: 'Cooking lunch & supper',
          duration: '1 hour',
          category: 'main',
        },
        {
          startTime: '9:30 AM',
          endTime: '11:00 AM',
          activity: 'General cleaning of the whole house (mopping, wiping dusty walls, washing ventilators, removing cob webs)',
          duration: '1.5 hours',
          category: 'main',
        },
        {
          startTime: '11:00 AM',
          endTime: '1:00 PM',
          activity: 'Church',
          duration: '2 hours',
          category: 'main',
        },
      ],
    },
    {
      period: 'Afternoon',
      items: [
        {
          startTime: '1:00 PM',
          endTime: '2:00 PM',
          activity: 'Lunch',
          duration: '1 hour',
          category: 'main',
        },
        {
          startTime: '2:00 PM',
          endTime: '3:30 PM',
          activity: 'Shopping items for the week',
          duration: '1.5 hours',
          category: 'main',
        },
        {
          startTime: '3:30 PM',
          endTime: '4:00 PM',
          activity: 'Cutting off nails (after 2 weeks), shaving pubic/arm pit hair (after 1 month)',
          duration: '30 mins',
          category: 'main',
        },
        {
          startTime: '4:00 PM',
          endTime: '5:00 PM',
          activity: 'Shaving off hair from the head',
          duration: '1 hour',
          category: 'main',
        },
        {
          startTime: '5:00 PM',
          endTime: '6:00 PM',
          activity: 'Exercises and jogging',
          duration: '1 hour',
          category: 'main',
        },
      ],
    },
    {
      period: 'Evening',
      items: [
        {
          startTime: '7:00 PM',
          endTime: '8:00 PM',
          activity: 'Supper while watching a Serie or Movie',
          duration: '1 hour',
          category: 'main',
        },
        {
          startTime: '8:00 PM',
          endTime: '10:00 PM',
          activity: 'Watching a Serie or Movie',
          duration: '2 hours',
          category: 'main',
        },
      ],
    },
    {
      period: 'Night',
      items: [
        {
          startTime: '10:00 PM',
          endTime: '4:30 AM',
          activity: 'Sleeping',
          duration: '6.5 hours',
          category: 'main',
        },
      ],
    },
  ],
};

export const specialNotes = [
  'Washing bedsheets, blanket, net, towel, pillowcase is done after every 2 weeks',
  'Watching movies or series is a reward after all work has been done.'
];
