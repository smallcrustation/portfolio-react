import React, { useEffect, useState } from 'react'
import './Project.css'

const Project = ({
  imgOneName,
  imgTwoName,
  title,
  summary,
  tech,
  liveUrl,
  gitHub,
  githubApi,
  credentials
}) => {
  const [scrollPos, setScrollPos] = useState(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    // console.log('scroll')
    // console.log(window.pageYOffset)
    if (window.pageYOffset % 10 === 0) {
      setScrollPos(window.pageYOffset)
    }
    // setScrollPos(window.pageYOffset % 360)
  }

  const openSite = url => {
    window.open(url)
  }

  return (
    <article className="Project">
      <div className="Project-imgs fadeInUp" onClick={() => openSite(liveUrl)}>
        <img
          className="Project-img1"
          src={require(`../../assets/images/${imgOneName}`)}
          alt={title}
        />
        {imgTwoName ? (
          <img
            className="Project-img2"
            src={require(`../../assets/images/${imgTwoName}`)}
            alt={title}
          />
        ) : (
          ''
        )}
        <div
          className="Project-bg"
          style={{ transform: `rotate(${scrollPos}deg)` }}
        >
          <svg
            viewBox="0 0 1900 1900"
            className=""
            // style={{ transform: `rotate(${scrollPos}deg)` }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="grey"
              d="M776.64 1769.187c-339.61-4.3-760.32-193.93-752.561-605.062 0-62.815-23.275-139.64-23.235-211.688-8.868-212.772 55.736-445.799 189.453-628.04 16.711-21.534 34.51-45.114 52.477-61.584C512.856-46 1024.907-77.03 1314.034 132.416c284.817 178.416 581.877 496.461 462.072 868.078-6.307 25.42-9.675 52.036-13.46 78.697a1072.405 1072.405 0 01-33.912 155.276c-7.301 23.14-15.595 46.241-25.463 68.962-195.278 318.371-614.23 490.059-986.631 465.758z"
            />
          </svg>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      {credentials ? (
        <section>
          Username: {credentials.username} <br /> Password:{' '}
          {credentials.password}
        </section>
      ) : (
        ''
      )}
      <p>{tech}</p>
      <button onClick={() => openSite(liveUrl)}>View Site</button>
      <button onClick={() => openSite(gitHub)}>Repo</button>
      {githubApi ? <button>Repo api</button> : ''}
    </article>
  )
}

export default Project