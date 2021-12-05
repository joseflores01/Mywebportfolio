import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

function Footer() {
    return (
        <div className="footer">
            <br/><br/><p>Stay in touch</p>
            <div className="contactInfo">
                <a className="contactIcons" href="https://github.com/joseflores01"><GitHubIcon style={{ color: 'black' }}/></a>
                <a className="contactIcons" href="https://www.linkedin.com/in/jose-a-flores-oria-232b32219/"><LinkedInIcon color="primary" style={{ fontSize: 33 }}/></a>
                <a className="contactIcons" href="mailto:joseflores01@outlook.com" ><AlternateEmailIcon style={{ color: 'black' }}/></a>
            </div>
            <div className="copyright">
                <p>Copyright © {new Date().getFullYear()} José Flores</p>
            </div>
            
        </div>
    );
}

export default Footer;
