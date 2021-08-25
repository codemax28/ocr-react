import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ gallery, name,price}) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={gallery} alt={`${name} cover`} />
			{name}
			<p className="lmj-plant-item-price">{price} €</p>

			
		</li>
	)
}

export default PlantItem