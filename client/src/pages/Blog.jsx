import React from "react";
import BlogCard from "../components/BlogCard";
const Blog = () => {
  const blogEntries = [
    {
      date: "23 January 2023",
      title: "[Updated 2023] Best Laptops To Buy in 2023 - Laptop Buying Guide between 40-70k INR",
      content: "",
    },
    {
      date: "23 January 2023",
      title: "Should You Upgrade To Windows 11 Just Yet? + Installation of Windows 11",
      content: "If you are confused between updating your Windows 10 PC to Windows 11, then this blog is for you",
    },
    {
      date: "23 January 2023",
      title: "PC Builds for Coders - Budget PCs You Can Build This Festive Season",
      content: "In this blog we are building coding pc under 30k rupees",
    },
    {
      date: "23 January 2023",
      title: "[October 2021] Best Laptop Models to Buy For College Students",
      content: "In this blog, we will be discussing the best laptop models to buy for students.",
    },
    {
      date: "23 January 2023",
      title: "5 Ways to Save Money as a Student",
      content: "If you are a student who shops online and wants to save some money, you should consider the great Indian sale and Flipkart Big Billion Days.",
    },
    {
      date: "23 January 2023",
      title: "Everything About Pegasus Spyware",
      content: "Pegasus is a spyware developed by the Israeli cyber arms firm NSO Group that can be installed on mobile phones running iOS, Android & Blackberry",
    },
    {
      date: "23 January 2023",
      title: "Crontab as fast as possible!",
      content: "In this post, I will talk about the only crontab commands you will ever need if you are managing a web server.",
    },
    {
      date: "23 January 2023",
      title: "Windows 11 Leaked - What's new and why its exciting?",
      content: "Windows 11 is an upcoming version of Microsoft Windows. It will be the successor to Windows 10.",
    },
    {
      date: "23 January 2023",
      title: "How to deploy a Node.js application in production",
      content: "In this post, we will see how to run and deploy NodeJS apps in production.",
    },
    {
      date: "23 January 2023",
      title: "How to deploy flask app on Ubuntu VPS using Nginx and gunicorn",
      content: "In this post, we will see how to deploy flask applications using gunicorn WSGI server and nginx as a reverse proxy and static files server.",
    },
    {
      date: "23 January 2023",
      title: "Cheatsheet",
      content: "Cheatsheet for coding in",
    },
    {
      date: "23 January 2023",
      title: "HTML Cheatsheet",
      content: "HTML Cheatsheet for coding in HTML",
    },
    {
      date: "23 January 2023",
      title: "CSS Cheatsheet",
      content: "CSS Cheatsheet for coding in CSS",
    },
    {
      date: "23 January 2023",
      title: "JS Cheatsheet",
      content: "JS Cheatsheet for coding in JS",
    },
    {
      date: "23 January 2023",
      title: "PHP Cheatsheet",
      content: "PHP Cheatsheet for coding in PHP",
    },
    {
      date: "23 January 2023",
      title: "JAVA Cheatsheet",
      content: "JAVA Cheatsheet for coding in JAVA",
    },
    {
      date: "23 January 2023",
      title: "Python Cheatsheet",
      content: "Python Cheatsheet for coding in Python",
    },
    {
      date: "23 January 2023",
      title: "C Language Cheatsheet",
      content: "C Language Cheatsheet for coding in  C Language",
    },
  ];
  return (
    <div>
      {blogEntries.map((entry, index) => (
        <BlogCard key={index} date={entry.date} title={entry.title} content={entry.content} />
      ))}
    </div>
  );
};

export default Blog;
