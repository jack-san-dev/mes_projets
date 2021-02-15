import React from 'react'
import Navbar from './Navbar'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <>
                <Navbar />
                <div class="container my-5">
                    <div class="row justify-content-center">
                        <div class="card mx-2" style={{ width: '350px' }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAb1BMVEWdnJr////MzMyamZeYl5Xh4eC0tLO/vr2rqqijo6Ggn53IyMjd3dy1tbPa2tqbnpykk5KYoZ6pjI309PPs7OvnJjjZRlHNWGHCwsK5ubmTk5G5en2nkJDpIDTLXmXqHC/lLDyzgILaRE7RVFywhIYJA4ykAAADIklEQVR4nO3df3OaMByA8UAQoRbR1nbW2dWte/+vcfxUwA3r9xKcyfP5q1fv4HguQAz0qhQAAAAAAAAAAAAAAAAAAAD+Q9qoWx/NVHQcmPQY3fqAJqKzYG7M22bmUTdzJ+lu5lM3cxuLPOoW002CbjJ0kzl2exhqPr9m2uZft2j5uBx4Lj99W3xJmFYb87Dbo476dstixOl5+DX+dht+ENFtDN1kut3y42/znG7jOt3y7225/Gmf193ir30x3frcTb+/5lW4/On9R91NDe8WHcxDVDPeVi9VuHz/8W1dn6cqif8pOd+Yn92acMVoK7Jdvr5tz9coPe1WhVvv3z/Xim4X9Och+erw+lKONrpdMJi/rX9+HNbVzYFuowbjrbi2Heq7Kt1G9a9vT8WddHX4VYar76dnqyRnCyZdnnar76TNdKTudh0/u1WjTbXTEbqN6n5fqLNV4T7XdBvVHW+/2y/2+X7FeBs3vh5yJU+79dBt1Pg6+ZV87Da0fKbbiEvPAa/iYzcT6CZDNxmXuw1eJbXbTStnXlzdbHqHZrVbtA0SR8I9PAe9cDa7FdmCuSPdlOqHs9itzPbm0PWuF85et2jhVjbdC2etm2vZSkW49kdb3bSD2YoRN2sv17beJ9db57IVOl8+k9DcZvX89JBLp87cSdXgNZjml0Z38LfdGdzBTeisFk8zGU2b3WXpFHuzaNf+9dlmiitPcYVrLO58xEWzZk0ynOJAdNwugWZ33k2dXvmbYGf6uPJ+79mOoqxzhbN0X9Bb56YhURacJm3p1tyGixtPGy6aBcuduS3/D6I4CELr894kcCxclc3+91PXwpUn6eJ0PPbWQ9wKV5yXndFmdf2tCufKzSEtRttU671luHuf87Z0GPbOHavPF3SycSTb1M+zXDlNz/D8VIZuMnSToZsM3WToJkM3GbrJ0E2GbjJ0k6GbDN1k6CZDNxm6ydBNhm4ydJOhmwzdZOgmQzcZusnQTYZuMnSToZsM3WToJkM3GbrJlN2M/A+okk/dsiAxJvWqm0nedFMqNerWRwMAAAAAAAAAAAAAAAAAAIAzfwDaWzYADWo2sAAAAABJRU5ErkJggg==" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card mx-2" style={{ width: '350px' }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAb1BMVEWdnJr////MzMyamZeYl5Xh4eC0tLO/vr2rqqijo6Ggn53IyMjd3dy1tbPa2tqbnpykk5KYoZ6pjI309PPs7OvnJjjZRlHNWGHCwsK5ubmTk5G5en2nkJDpIDTLXmXqHC/lLDyzgILaRE7RVFywhIYJA4ykAAADIklEQVR4nO3df3OaMByA8UAQoRbR1nbW2dWte/+vcfxUwA3r9xKcyfP5q1fv4HguQAz0qhQAAAAAAAAAAAAAAAAAAAD+Q9qoWx/NVHQcmPQY3fqAJqKzYG7M22bmUTdzJ+lu5lM3cxuLPOoW002CbjJ0kzl2exhqPr9m2uZft2j5uBx4Lj99W3xJmFYb87Dbo476dstixOl5+DX+dht+ENFtDN1kut3y42/znG7jOt3y7225/Gmf193ir30x3frcTb+/5lW4/On9R91NDe8WHcxDVDPeVi9VuHz/8W1dn6cqif8pOd+Yn92acMVoK7Jdvr5tz9coPe1WhVvv3z/Xim4X9Och+erw+lKONrpdMJi/rX9+HNbVzYFuowbjrbi2Heq7Kt1G9a9vT8WddHX4VYar76dnqyRnCyZdnnar76TNdKTudh0/u1WjTbXTEbqN6n5fqLNV4T7XdBvVHW+/2y/2+X7FeBs3vh5yJU+79dBt1Pg6+ZV87Da0fKbbiEvPAa/iYzcT6CZDNxmXuw1eJbXbTStnXlzdbHqHZrVbtA0SR8I9PAe9cDa7FdmCuSPdlOqHs9itzPbm0PWuF85et2jhVjbdC2etm2vZSkW49kdb3bSD2YoRN2sv17beJ9db57IVOl8+k9DcZvX89JBLp87cSdXgNZjml0Z38LfdGdzBTeisFk8zGU2b3WXpFHuzaNf+9dlmiitPcYVrLO58xEWzZk0ynOJAdNwugWZ33k2dXvmbYGf6uPJ+79mOoqxzhbN0X9Bb56YhURacJm3p1tyGixtPGy6aBcuduS3/D6I4CELr894kcCxclc3+91PXwpUn6eJ0PPbWQ9wKV5yXndFmdf2tCufKzSEtRttU671luHuf87Z0GPbOHavPF3SycSTb1M+zXDlNz/D8VIZuMnSToZsM3WToJkM3GbrJ0E2GbjJ0k6GbDN1k6CZDNxm6ydBNhm4ydJOhmwzdZOgmQzcZusnQTYZuMnSToZsM3WToJkM3GbrJlN2M/A+okk/dsiAxJvWqm0nedFMqNerWRwMAAAAAAAAAAAAAAAAAAIAzfwDaWzYADWo2sAAAAABJRU5ErkJggg==" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card" style={{ width: '350px' }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAb1BMVEWdnJr////MzMyamZeYl5Xh4eC0tLO/vr2rqqijo6Ggn53IyMjd3dy1tbPa2tqbnpykk5KYoZ6pjI309PPs7OvnJjjZRlHNWGHCwsK5ubmTk5G5en2nkJDpIDTLXmXqHC/lLDyzgILaRE7RVFywhIYJA4ykAAADIklEQVR4nO3df3OaMByA8UAQoRbR1nbW2dWte/+vcfxUwA3r9xKcyfP5q1fv4HguQAz0qhQAAAAAAAAAAAAAAAAAAAD+Q9qoWx/NVHQcmPQY3fqAJqKzYG7M22bmUTdzJ+lu5lM3cxuLPOoW002CbjJ0kzl2exhqPr9m2uZft2j5uBx4Lj99W3xJmFYb87Dbo476dstixOl5+DX+dht+ENFtDN1kut3y42/znG7jOt3y7225/Gmf193ir30x3frcTb+/5lW4/On9R91NDe8WHcxDVDPeVi9VuHz/8W1dn6cqif8pOd+Yn92acMVoK7Jdvr5tz9coPe1WhVvv3z/Xim4X9Och+erw+lKONrpdMJi/rX9+HNbVzYFuowbjrbi2Heq7Kt1G9a9vT8WddHX4VYar76dnqyRnCyZdnnar76TNdKTudh0/u1WjTbXTEbqN6n5fqLNV4T7XdBvVHW+/2y/2+X7FeBs3vh5yJU+79dBt1Pg6+ZV87Da0fKbbiEvPAa/iYzcT6CZDNxmXuw1eJbXbTStnXlzdbHqHZrVbtA0SR8I9PAe9cDa7FdmCuSPdlOqHs9itzPbm0PWuF85et2jhVjbdC2etm2vZSkW49kdb3bSD2YoRN2sv17beJ9db57IVOl8+k9DcZvX89JBLp87cSdXgNZjml0Z38LfdGdzBTeisFk8zGU2b3WXpFHuzaNf+9dlmiitPcYVrLO58xEWzZk0ynOJAdNwugWZ33k2dXvmbYGf6uPJ+79mOoqxzhbN0X9Bb56YhURacJm3p1tyGixtPGy6aBcuduS3/D6I4CELr894kcCxclc3+91PXwpUn6eJ0PPbWQ9wKV5yXndFmdf2tCufKzSEtRttU671luHuf87Z0GPbOHavPF3SycSTb1M+zXDlNz/D8VIZuMnSToZsM3WToJkM3GbrJ0E2GbjJ0k6GbDN1k6CZDNxm6ydBNhm4ydJOhmwzdZOgmQzcZusnQTYZuMnSToZsM3WToJkM3GbrJlN2M/A+okk/dsiAxJvWqm0nedFMqNerWRwMAAAAAAAAAAAAAAAAAAIAzfwDaWzYADWo2sAAAAABJRU5ErkJggg==" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card" style={{ width: '350px' }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAb1BMVEWdnJr////MzMyamZeYl5Xh4eC0tLO/vr2rqqijo6Ggn53IyMjd3dy1tbPa2tqbnpykk5KYoZ6pjI309PPs7OvnJjjZRlHNWGHCwsK5ubmTk5G5en2nkJDpIDTLXmXqHC/lLDyzgILaRE7RVFywhIYJA4ykAAADIklEQVR4nO3df3OaMByA8UAQoRbR1nbW2dWte/+vcfxUwA3r9xKcyfP5q1fv4HguQAz0qhQAAAAAAAAAAAAAAAAAAAD+Q9qoWx/NVHQcmPQY3fqAJqKzYG7M22bmUTdzJ+lu5lM3cxuLPOoW002CbjJ0kzl2exhqPr9m2uZft2j5uBx4Lj99W3xJmFYb87Dbo476dstixOl5+DX+dht+ENFtDN1kut3y42/znG7jOt3y7225/Gmf193ir30x3frcTb+/5lW4/On9R91NDe8WHcxDVDPeVi9VuHz/8W1dn6cqif8pOd+Yn92acMVoK7Jdvr5tz9coPe1WhVvv3z/Xim4X9Och+erw+lKONrpdMJi/rX9+HNbVzYFuowbjrbi2Heq7Kt1G9a9vT8WddHX4VYar76dnqyRnCyZdnnar76TNdKTudh0/u1WjTbXTEbqN6n5fqLNV4T7XdBvVHW+/2y/2+X7FeBs3vh5yJU+79dBt1Pg6+ZV87Da0fKbbiEvPAa/iYzcT6CZDNxmXuw1eJbXbTStnXlzdbHqHZrVbtA0SR8I9PAe9cDa7FdmCuSPdlOqHs9itzPbm0PWuF85et2jhVjbdC2etm2vZSkW49kdb3bSD2YoRN2sv17beJ9db57IVOl8+k9DcZvX89JBLp87cSdXgNZjml0Z38LfdGdzBTeisFk8zGU2b3WXpFHuzaNf+9dlmiitPcYVrLO58xEWzZk0ynOJAdNwugWZ33k2dXvmbYGf6uPJ+79mOoqxzhbN0X9Bb56YhURacJm3p1tyGixtPGy6aBcuduS3/D6I4CELr894kcCxclc3+91PXwpUn6eJ0PPbWQ9wKV5yXndFmdf2tCufKzSEtRttU671luHuf87Z0GPbOHavPF3SycSTb1M+zXDlNz/D8VIZuMnSToZsM3WToJkM3GbrJ0E2GbjJ0k6GbDN1k6CZDNxm6ydBNhm4ydJOhmwzdZOgmQzcZusnQTYZuMnSToZsM3WToJkM3GbrJlN2M/A+okk/dsiAxJvWqm0nedFMqNerWRwMAAAAAAAAAAAAAAAAAAIAzfwDaWzYADWo2sAAAAABJRU5ErkJggg==" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card" style={{ width: '350px' }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAb1BMVEWdnJr////MzMyamZeYl5Xh4eC0tLO/vr2rqqijo6Ggn53IyMjd3dy1tbPa2tqbnpykk5KYoZ6pjI309PPs7OvnJjjZRlHNWGHCwsK5ubmTk5G5en2nkJDpIDTLXmXqHC/lLDyzgILaRE7RVFywhIYJA4ykAAADIklEQVR4nO3df3OaMByA8UAQoRbR1nbW2dWte/+vcfxUwA3r9xKcyfP5q1fv4HguQAz0qhQAAAAAAAAAAAAAAAAAAAD+Q9qoWx/NVHQcmPQY3fqAJqKzYG7M22bmUTdzJ+lu5lM3cxuLPOoW002CbjJ0kzl2exhqPr9m2uZft2j5uBx4Lj99W3xJmFYb87Dbo476dstixOl5+DX+dht+ENFtDN1kut3y42/znG7jOt3y7225/Gmf193ir30x3frcTb+/5lW4/On9R91NDe8WHcxDVDPeVi9VuHz/8W1dn6cqif8pOd+Yn92acMVoK7Jdvr5tz9coPe1WhVvv3z/Xim4X9Och+erw+lKONrpdMJi/rX9+HNbVzYFuowbjrbi2Heq7Kt1G9a9vT8WddHX4VYar76dnqyRnCyZdnnar76TNdKTudh0/u1WjTbXTEbqN6n5fqLNV4T7XdBvVHW+/2y/2+X7FeBs3vh5yJU+79dBt1Pg6+ZV87Da0fKbbiEvPAa/iYzcT6CZDNxmXuw1eJbXbTStnXlzdbHqHZrVbtA0SR8I9PAe9cDa7FdmCuSPdlOqHs9itzPbm0PWuF85et2jhVjbdC2etm2vZSkW49kdb3bSD2YoRN2sv17beJ9db57IVOl8+k9DcZvX89JBLp87cSdXgNZjml0Z38LfdGdzBTeisFk8zGU2b3WXpFHuzaNf+9dlmiitPcYVrLO58xEWzZk0ynOJAdNwugWZ33k2dXvmbYGf6uPJ+79mOoqxzhbN0X9Bb56YhURacJm3p1tyGixtPGy6aBcuduS3/D6I4CELr894kcCxclc3+91PXwpUn6eJ0PPbWQ9wKV5yXndFmdf2tCufKzSEtRttU671luHuf87Z0GPbOHavPF3SycSTb1M+zXDlNz/D8VIZuMnSToZsM3WToJkM3GbrJ0E2GbjJ0k6GbDN1k6CZDNxm6ydBNhm4ydJOhmwzdZOgmQzcZusnQTYZuMnSToZsM3WToJkM3GbrJlN2M/A+okk/dsiAxJvWqm0nedFMqNerWRwMAAAAAAAAAAAAAAAAAAIAzfwDaWzYADWo2sAAAAABJRU5ErkJggg==" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card" style={{ width: '350px' }}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAb1BMVEWdnJr////MzMyamZeYl5Xh4eC0tLO/vr2rqqijo6Ggn53IyMjd3dy1tbPa2tqbnpykk5KYoZ6pjI309PPs7OvnJjjZRlHNWGHCwsK5ubmTk5G5en2nkJDpIDTLXmXqHC/lLDyzgILaRE7RVFywhIYJA4ykAAADIklEQVR4nO3df3OaMByA8UAQoRbR1nbW2dWte/+vcfxUwA3r9xKcyfP5q1fv4HguQAz0qhQAAAAAAAAAAAAAAAAAAAD+Q9qoWx/NVHQcmPQY3fqAJqKzYG7M22bmUTdzJ+lu5lM3cxuLPOoW002CbjJ0kzl2exhqPr9m2uZft2j5uBx4Lj99W3xJmFYb87Dbo476dstixOl5+DX+dht+ENFtDN1kut3y42/znG7jOt3y7225/Gmf193ir30x3frcTb+/5lW4/On9R91NDe8WHcxDVDPeVi9VuHz/8W1dn6cqif8pOd+Yn92acMVoK7Jdvr5tz9coPe1WhVvv3z/Xim4X9Och+erw+lKONrpdMJi/rX9+HNbVzYFuowbjrbi2Heq7Kt1G9a9vT8WddHX4VYar76dnqyRnCyZdnnar76TNdKTudh0/u1WjTbXTEbqN6n5fqLNV4T7XdBvVHW+/2y/2+X7FeBs3vh5yJU+79dBt1Pg6+ZV87Da0fKbbiEvPAa/iYzcT6CZDNxmXuw1eJbXbTStnXlzdbHqHZrVbtA0SR8I9PAe9cDa7FdmCuSPdlOqHs9itzPbm0PWuF85et2jhVjbdC2etm2vZSkW49kdb3bSD2YoRN2sv17beJ9db57IVOl8+k9DcZvX89JBLp87cSdXgNZjml0Z38LfdGdzBTeisFk8zGU2b3WXpFHuzaNf+9dlmiitPcYVrLO58xEWzZk0ynOJAdNwugWZ33k2dXvmbYGf6uPJ+79mOoqxzhbN0X9Bb56YhURacJm3p1tyGixtPGy6aBcuduS3/D6I4CELr894kcCxclc3+91PXwpUn6eJ0PPbWQ9wKV5yXndFmdf2tCufKzSEtRttU671luHuf87Z0GPbOHavPF3SycSTb1M+zXDlNz/D8VIZuMnSToZsM3WToJkM3GbrJ0E2GbjJ0k6GbDN1k6CZDNxm6ydBNhm4ydJOhmwzdZOgmQzcZusnQTYZuMnSToZsM3WToJkM3GbrJlN2M/A+okk/dsiAxJvWqm0nedFMqNerWRwMAAAAAAAAAAAAAAAAAAIAzfwDaWzYADWo2sAAAAABJRU5ErkJggg==" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home