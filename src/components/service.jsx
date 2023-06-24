import React from 'react'

export default function Service() {
  return (
    <section className="service" id="service">
      <h3 className="styled">Service</h3>
      <h2>Available services that I can work on</h2>
      <ol>
        <li>
          <h4>Design Visual</h4>
          <div className="p">
            <p>
              Design that is unique, functional, and beautiful is at the heart
              of everything we create. We're obsessed with user experience
              designing not for ourselves but for real people with real
              problems.
            </p>
          </div>
          <div>
            <ul className="designs">
              <li>UI/UX Design</li>
              <li>Mockup Design</li>
              <li>Design Graphic</li>
              <li>Icon Design</li>
              <li>Logo Design</li>
            </ul>
          </div>
        </li>
        <li>
          <h4>Development</h4>
          <div className="p">
            <p>
              Create, learn and iterate. We understand how to extract logic and
              order from chaos. It's how we develop products that go beyond the
              forefront and become the next.
            </p>
          </div>
          <div>
            <ul className="designs">
              <li>IOS Development</li>
              <li>Website Development</li>
              <li>Android Development</li>
              <li>Backend Development</li>
              <li>Webflow Development</li>
            </ul>
          </div>
        </li>
      </ol>
    </section>
  )
}
