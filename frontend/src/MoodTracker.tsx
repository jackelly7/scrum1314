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
import './MoodTracker.css';
import { format } from 'date-fns';

axios.defaults.baseURL = 'https://localhost:44366';

const emojiMap: Record<string, string> = {
  Happy: '😊',
  Sad: '😢',
  Angry: '😠',
  Bored: '😐',
  Content: '😌',
  Meh: '😑',
  Frustrated: '😣',
  Joyful: '😄',
  Tired: '🥱',
  Playful: '😜',
  Funny: '😂',
};

const emojiToImage = (emoji: string): HTMLImageElement => {
  const canvas = document.createElement('canvas');
  canvas.width = 20;
  canvas.height = 20;
  const ctx = canvas.getContext('2d')!;
  ctx.font = '16px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(emoji, canvas.width / 2, canvas.height / 2);

  const img = new Image();
  img.src = canvas.toDataURL();
  return img;
};

const emotionOrder = [
  'Joyful',
  'Happy',
  'Playful',
  'Funny',
  'Content',
  'Tired',
  'Bored',
  'Meh',
  'Sad',
  'Frustrated',
  'Angry',
  '',
];

const getEmotionY = (emotionName: string): number => {
  return emotionOrder.indexOf(emotionName) + 1; // +1 to avoid 0-based y-axis
};

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
    datasets: pastMoods.map((mood) => {
      const emotion = emotions.find((e) => e.emotion_id === mood.emotion_id);
      const emoji = emojiMap[emotion?.mood_emotion ?? ''] ?? '❓';
      const yValue = getEmotionY(emotion?.mood_emotion ?? '');

      return {
        label: emotion?.mood_emotion ?? 'Unknown',
        data: [
          {
            x: new Date(mood.mood_date),
            y: yValue,
            r: 8,
          },
        ],
        pointStyle: emojiToImage(emoji),
        backgroundColor: 'transparent',
        borderColor: '#555',
        borderWidth: 1,
      };
    }),
  };

  const bubbleOptions: ChartOptions<'bubble'> = {
    responsive: true,
    layout: {
      padding: {
        top: 16,
        bottom: 5,
        left: 8,
        right: 8,
      },
    },
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
        max: emotionOrder.length,
        reverse: true, // 🔁 This flips the axis
        ticks: {
          stepSize: 1,
          callback: function (value) {
            const index =
              typeof value === 'number' ? value - 1 : parseInt(value) - 1;
            return emotionOrder[index] ?? '';
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
    <div className="mood-tracker-container">
      <h2>Mood Map</h2>
      <div className="bubble-chart">
        <Bubble data={bubbleData} options={bubbleOptions} />
      </div>

      <h3>How Do You Feel Today?</h3>
      <div className="mood-buttons">
        {emotions.map((e) => (
          <button
            key={e.emotion_id}
            onClick={() => handleMoodSelection(e.emotion_id)}
          >
            {emojiMap[e.mood_emotion] ?? ''} {e.mood_emotion}
          </button>
        ))}
      </div>

      <h3>Past Days</h3>
      <ul className="past-moods">
        {pastMoods.slice(-5).map((m, index) => (
          <li key={index}>
            {format(new Date(m.mood_date), 'eee, MMM d')} –{' '}
            {emotions.find((e) => e.emotion_id === m.emotion_id)
              ?.mood_emotion ?? 'Unknown'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoodTracker;
