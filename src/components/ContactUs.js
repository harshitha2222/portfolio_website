import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Please feel free to reach out to me for any queries.
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Email: harshithareddy2297@gmail.com</h4>
              <h4>University Mail: hgarlapa@iu.edu</h4>
              <h4> linkedin: https://www.linkedin.com/in/harshitha4/</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
