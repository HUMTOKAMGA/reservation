import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"
export default class Services extends Component {
    state= {
        services:[
            {
              icon:<FaCocktail />,
              title: "free cocktails",
              info: "He woke and found her stretched beside him in the tunnel’s ceiling. He woke and found her stretched beside him in the dark,"
            },
            {
              icon:<FaHiking />,
              title: "Endless Hiking",
              info: "He woke and found her stretched beside him in the tunnel’s ceiling. He woke and found her stretched beside him in the dark,"
            },
            {
              icon:<FaShuttleVan />,
              title: "free shuttle",
              info: "He woke and found her stretched beside him in the tunnel’s ceiling. He woke and found her stretched beside him in the dark,"
            },
            {
              icon:<FaBeer />,
              title: "Strongest beer",
              info: "He woke and found her stretched beside him in the tunnel’s ceiling. He woke and found her stretched beside him in the dark,"
            }
        ]
    }
  render() {
    return (
      <section className="services">
          <Title title="services" />
            <div className="services-center">
              {this.state.services.map((item , index)=> {
                  return <article key={index} className="service" >
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                  </article>
              })}
            </div>
      </section>
    )
  }
}
