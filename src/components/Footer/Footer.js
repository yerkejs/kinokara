import React from 'react'
import './Footer.css'


const yerkeUrl = "https://instagram.ftse3-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/84449281_125554528984219_4812661297301412849_n.jpg?_nc_ht=instagram.ftse3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=9W5_eT6WHrAAX-EybKE&oh=8e2c3efda2aa898ea23d6c8704c20f68&oe=5F25ECF1"
const azaUrl = "https://sun9-17.userapi.com/c851036/v851036372/1c5b99/L164-8aoK_k.jpg"


const Person = (props) => (
    <div className="person">
        <img 
            className="person__photo"
            src={props.img}/>
        <div className="info">
            <label className="person__name">
                {props.name}
            </label>
            <a 
                target="_blank"
                className="person__link"
                href={props.insta}>
                Instagram
            </a>
        </div>
    </div>
)

const Footer = (porps) => (
    <div className="Footer">
        <label className="footer__name">
            KinoKara
        </label>
        <div className="authors">
            <label className="authors__name">Авторы проекта</label>
            <div className="content">
                <Person
                    img={yerkeUrl}
                    name="Yelzhan Yerkebulan"
                    insta={"https://instagram.com/yerkejs"}
                />
                <Person
                    img={azaUrl}
                    name="Bekbolat Azamat"
                    insta={"https://instagram.com/drop_west"}
                />
            </div>  
        </div>
    </div>
)


export default Footer;