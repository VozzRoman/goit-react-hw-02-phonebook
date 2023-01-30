import styled from "styled-components";

export const Forms = styled.form`
display: block;


`;

export const EnterName = styled.input`
	display: flex;
	width: 95%;
	height: 25px;
	border-radius: 4px;
	padding: 0 10px;
	font-size: 18px;
	margin-top: 10px;
	margin-bottom: 10px;
	&::placeholder{
		color: #9c9c9c;
		font-size: 16px;
	}
`;

export const FildName = styled.label`
	margin-top: 40px;
	font-size: 19px;
	font-weight: 600;

`

export const Button = styled.button`
	cursor: pointer;
	display: flex;
	width: 200px;
	justify-content: center;
	align-items: center;
	height: 30px;
	border-radius: 4px;
	font-size: 16px;
	font-weight: 600;
	background-color: #5959ff;
	color: white;
	transition: background-color 250ms linear;
	&:hover, :focus{
		background-color: gray;
	}
	
`