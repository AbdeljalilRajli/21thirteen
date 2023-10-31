import { Fragment } from "react";
const SideBar = () => {
  return (
    <Fragment>
      <div className="form-back-drop"></div>
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon">
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get in touch</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                document
                  .querySelector("body")
                  .classList.remove("side-content-visible");
              }}
            >
              <div className="form-group">
                <input type="text" name="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a href="https://www.linkedin.com/in/abdeljalil-r-02b3a91b3/">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://github.com/AbdeljalilRajli">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.instagram.com/rajli_abdeljalil/">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default SideBar;
