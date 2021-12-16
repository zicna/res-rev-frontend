import React from 'react'
import { FaBlog, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
// import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="card">
      <div>
        <a target="_blank" href="https://dev.to/zicna">
          <FaBlog style={{ color: '#545779', fontSize: '3.5em' }} />
          Visit my blog
        </a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/zicna">
          <FaGithub style={{ color: '#545779', fontSize: '3.5em' }} />
          Visit my GitHub page
        </a>
      </div>
      <div>
        <a target="_blank" href="https://www.linkedin.com/feed/">
          <FaLinkedin style={{ color: '#545779', fontSize: '3.5em' }} />
          Contact me through Linkedin
        </a>
      </div>
      <div>
        <a target="_balnk" href="mailto:zivkovicmilan1987@gmail.com">
          <MdEmail style={{ color: '#545779', fontSize: '3.5em' }} />
          Email me directly
        </a>
      </div>
    </div>
  )
}
