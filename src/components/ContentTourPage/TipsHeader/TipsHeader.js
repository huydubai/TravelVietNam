function TipsHeader({ title, author, date }) {
    return (
        <div className='w-full mt-2'>
            <h2 className='text-xl sm:text-2xl font-bold'>
                {title}
            </h2>
            <p className='text-gray-500 mt-2 text-sm py-4'> {author}, {date}</p>
        </div>
    );
}

export default TipsHeader;