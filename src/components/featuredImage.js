import React from 'react';


const FeaturedImage = ( props ) => {

	const { img_sizes, img_src, img_srcset } = props.image;
	const { title } = props;
	return (

		<img 
		className="card-img-top"
		width={ '300px' } 
		height={ '250px' } 
		src={ img_src[0]}
		srcSet={ img_srcset ? img_srcset : ''}
		alt={ title }

		/>
		
		)
};

export default FeaturedImage;