import React from "react";


const Searchpage = ({  artistPerPage , totalArtist }) => {
	const artistNumbers =[];

	for(let i = 1; i <= Math.ceil(totalArtist / artistPerPage); i++){

		artistNumbers.push(i);
	}

	return (
		<nav aria-label="Page navigation example">
	  <ul className="pagination justify-content-center">
	  {artistNumbers.map(number => (
	    <li key={number} className="page-item">
	      <a className="page-link" href="#" tabindex="-1">{number}</a>
	    </li>
		
		))}

		</ul>
		</nav>

		)


}

export default Searchpage;