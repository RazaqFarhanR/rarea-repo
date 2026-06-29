## Summary

A web-based digital scoring system designed specifically for Pencak Silat martial arts competitions, replacing the manual paper-based score recording system. The system ensures the speed and accuracy of score input from referees in real-time.

**Role:** Backend Developer

---

## Challenges

In Pencak Silat competitions, the speed and accuracy of score input from referees (judges) is paramount. If the system experiences a delay when a judge presses a point button, the aggregated results on the main screen (scoreboard) will lag and could trigger protests from coaches or spectators. Furthermore, the manual paper-based system is highly prone to human error and requires a long tabulation time after a match concludes.

---

## Architecture and Approach

The project's main focus was on building a reliable Backend API capable of handling thousands of small requests (point scores) per second without experiencing a bottleneck.

- **ExpressJS** was used as the server framework for its non-blocking and lightweight nature, ideal for handling high-frequency requests.
- **MySQL** as a relational database to maintain the integrity of match data, athlete schedules, and final point tabulations.
- **REST API** with a clean architecture allows both the judge's application (score input) and the spectator monitor screen to receive consistent data updates.

---

## Key Features

- **Real-time Score Input:** A dedicated interface for referees/judges, optimized so that every button press is immediately synchronized to the main scoreboard.
- **Match Management:** Structured scheduling, bracket management, and athlete data stored in a relational database.
- **Public Scoreboard:** A monitor screen that automatically displays the latest scores without the need for manual refresh.
- **Automatic Tabulation:** A final point calculation system that eliminates the need for manual post-match tabulation.

---

## Tech Stack

- **Backend:** Node.js, ExpressJS
- **Database:** MySQL
- **Architecture:** REST API

---

## Results and Impact

The system was successfully deployed live in a local tournament with zero server downtime. Judging transparency increased significantly as scores were displayed in real-time on the public screen, and score tabulation time was drastically reduced from hours to instant.
