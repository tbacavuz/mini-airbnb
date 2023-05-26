import "./Hero.css"
import photoGrid from "/src/assets/images/photo-grid.png"

export default function Hero() {
	return (
		<section className='hero'>
			<div className='grid'>
				<img src={photoGrid}></img>
			</div>
			<div>
				<h1>Online Experiences</h1>
				<p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
			</div>
		</section>
	)
}
