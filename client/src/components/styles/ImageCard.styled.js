import styled from 'styled-components';

export const ImageCard = styled.div`
	display: flex;
	flex-direction: column;

	animation: slide-bottom 1s ease-in;

	@keyframes slide-bottom {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}

	img {
		height: 300px;
		width: 300px;
		object-fit: cover;
		border-radius: 20%;
		border: 1px solid black;

		&:hover {
			opacity: 0.5;
			cursor: pointer;
		}
	}
`;
