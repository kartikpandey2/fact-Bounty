<<<<<<< HEAD
import React from "react";
=======
import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import PropTypes from "prop-types";
>>>>>>> fix: google login
import { GoogleLogin } from "react-google-login";

import { OauthUser } from "./actions/OAuthUser";

<<<<<<< HEAD
import "./index.css";
=======
import Toast from "../components/Snackbar";
import styles from "./index.css";
>>>>>>> fix: google login

class GoogleContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      status: "unknown",
      errors: null,
      openToast: false
    };
  }

  responseGoogle = res => {
    const creds = {
      type: "google",
      name: res.profileObj.name,
      email: res.profileObj.email
    };
    this.props.OauthUser(creds);
  };

  errors = err => {
    this.setState({ errors: err, openToast: true });
  };

  closeToast = () => {
    this.setState({ openToast: false });
  };

  render() {
    const { openToast } = this.state;
    return (
      <Fragment>
        {openToast && (
          <Toast
            open={openToast}
            onClose={this.closeToast}
            message="Something went wrong, Try again later"
            variant="error"
          />
        )}
        <GoogleLogin
          render={renderProps => (
            <Button className={styles.fbauth} onClick={renderProps.onClick}>
              <img
                style={{ width: "14px", marginRight: "7px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="icon"
              />
              Login with Google
            </Button>
          )}
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={this.responseGoogle}
          onFailure={this.errors}
        />
      </Fragment>
    );
  }
}

GoogleContainer.propTypes = {
  OauthUser: PropTypes.func.isRequired
};

const mapStateToProps = null;

const mapDispatchToProps = {
  OauthUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleContainer);
