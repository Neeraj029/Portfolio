import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // call github api to get all repos of user neeraj029
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/neeraj029/repos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <center>
        <div className={styles.navbar}>
          <div className={styles.navbar_left}>
            <span className={inter.className}>Neeraj</span>
          </div>
          <div className={styles.navbar_right}>
            <a className={inter.className}>Home</a>
            <a className={inter.className}>About</a>
            <a className={inter.className}>Contact</a>
            <a className={inter.className}>Blog</a>
          </div>
        </div>
        <div className={styles.home}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png "
            height={200}
            width={200}
            style={{ borderRadius: "50%", margin: "0 auto" }}
            alt=""
          />
          <span
            className={inter.className}
            style={{ marginTop: 20, color: "#8c8989" }}
          >
            Hi, I'm Neeraj!
          </span>
          <span className={styles.header_flex}>Making amazing tech</span>
        </div>
        <div className={styles.about_me} style={{ marginTop: 50 }}>
          <span className={styles.header_flex}>About Me</span>
          <p className={inter.className} style={{ color: "gray" }}>
            hey! I'm 17 y/o developer who can build web, flutter apps & <br />{" "}
            super interested in reverse engineering
          </p>
        </div>

        <div className={styles.projects}>
          <span className={styles.header_flex}>Projects </span>
          <div className={styles.projects_grid}>
            {/* if repo has project topic then add project card and */}
            {data.map((item) => {
              if (item.topics.includes("project")) {
                return (
                  <div className={styles.project_card}>
                    <img
                      src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80 "
                      height={200}
                      width={300}
                      style={{ borderRadius: "10px" }}
                      alt=""
                    />
                    <span className={inter.className} style={{ marginTop: 10 }}>
                      {item.name}
                    </span>
                  </div>
                );
              }
            }, [])}
            <div className={styles.project_card}>
              <img
                src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80 "
                height={200}
                width={300}
                style={{ borderRadius: "10px" }}
                alt=""
              />
              <span className={inter.className} style={{ marginTop: 10 }}>
                Project 1
              </span>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
