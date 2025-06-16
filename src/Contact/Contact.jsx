import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container" id="Contact">
            <h1>Contact me...</h1>
            <div className='contact-sub-container'>
            <div className="linkdin-cont">
                <a href="https://www.linkedin.com/in/rohit-chowdary-yalavarthi/" target="__blank">
                <img src="https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png" alt="linkdin"  className="linkdin"/>
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/rohit_yalavarthi/" target="__blank">
                    <img src="https://img.icons8.com/?size=160&id=nj0Uj45LGUYh&format=png" alt="insta" className='insta'/>
                </a>
            </div>
            <div>
                <a href="https://x.com/CRICKET52474052" target="__blank">
                    <img src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png" alt="Twitter" className='twitter'/>
                </a>
            </div>
            <div>
                <a href="mailto:yalavarthirohit2007@gmail.com" target="__blank">
                    <img src="https://img.icons8.com/?size=96&id=qyRpAggnV0zH&format=png" alt="mail" className='mail'/>
                </a>
            </div>
            </div>
            <div className="location">
                <a href='https://maps.app.goo.gl/LBRgP8fnXpjb7YqB9' target='__blank'>
                <img src="https://img.icons8.com/?size=100&id=3723&format=png" alt="pin"/>
                <p className='para'>Hyderabad</p>
                </a>
            </div>
        </div>
    )
}

export default Contact