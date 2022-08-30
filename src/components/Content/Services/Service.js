

function Service({ ...service }) {
    return (
        <div className={`w-full md:w-1/2 lg:w-1/3 p-8 ${service.border}`}>
            <div className="flex items-center mb-6">
                <img src={service.icon} alt="" className='w-12 h-12' />
                <p className='ml-4 text-xl font-semibold uppercase'>{service.service}</p>
            </div>
            <p className='leading-loose'>
                {service.description}
            </p>
        </div>
    );
}

export default Service;