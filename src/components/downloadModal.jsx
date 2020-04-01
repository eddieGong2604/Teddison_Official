import React, { Component } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

ReactModal.defaultStyles.overlay.backgroundColor = "transparent";

const MerchButton = styled.button`
  background-color: black;
  color: #e8c990;
  border: none;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 15px;
  margin-bottom: 10px;
`;
class DownloadModal extends Component {
  constructor() {
    super();
    this.state = {
      soundCloudClicked: false,
      showModal: false,
      showModal2: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  handleSoundCloudIsClicked = () => {
    this.setState({ soundCloudClicked: true });
  };

  render() {
    console.log(this.props.track);
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#3d342f",
        border: "none",
        color: "#c2a26e"
      }
    };
    return (
      <>
        {" "}
        <button
          onClick={this.handleOpenModal}
          style={{
            border: "none",
            background: "transparent",
            color: "#75675e"
          }}
        >
          {" "}
          <i className="fa fa-download" aria-hidden="true"></i>
        </button>
        <ReactModal
          style={customStyles}
          isOpen={this.state.showModal}
          contentLabel="Modal #1 Global Style Override Example"
          onRequestClose={this.handleCloseModal}
        >
          <p>Follow me on SoundCloud to unlock Free Download</p>
          <a target="_blank" href="https://soundcloud.com/the_teddison">
            {" "}
            <MerchButton onClick={this.handleSoundCloudIsClicked}>
              {" "}
              <i
                className="fa fa-soundcloud"
                aria-hidden="true"
              ></i> Teddison{" "}
            </MerchButton>
          </a>

          <br></br>
          {this.state.soundCloudClicked && (
            <MerchButton>
              Download <span>"Track Name"</span>
            </MerchButton>
          )}
        </ReactModal>
      </>
    );
  }
}

export default DownloadModal;
