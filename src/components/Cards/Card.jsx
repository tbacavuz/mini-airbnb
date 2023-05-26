import "./Card.css"
import star from "/src/assets/images/star.png"

export default function Card(data) {
	let array = ["asd", "asfsdfg"]
	return (
		<div className='card'>
			{!data.card.openSpots && <div className='card--badge'>SOLD OUT</div>}
			<img src={`/src/assets/images/${data.card.coverImg}`} />
			<div className='card--stats'>
				<img src={star} className='card--star' />
				<span>{data.card.stats.rating}</span>
				<span className='gray'>({data.card.stats.reviewCount}) • </span>
				<span className='gray'>{data.card.location}</span>
			</div>
			<p>{data.card.title}</p>
			<p>
				<span className='bold'>From ${data.card.price}</span> / person
			</p>
		</div>
	)
}
