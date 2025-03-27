import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import type { ChartOptions } from 'chart.js';

axios.defaults.baseURL = 'https://localhost:44389';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, TimeScale);

type Emotion = {
  emotion_id: number;
  mood_emotion: string;
};

type MoodEntry = {
  mood_id: number;
  mood_date: string;
  emotion_id: number;
  mood_description?: string;
  user_id: number;
};

const MoodTracker: React.FC = () => {
  const [pastMoods, setPastMoods] = useState<MoodEntry[]>([]);
  const [emotions, setEmotions] = useState<Emotion[]>([]);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const userId = 1; // Replace with authenticated user ID

  useEffect(() => {
    axios.get<Emotion[]>('/api/emotion').then((response) => {
      setEmotions(response.data || []);
    });

    axios
      .get<MoodEntry[]>(`/api/mood?user_id=${userId}`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setPastMoods(response.data);
        } else {
          console.warn('Unexpected mood response:', response.data);
          setPastMoods([]);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch mood:', err);
        setPastMoods([]);
      });
  }, [selectedMood]);

  const handleMoodSelection = (emotion_id: number) => {
    setSelectedMood(emotion_id);
    axios
      .post('/api/mood', {
        user_id: userId,
        mood_date: new Date().toISOString().split('T')[0],
        emotion_id,
      })
      .then(() =>
        axios
          .get<MoodEntry[]>(`/api/mood?user_id=${userId}`)
          .then((response) => setPastMoods(response.data))
      );
  };

  const bubbleData = {
    datasets: pastMoods.map((mood) => ({
      label:
        emotions.find((e) => e.emotion_id === mood.emotion_id)?.mood_emotion ??
        'Unknown',
      data: [
        {
          x: new Date(mood.mood_date),
          y: mood.emotion_id,
          r: 8,
        },
      ],
      backgroundColor: '#ffcc00',
    })),
  };

  const bubbleOptions: ChartOptions<'bubble'> = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        type: 'linear',
        min: 1,
        max: 11,
        ticks: {
          stepSize: 1,
          callback: function (value) {
            const match = emotions.find((e) => e.emotion_id === value);
            return match ? match.mood_emotion : '';
          },
        },
        title: {
          display: true,
          text: 'Emotion',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-center">Mood Map</h2>
      <div className="my-4">
        <Bubble data={bubbleData} options={bubbleOptions} />
      </div>

      <h3 className="text-lg font-semibold text-center mt-4">
        How Do You Feel Today?
      </h3>
      <div className="flex justify-center gap-4 mt-2 flex-wrap">
        {emotions.map((e) => (
          <button
            key={e.emotion_id}
            className="px-2 py-1 border rounded"
            onClick={() => handleMoodSelection(e.emotion_id)}
          >
            {e.mood_emotion}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-center mt-6">Past Days</h3>
      <ul className="mt-2 border-t pt-2">
        {pastMoods.slice(-5).map((m, index) => (
          <li key={index} className="py-1">
            {m.mood_date} –{' '}
            {emotions.find((e) => e.emotion_id === m.emotion_id)
              ?.mood_emotion ?? 'Unknown'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodTracker;
