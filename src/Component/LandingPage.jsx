import MyNavbar from './Navbar';
import './Landing.css';
function LandingPage() {
    return (
        <>
            <MyNavbar></MyNavbar>
            <div className='hero'>
                <div className='hero--container'>
                    <h1 className="title">Welcome to Paradise Nursery</h1>
                    <p>Everything you need is here</p>
                    <button
                        className="button"
                        onClick={() => window.location.href = '/#Product'}
                    >
                        Get Started
                    </button>
                </div>
                <div className="about">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, enim quod voluptatum assumenda consequuntur, nobis magni, architecto explicabo sint sit illo officiis? Quam et tempore molestiae natus cumque qui impedit!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas et fugit, corporis quam excepturi architecto atque quaerat laboriosam. Esse dolore ad est omnis maxime deleniti accusantium vero. Aliquid, cumque.
                    <br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi eius unde vitae praesentium doloremque voluptatibus, architecto corrupti officia impedit quos quis voluptate quas perferendis velit repellendus modi saepe labore!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum earum nam ullam, eligendi, consequuntur asperiores est, consequatur maxime id tempore dolorem! Voluptatibus asperiores sunt sed quisquam possimus incidunt amet harum.
                </div>
            </div>
        </>
    );
}

export default LandingPage;