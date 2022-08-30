import hotelIcon from './assets/icons/icon1.svg'
import ticketIcon from './assets/icons/icon2.svg'
import rentalsIcon from './assets/icons/icon3.svg'
import toursIcon from './assets/icons/icon4.svg'
import guideIcon from './assets/icons/icon5.svg'
import visaIcon from './assets/icons/icon6.svg'

export const leftLinks = [
    { href: '/#tour', title: 'Tours' },
    { href: '/#tips', title: 'Tips' },
    { href: '/#services', title: 'Services' },
]
export const rightLinks = [
    { href: '/#places', title: 'Places' },
    { href: '/#blogs', title: 'Blogs' },
    { href: '/#contact', title: 'Contact' },
]

export const services = [
    {
        id: 1,
        service: 'hotel',
        description:
            'We have connections with all the best hotels all over Vietnam. We will do our best to make your stay as enjoyable as possible.',
        icon: hotelIcon,
        border: 'border-b md:border-r',
    },
    {
        id: 2,
        service: 'ticket',
        description:
            'It is our pleasure to assist you with booking plain, train, bus tickets or any other travel services everywhere in Vietnam.',
        icon: ticketIcon,
        border: 'border-b lg:border-r',
    },
    {
        id: 3,
        service: 'rentals',
        description:
            'We also offer car, motorbike rental with affordable prices & sim-cards with fast internet access with good connection in every region in Vietnam.',
        icon: rentalsIcon,
        border: 'border-b md:border-r  lg:border-r-0',
    },
    {
        id: 4,
        service: 'tours',
        description:
            "We specialize in group tours, private tours and adventure tours for all regions in Vietnam. Especially, we can customize our tours to meet your family's needs.",
        icon: toursIcon,
        border: 'border-b lg:border-r lg:border-b-0',
    },
    {
        id: 5,
        service: 'guide',
        description:
            'Our guides are friendly, and knowledgeable. We take extra care in choosing the right guide for your trips to suit your language, travel and food preferences.',
        icon: guideIcon,
        border: 'border-b md:border-r md:border-b-0  lg:border-b-0',
    },
    {
        id: 6,
        service: 'visa',
        description:
            'We offer a wide range of visa services including: visa extension, renewal, work permit, residence card...',
        icon: visaIcon,
        border: '',
    },
];
export const tours = [

    {
        id: 1,
        name: 'Halong Bay',
        price: '$175',
        imageSrc: halong1,
        imageAlt: 'West Lake in Hanoi',
        images: [halong1, halong2, halong3, halong4, halong5],
        region: 'Halong',
        duration: '2D1N',
        startDate: 'Everyday',
        description: `You will not only explore one of the most beautiful caves in Halong Bay but will also have the chance to go kayaking or bamboo boat rowing, as well as visiting and interacting with people at a local fishing village.`,
        itinerary: [
            {
                highLight: `Hanoi - Halong Bay - Daragon Cruise - Fishing Village - Thien Cung cave`,
                details: [
                    `07:30 - 8:30 Meet our tour guide and bus then take a 3.5-hour bus drive through fertile rice fields to Ha Long Bay. Have a break en-route in Hai Duong City to free your legs.`,
                    `12:30 Board our Dragon Cruise and start cruising among limestone islands and photograph of stunning landscapes of Ha Long.`,
                    `13:00 Savor your lunch on board while passing by beautiful Stone Dog, Incense Burner islets. `,
                    `14:00 Stop at a fishing village to see local fish-men community and know more about their life. Cruising further to take photos of Ha Long Bay symbol, a “Fighting cock” rock.`,
                    `15:00 Visit Thien Cung “Heavenly Palace” cave, the most beautiful in Ha Long Bay. Get back and cruise more around emerald water. `,
                    `16:15 Stop at the harbor again to catch the bus to Hanoi. `,
                    `20:00 Arrive back in Hanoi. Tour ends.`,
                ],
            },
        ],
        included: [
            'Modern air-con transport, pick-up and drop-off at hotel.',
            'Meals as mentioned in the itineraries.',
            'All entrance fees',
            `English-speaking guide (other languages available upon request depending on availability. A small surcharge may apply to some languages)`,
            'Mineral Water (2 bottles/person)',
            'Insurance',
        ],
        excluded: [
            'Beverages and other meals are not mentioned in the program.',
            'Visa fees to Vietnam',
            `Personal Expenses (laundry, telephone, shopping…)`,
            'Tip/Gratuity',
            `Any additional expenses caused by reasons beyond our control such as natural calamities (typhoon, floods), flight delays, rescheduling or cancellations, any accidents, medical evacuations, riots, strikes etc...`,
        ],
        cancellationPolicy: [
            `If client cancels at least 7 day(s) in advance of the scheduled departure, there is no cancellation fee.`,
            `If client cancels between 3 and 6 day(s) in advance of the scheduled departure, there is a 50 percent cancellation fee.`,
            `If client cancels within 2 day(s) of the scheduled departure, there is a 100 percent cancellation fee.`,
        ],
        confirmationPolicy: [
            `The customer receives a confirmation voucher via email within 24 hours of successful booking`,
            `In case the preferred slots are unavailable, an alternate schedule of the customers preference will be arranged and a new confirmation voucher will be sent via email.`,
            `Alternatively, the customer may choose to cancel their booking and a full refund will be processed.`,
        ],
        additionalInfo: [
            `Infants must sit on laps`,
            `Children must be accompanied by an adult`,
            `Please advise any specific dietary requirements at time of booking`,
            `Not wheelchair accessible`,
            `Not recommended for pregnant travelers`,
            `Children under 18 cannot book this tour alone`,
            `This tour/activity will have a maximum of 50 travelers`,
            `Operated by Reverie Travel`,
        ],

        averageRating: 5,
        numReviews: 1,
        reviews: [
            {
                _id: '620cfc4608c82135e823a357',
                rating: 5,
                title: 'Great service from Reverie travel',
                comment: 'Best tour ever!',
                product: '620486f7facd223de7588b53',
                createdAt: '2022-02-16T13:29:42.150Z',
                updatedAt: '2022-02-16T13:29:42.150Z',

                user: {
                    email: 'namnguyen@gmail.com',
                    name: 'Nam Nguyen',
                    role: 'customer',
                    _id: '620486f7facd223de7588b4d',
                },
            },
        ],
    },
]