import React from "react"
import PropTypes from "prop-types"
import { FacebookShareButton, FacebookIcon } from "react-share"
import { TwitterShareButton, TwitterIcon } from "react-share"
import { LinkedinShareButton, LinkedinIcon } from "react-share"
import { MailruShareButton, MailruIcon } from "react-share"

const Share = ({ socialConfig }) => (
  <div className="post-social">
    <FacebookShareButton
      url={socialConfig.config.url}
      quote={socialConfig.config.title}
      hashtag={""}
    >
      <FacebookIcon size={32} round={true} />
    </FacebookShareButton>
  </div>
)

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitter: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
}
Share.defaultProps = {
  tags: [],
}

export default Share
