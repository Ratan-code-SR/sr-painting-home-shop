

const Subscribe = () => {
	return (
		<section className=" justify-center items-center  text-yellow-50 grid grid-cols-1
		bg-gradient-to-r from-blue-600 to-black
		">
			<div className="hero  h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/3CmFnFz/images-11.jpg)' }}>
				<div className="hero-overlay ">
					<div className="hero-content text-center  flex justify-end">
						<div className="grid grid-cols-2 items-center p-2 md:w-1/2 justify-end  gap-5  bg-gradient-to-r from-[#7c3aedc4] to-[#d668df8c]  flex-col  h-[200px] rounded-md">
							<div className="w-full  bg-gradient-to-r from-violet-600 to-[#d668df] flex flex-col  justify-centeritems-center rounded-md p-1  ">
								<h1>Happy Client</h1>
								<p className="text-5xl">100%</p>
							</div>
						
							<div className="w-full  bg-gradient-to-r from-violet-600 to-[#d668df] flex flex-col  justify-center items-center rounded-md p-1 ">
								<h1>Positive Review</h1>
								<p className="text-5xl">12K</p>
							</div>

						</div>
					</div>
				</div>
			</div>

		</section>
	);
};

export default Subscribe;