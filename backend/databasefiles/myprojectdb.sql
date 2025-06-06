-- MySQL Dump
-- Database: myprojectdb
-- Generation Time: 2025-05-29 10:00:00
-- Host: localhost
-- Server version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- Character set and collation
SET NAMES utf8mb4;
-- Drop tables if they exist (for clean imports)
DROP TABLE IF EXISTS admin_logentry;
DROP TABLE IF EXISTS booking;
DROP TABLE IF EXISTS event;
DROP TABLE IF EXISTS auth_user;
DROP TABLE IF EXISTS auth_permission;
DROP TABLE IF EXISTS content_type;

-- Table for content types (simplified)
CREATE TABLE content_type (
  id INT AUTO_INCREMENT PRIMARY KEY,
  app_label VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert content types
INSERT INTO content_type (id, app_label, model) VALUES
(1, 'admin', 'logentry'),
(2, 'auth', 'permission'),
(3, 'auth', 'group'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session'),
(7, 'eventapp', 'event'),
(8, 'eventapp', 'booking');

-- Table for permissions (simplified)
CREATE TABLE auth_permission (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  content_type_id INT NOT NULL,
  codename VARCHAR(100) NOT NULL,
  FOREIGN KEY (content_type_id) REFERENCES content_type(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert permissions (mapping content_type to ids above)
INSERT INTO auth_permission (id, name, content_type_id, codename) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add event', 7, 'add_event'),
(26, 'Can change event', 7, 'change_event'),
(27, 'Can delete event', 7, 'delete_event'),
(28, 'Can view event', 7, 'view_event'),
(29, 'Can add booking', 8, 'add_booking'),
(30, 'Can change booking', 8, 'change_booking'),
(31, 'Can delete booking', 8, 'delete_booking'),
(32, 'Can view booking', 8, 'view_booking');

-- Table for users (simplified)
CREATE TABLE auth_user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(150) NOT NULL UNIQUE,
  email VARCHAR(254) NOT NULL,
  last_login DATETIME NULL,
  date_joined DATETIME NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert users
INSERT INTO auth_user (id, username, email, last_login, date_joined) VALUES
(1, 'admin123', 'admin@gmail.com',  '2023-06-30 15:46:09', '2023-06-28 13:39:45'),
(2, 'Dummy', 'dummy@gmail.com',  '2023-07-04 17:40:38', '2023-07-04 17:19:13'),
(3, 'likhitha', 'likitha.rebba@gmail.com', '2025-05-14 09:49:41', '2025-05-08 06:12:22');

-- Table for events
CREATE TABLE event (
  id INT PRIMARY KEY,
  img VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert events
INSERT INTO event (id, img, name, description) VALUES
(1, 'pic/Event1.jpg', 'Event1', 'Best option for your events.. Join with us'),
(2, 'pic/event2.jpg', 'Event2', 'Best option for your events.. Join with us'),
(3, 'pic/event3.jpg', 'Event3', 'Best option for your events.. Join with us'),
(4, 'pic/event4.jpg', 'Event4', 'Best option for your events.. Join with us'),
(5, 'pic/event5.jpg', 'Event5', 'Best option for your events.. Join with us');

-- Table for bookings
CREATE TABLE booking (
  id INT PRIMARY KEY,
  cus_name VARCHAR(100) NOT NULL,
  cus_ph VARCHAR(15) NOT NULL,
  event_id INT NOT NULL,
  booking_date DATE NOT NULL,
  booked_on DATE NOT NULL,
  FOREIGN KEY (event_id) REFERENCES event(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert bookings
INSERT INTO booking (id, cus_name, cus_ph, event_id, booking_date, booked_on) VALUES
(1, 'Nivya', '7898767656', 1, '2023-07-05', '2023-06-30'),
(2, 'Alexa Alexander', '08089731312', 2, '2023-07-08', '2023-06-30'),
(3, 'Alexa Alexander', '08089731312', 2, '2023-07-16', '2023-07-04');

-- Table for admin log entries (simplified)
CREATE TABLE admin_logentry (
  id INT PRIMARY KEY,
  action_time DATETIME NOT NULL,
  user_id INT NOT NULL,
  content_type_id INT NOT NULL,
  object_id VARCHAR(255) NOT NULL,
  object_repr VARCHAR(255) NOT NULL,
  action_flag INT NOT NULL,
  change_message TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES auth_user(id),
  FOREIGN KEY (content_type_id) REFERENCES content_type(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert admin log entries
INSERT INTO admin_logentry (id, action_time, user_id, content_type_id, object_id, object_repr, action_flag, change_message) VALUES
(1, '2023-06-29 12:18:22', 1, 7, '1', 'Event object (1)', 1, '[{"added": {}}]'),
(2, '2023-06-29 12:19:07', 1, 7, '2', 'Event object (2)', 1, '[{"added": {}}]'),
(3, '2023-06-29 12:19:23', 1, 7, '3', 'Event object (3)',