import React, { useState } from 'react'
import Navbar from './components/Navbar'

const ViewallStudent = () => {
    const [data,chageData]=useState(
        [   {"name":"Adithya B","AdmNo":100,"rollNo":7},
            {"name":"Anusree","AdmNo":101,"rollNo":1},
            {"name":"Akhil","AdmNo":102,"rollNo":2},
            {"name":"Avani","AdmNo":103,"rollNo":3},
            {"name":"Sreerag","AdmNo":104,"rollNo":4}
        ]
    )
    return (
        <div>
            <Navbar/>
            <br></br>
            <center><h1>STUDENT ID</h1></center><br></br>
            <div className="container">
                <div className="row">
                   {
                    data.map(
                        (value,index)=>{
                            return <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAk1BMVEX///8AESEAABcAAABcXmXy9PP///0AABQADh/+/f8AEiAAABIAAA4ADyH8/PsACR0AAAVRVFgAABqLjpHIysvr7vCHi5F6foLCxchgZGiusbTY2twwMjd/goSVl5y6u7wKEB2goqYbHiQ8P0Zpa21AQkQRFScLDRAvND1zdnwOEhk1OT4aHCoqLC8VGCDi5OVmaXPMrgbYAAAEhElEQVR4nO2bC3OiOhiGAyHhlgRQUYEqxUvPsp6W/f+/7iQ4PcJWhdWQdHbyjE6tTuk7+a75ggAYDAaDwWAwGAwGg8FgMBgMhhaMuz++E7ijib/2NUr5CkbNIq+qKi8aBMC30rbYOBEUxPEumxe65bQwn2GQVm8kdD3PEniRG/7zY40AN6xe38NcWrmH0VnX/xDoLIBut2MgrYlr0Z42yh/k5xJpdDss/nezh9ZXuDoPOinwtaljDBdHckXaGZilmC+sHjBooHtTmkXjE9Lncyi7vWqcAK6AJm0YHK75Ws+sla48UkA6oI3+TPVIQ4k9II1btdahzAclocGQOPpvob66Yp/dD4TPhZsDX3Ue4fkj9Ia1We4JKVYmilU1FKTCpNSChXKb+sC5k3Y7cKOqTiM+2kejtIWZ+hTXvI/TNturd7hiN5R4z0QvjXJti4+/QNu7Bm27MelNz7oV7+O0zU7qy336Y1yc2on6/AaSkbl3pUHbckTNEtpKDdoWg52lIHpr1He+GB0HW0sOOTDl2ti4RsQia9XKWsZUVDtRX01b8sGF8+BCjzTATuGANphp29gX3Kr0VrRSKyBJqmvG6oP1nTwSWBHvx3Utm++DityMh8DelSKcNWnjWS5vpzVBO9bqrplFyY6nD+X7vx7le+yd1fSczYNH9RusPtysaR2G/UXjWslurn9c7mPgr/eQXCa+1JvFMFtgzNRXq2sU8+MMwjgMwxjCt2SrvtW9R7qolr+SxPm1zAtNc60b9K33Dc60fMD8cyJpX55n4kIWax/iE/6epnhggBWrpERA+H3nfZ/xlUNlsio0Buq6htCGWf7VwdI8gy6Eq7UmdUVN3MDyqEteVmt06dMQWq9eiMtzXhCSWvW5W2uzeRx/plyeP2Cy2eZlWebbTcJ/+6yyNIY8CXOTK6tdPCyLpFflqWeT0J5FMzskdndTHUQk4d2IumMGxirYayuDgIpnYPFn+7r7YQgrRVkFiwxRk2sDB9p5dolILTKKAn0MNM64bfMF6DRqWrn06rHkPQIL7pGKFrjZh8Kl/gSxdThOXf9524OO8eBpzLWlI2LuO+VZL8PMiR9QJoidafs5LKZHf2jQM/xv4HIyl+NxhvlW3vuaI0biwVxcZQp94qLF67hh5XWi1wJMlEp8gJyhIcN9QmeqTDJyqnUbKs7IJ9GGQbp7xqKCaJdOU7p4FX1SGt+31tPYtHh9MEA70Ndpes2EPFIQ+gQkke9xbMQdF2O00UnmXqtHi1VfHFnJn5M0p+j3YdEDeFZ0aiSHqqhWEkzKobxyyU4j++dKwoVwL1tbI2nZxMLJnuU8Wa668MIll4Msk3KjHuRKa47PltILkeStw+LDk+Zv3ofcg6TKfagTv6otcOU63JxI1EbmUrXVJBh3W8MwXkCk3kzoZ+Hz9eqTIMykFtRNLNGm8UamNLD+/W72J/Aiuefk/hbG7sx+npkbw63sHqnYHjLnebLDVnZXLr4Pw5AMWO+7NVK0MTmnLVhc5nucwRkMBoPBYDAYDAaDwWAwGP4W/gP/yUXbCyW2MgAAAABJRU5ErkJggg==">
                                    
                                </img>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text">rollNo:{value.rollNo}</p>
                                        <p class="card-text">AdmNo:{value.AdmNo}</p>

                                        
                                    </div>
                            </div>
                        </div>
                        }
                    )
                   }
                    
                    
                   
    

                </div>
            </div>
        </div>
    )
}

export default ViewallStudent