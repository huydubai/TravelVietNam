import { formatDate } from "../../../utlis/helps";

function Blog({ blogs, color }) {
    return (
        <div className={`grid-container lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 '`}>
            {blogs.map(blog => (
                <a href={blog.url} key={blog.id}>
                    <div className={`group bg-${color}-100 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out overflow-hidden  `}>
                        <div className="relative h-60 bg-gray-500 rounded-t-lg overflow-hidden">
                            <img src={blog.imageSrc} alt=""
                                className="w-full h-full object-center object-cover group-hover:opacity-75 group-hover:scale-110 transition duration-300"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between min-h-[344px]">
                            <h3 className="mt-4 text-xl font-bold">{blog.title}</h3>
                            <div className="">
                                {blog.description.substring(0, 180)}...
                                <button className="read-more text-gray-500 hover:text-gray-700">Read more</button>
                            </div>
                            <div className="flex items-center justify-between text-md text-gray-600 hover:text-gray-800">
                                <div>
                                    <img src={blog.imageSrc} alt={blog.title}
                                        className="w-10 h-10 object-cover rounded-full"
                                    />
                                </div>
                                <div className="ml-4 flex-1">
                                    <p className="font-bold">{blog.source}</p>
                                    <p>
                                        {formatDate(blog.date)} - {blog.timeToRead} minutes read{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </a>
            ))
            }
        </div >
    );
}

export default Blog;