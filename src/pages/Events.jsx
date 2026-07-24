import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Sparkles } from 'lucide-react';
import './Events.css';

const EVENT_CONFIG = {
  title: "Freshers 2026",
  description: "Unleashing the sound of UCER once again! We're performing a special high-energy live set to welcome the new batch. Prepare for absolute madness.",
  venue: "United Institue of Technology, main auditorium",
  targetDate: "", 
};

// Renamed from 'Event' to 'Events' to avoid browser clash
export default function Events() {
  const calculateTimeLeft = () => {
    if (!EVENT_CONFIG.targetDate) return null;

    const difference = +new Date(EVENT_CONFIG.targetDate) - +new Date();
    let timeLeft = null;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!EVENT_CONFIG.targetDate) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  const getFormattedDate = () => {
    if (!EVENT_CONFIG.targetDate) return "Date & Time TBA";
    const date = new Date(EVENT_CONFIG.targetDate);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="events-page">
      <div className="glow-bg"></div>

      <div className="events-container">
        <div className="event-header">
          <span className="live-badge">
            <Sparkles size={14} /> UPCOMING PERFORMANCE
          </span>
          <h1 className="event-title glow-text">{EVENT_CONFIG.title}</h1>
          <p className="event-desc">{EVENT_CONFIG.description}</p>
        </div>

        {timeLeft ? (
          <div className="timer-wrapper">
            <div className="timer-grid">
              <div className="timer-unit">
                <span className="timer-value">{formatNumber(timeLeft.days)}</span>
                <span className="timer-label">DAYS</span>
              </div>
              <div className="timer-divider">:</div>
              <div className="timer-unit">
                <span className="timer-value">{formatNumber(timeLeft.hours)}</span>
                <span className="timer-label">HOURS</span>
              </div>
              <div className="timer-divider">:</div>
              <div className="timer-unit">
                <span className="timer-value">{formatNumber(timeLeft.minutes)}</span>
                <span className="timer-label">MINS</span>
              </div>
              <div className="timer-divider">:</div>
              <div className="timer-unit">
                <span className="timer-value">{formatNumber(timeLeft.seconds)}</span>
                <span className="timer-label">SECS</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="timer-tba">
            <h2>Countdown Commencing Soon</h2>
            <p>Dates are currently being finalized. Stay tuned!</p>
          </div>
        )}

        <div className="event-meta-card">
          <div className="meta-item">
            <Calendar className="meta-icon" size={24} />
            <div className="meta-text">
              <span className="meta-label">WHEN</span>
              <span className="meta-value">{getFormattedDate()}</span>
            </div>
          </div>
          <div className="meta-item">
            <MapPin className="meta-icon" size={24} />
            <div className="meta-text">
              <span className="meta-label">WHERE</span>
              <span className="meta-value">{EVENT_CONFIG.venue || "Venue TBA"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}