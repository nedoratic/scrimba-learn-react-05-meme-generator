const Main = () => {
	return (
		<main className='main'>
			<form className='main__form'>
				<label className='main__form__label--top-text' htmlFor='TopText'>
					Top text
				</label>
				<input className='main__form__input--top-text' id='TopText' placeholder='Shut up' type='text' />
				<label className='main__form__label--bottom-text' htmlFor='BottomText'>
					Bottom text
				</label>
				<input className='main__form__input--bottom-text' id='BottomText' placeholder='And take my money' type='text' />
				<button className='main__form__button'>Get a new meme image</button>
			</form>
		</main>
	);
};

export default Main;
