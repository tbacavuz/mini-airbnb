import "./Experiences.css"
import star from "/src/assets/images/star.png"
import data from "/src/data/cards"
import Card from "/src/components/Cards/Card"

export default function Experiences() {
	const experiences = data.map((obj) => {
		return <Card card={obj} />
	})
	return <section className='experiences'>{experiences}</section>
}
