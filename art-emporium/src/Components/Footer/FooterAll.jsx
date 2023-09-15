import './FooterAll.css'

export default function FooterAll() {

  return (
    <>
    <footer className='footer'>

      <div className="footer-div-icon">

        <p className='footer-name-company'><strong>Art Living Emporium</strong></p>

        <div className='groupIcon'>
          <img className="footer-icon" src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/llamada_pkntz4.png" alt="Call" />
          <p>924 56 78 079</p>
        </div>

        <div className='groupIcon'>
          <img className="footer-icon" src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/email_k3vpey.png" alt="Mail" />
          <p>artlivingimporium@gmail.com</p>
        </div>

      </div>

      <div className="footer-div-icons">

        <p className= 'footer-red'><strong>Redes Sociales</strong></p>
        <img className="footer-icon" src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692951596/iconFB_vr2ed8.png" alt="Facebook" />
        <img className="footer-icon" src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692951596/iconWS_k6ohue.png" alt="Wasapt" />
        <img className="footer-icon" src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/twitter_5968958_wt6tbw.png" alt="Twitter" />
        <img className="footer-icon" src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1693214972/instagram_rjpq3o.png" alt="Instagram" />
        <img className="footer-icon" src="https://res.cloudinary.com/dhme3c8ll/image/upload/v1692951596/iconP_yqjl3j.png" alt="Pinter" />

      </div>

    </footer>
    </>
  );
}